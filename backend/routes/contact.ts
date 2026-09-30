import { Router, Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const contactRouter = Router();

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt: string;
  emailSent?: boolean;
}

// In-memory store for messages sent via portfolio
const messages: ContactMessage[] = [];

contactRouter.post('/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || typeof name !== 'string' || name.trim() === '') {
      res.status(400).json({ error: 'Name is required' });
      return;
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      res.status(400).json({ error: 'A valid email address is required' });
      return;
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      res.status(400).json({ error: 'Message must be at least 5 characters long' });
      return;
    }

    const newMessage: ContactMessage = {
      id: `msg_${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      subject: subject ? String(subject).trim() : 'Portfolio Contact Form Message',
      message: message.trim(),
      createdAt: new Date().toISOString(),
      emailSent: false
    };

    messages.push(newMessage);
    console.log(`[Contact API] New message received from ${newMessage.name} (${newMessage.email}): ${newMessage.subject}`);

    // Target recipient address
    const recipientEmail = process.env.EMAIL_RECEIVER || 'hibatharunnumshaik@gmail.com';

    // SMTP Configuration from environment variables
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpUser && smtpPass) {
      try {
        const port = Number(process.env.SMTP_PORT) || 587;
        const isSecure = port === 465 || process.env.SMTP_SECURE === 'true';

        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: port,
          secure: isSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass
          },
          connectionTimeout: 8000, // 8s connection timeout
          greetingTimeout: 8000,
          socketTimeout: 10000,   // 10s socket timeout
          tls: {
            rejectUnauthorized: false
          }
        });

        const mailOptions = {
          from: `"${newMessage.name} via Portfolio" <${smtpUser}>`,
          to: recipientEmail,
          replyTo: newMessage.email,
          subject: `[Portfolio Contact] ${newMessage.subject}`,
          text: `You received a new message from your portfolio contact form:\n\n` +
                `Name: ${newMessage.name}\n` +
                `Email: ${newMessage.email}\n` +
                `Subject: ${newMessage.subject}\n\n` +
                `Message:\n${newMessage.message}\n\n` +
                `Sent at: ${new Date().toLocaleString()}`,
          html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #080d1a; color: #f1f5f9; border-radius: 16px; border: 1px solid rgba(168,85,247,0.3);">
              <div style="border-bottom: 2px solid #334155; padding-bottom: 16px; margin-bottom: 20px;">
                <h2 style="color: #c084fc; margin: 0 0 6px 0; font-size: 20px;">📬 New Message from Portfolio</h2>
                <p style="color: #94a3b8; margin: 0; font-size: 13px;">Someone filled out the contact form on your portfolio website.</p>
              </div>
              <div style="margin-bottom: 16px;">
                <p style="margin: 6px 0;"><strong style="color: #38bdf8;">Name:</strong> ${newMessage.name}</p>
                <p style="margin: 6px 0;"><strong style="color: #38bdf8;">Email:</strong> <a href="mailto:${newMessage.email}" style="color: #a855f7; text-decoration: none;">${newMessage.email}</a></p>
                <p style="margin: 6px 0;"><strong style="color: #38bdf8;">Subject:</strong> ${newMessage.subject}</p>
              </div>
              <div style="padding: 16px; background-color: #030712; border-left: 4px solid #a855f7; border-radius: 8px; margin-top: 16px;">
                <p style="margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #e2e8f0;">${newMessage.message}</p>
              </div>
              <div style="margin-top: 24px; padding-top: 12px; border-top: 1px solid #1e293b; font-size: 11px; color: #64748b; text-align: center;">
                Received on ${new Date().toLocaleString()} • Portfolio Contact Service
              </div>
            </div>
          `
        };

        // Enforce a hard 10-second timeout so the API response never hangs indefinitely
        const sendMailPromise = transporter.sendMail(mailOptions);
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('SMTP Email send timed out after 10 seconds')), 10000)
        );

        await Promise.race([sendMailPromise, timeoutPromise]);
        newMessage.emailSent = true;
        console.log(`[Contact API] Email successfully sent to ${recipientEmail}`);

        res.status(200).json({
          success: true,
          message: 'Thank you for reaching out! Your message has been sent successfully.',
          data: newMessage
        });
        return;
      } catch (emailError) {
        console.error('[Contact API Email Sending Error]:', emailError);
        res.status(200).json({
          success: true,
          message: 'Thank you for reaching out! Your message has been received.',
          warning: 'Could not send email directly via SMTP, but your message has been recorded.',
          data: newMessage
        });
        return;
      }
    } else {
      console.log(`[Contact API] Message recorded in backend memory. To send direct emails to ${recipientEmail}, set SMTP_USER and SMTP_PASS in environment variables.`);
      res.status(200).json({
        success: true,
        message: 'Thank you for reaching out! Your message has been sent successfully.',
        data: newMessage
      });
      return;
    }
  } catch (error) {
    console.error('[Contact API Error]:', error);
    res.status(500).json({ error: 'Failed to process message. Please try again later.' });
  }
});

contactRouter.get('/contact/messages', (_req: Request, res: Response) => {
  res.json({
    total: messages.length,
    messages
  });
});

