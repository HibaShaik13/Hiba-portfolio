import PDFDocument from 'pdfkit';

export function buildResumePdf(): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: 'A4',
      margin: 45,
      autoFirstPage: true
    });

    const chunks: Buffer[] = [];
    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', (err) => reject(err));

    // Color Palette
    const primaryColor = '#0f172a'; // dark navy
    const secondaryColor = '#334155'; // slate
    const accentColor = '#2563eb'; // blue

    // Header
    doc
      .fillColor(primaryColor)
      .fontSize(22)
      .font('Helvetica-Bold')
      .text('Hiba Tharunnum Shaik', { align: 'left' });

    doc
      .fillColor(secondaryColor)
      .fontSize(12)
      .font('Helvetica-Oblique')
      .text('Cybersecurity & Ethical Hacking Enthusiast', { align: 'left' });

    doc.moveDown(0.3);

    doc
      .fillColor(secondaryColor)
      .fontSize(9.5)
      .font('Helvetica')
      .text('shaikhibatharunnum@gmail.com   |   +919705406705   |   Guntur, Andhra Pradesh', { align: 'left' });

    doc
      .fillColor(accentColor)
      .fontSize(9.5)
      .font('Helvetica')
      .text('linkedin.com/in/hiba-tharunnum-shaik-60a33b393', { align: 'left', link: 'https://linkedin.com/in/hiba-tharunnum-shaik-60a33b393' });

    doc.moveDown(0.5);

    // Section Header Helper
    const addSectionHeader = (title: string) => {
      doc.moveDown(0.4);
      doc
        .fillColor(primaryColor)
        .fontSize(13)
        .font('Helvetica-Bold')
        .text(title);
      
      const y = doc.y + 2;
      doc
        .strokeColor('#cbd5e1')
        .lineWidth(1)
        .moveTo(45, y)
        .lineTo(550, y)
        .stroke();

      doc.y = y + 8;
    };

    // --- INTERNSHIP EXPERIENCE ---
    addSectionHeader('Internship Experience');

    doc
      .fillColor(primaryColor)
      .fontSize(10.5)
      .font('Helvetica-Bold')
      .text('Cybersecurity Intern – Prodigy Infotech');

    doc.moveDown(0.2);

    doc
      .fillColor(secondaryColor)
      .fontSize(9.5)
      .font('Helvetica')
      .text('• Worked on practical cybersecurity tasks including encryption techniques, password strength analysis, and network packet analyzer simulation.', { lineGap: 3 })
      .text('• Applied programming skills in Python, Java, C, and MySQL to understand cryptography, system security, and vulnerability concepts, strengthening analytical and problem-solving skills in cybersecurity.', { lineGap: 3 });

    // --- PROJECTS ---
    addSectionHeader('Projects');

    // Project 1
    doc
      .fillColor(primaryColor)
      .fontSize(10.5)
      .font('Helvetica-Bold')
      .text('File Encryption & Decryption Tool');
    doc
      .fillColor(secondaryColor)
      .fontSize(9.5)
      .font('Helvetica')
      .text('Created a Python application to encrypt and decrypt files using cryptographic techniques to ensure secure data storage and transmission.', { lineGap: 3 });

    doc.moveDown(0.4);

    // Project 2
    doc
      .fillColor(primaryColor)
      .fontSize(10.5)
      .font('Helvetica-Bold')
      .text('Network Packet Analyzer');
    doc
      .fillColor(secondaryColor)
      .fontSize(9.5)
      .font('Helvetica')
      .text('Developed a Python-based tool to capture and analyze network packets, identifying source/destination IPs, protocols, and traffic details for network security analysis.', { lineGap: 3 });

    doc.moveDown(0.4);

    // Project 3
    doc
      .fillColor(primaryColor)
      .fontSize(10.5)
      .font('Helvetica-Bold')
      .text('Skill Nova');
    doc
      .fillColor(secondaryColor)
      .fontSize(9.5)
      .font('Helvetica')
      .text('Built an ATS-based resume analysis system using NLP to extract skills and calculate job match scores. Developed a recommendation engine suggesting relevant roles based on skill matching. Implemented backend APIs using Flask and stored results in MySQL.', { lineGap: 3 });

    // --- SKILLS ---
    addSectionHeader('Skills');

    const addSkillLine = (label: string, value: string) => {
      doc
        .fillColor(primaryColor)
        .fontSize(9.5)
        .font('Helvetica-Bold')
        .text(`${label}: `, { continued: true })
        .font('Helvetica')
        .fillColor(secondaryColor)
        .text(value, { lineGap: 3 });
    };

    addSkillLine('Programming languages', 'Python  |  C  |  Data structures and Algorithms  |  Design and Analysis of Algorithms  |  Linux');
    addSkillLine('Databases', 'MYSQL');
    addSkillLine('Web technologies', 'HTML  |  CSS  |  Javascript');
    addSkillLine('Cyber Security skills', 'Network Security  |  Cryptography Fundamentals  |  Packet Analysis  |  Password Security & Authentication  |  Encryption & Decryption Techniques  |  Vulnerability Analysis');
    addSkillLine('Tools', 'Git  |  Github  |  VS code  |  Linux');

    // PAGE 2
    doc.addPage();

    // --- EDUCATION ---
    addSectionHeader('Education');

    // Edu 1
    doc
      .fillColor(secondaryColor)
      .fontSize(9)
      .font('Helvetica-Oblique')
      .text('06/2024 – Present');
    
    doc
      .fillColor(primaryColor)
      .fontSize(10.5)
      .font('Helvetica-Bold')
      .text('Bachelor of Technology - Computer Science');
    
    doc
      .fillColor(secondaryColor)
      .fontSize(9.5)
      .font('Helvetica-Oblique')
      .text('VFSTR - Vignan\'s Foundation for Science, Technology and Research');

    doc
      .fillColor(secondaryColor)
      .fontSize(9)
      .font('Helvetica')
      .text('Guntur, India  |  CGPA - 8.06');

    doc.moveDown(0.6);

    // Edu 2
    doc
      .fillColor(secondaryColor)
      .fontSize(9)
      .font('Helvetica-Oblique')
      .text('07/2022 – 07/2024');
    
    doc
      .fillColor(primaryColor)
      .fontSize(10.5)
      .font('Helvetica-Bold')
      .text('Intermediate');
    
    doc
      .fillColor(secondaryColor)
      .fontSize(9.5)
      .font('Helvetica-Oblique')
      .text('Sri Chaitanya junior college');

    doc
      .fillColor(secondaryColor)
      .fontSize(9)
      .font('Helvetica')
      .text('Guntur, India  |  CGPA - 9.7');

    doc.moveDown(0.6);

    // Edu 3
    doc
      .fillColor(secondaryColor)
      .fontSize(9)
      .font('Helvetica-Oblique')
      .text('03/2021 – 03/2022');
    
    doc
      .fillColor(primaryColor)
      .fontSize(10.5)
      .font('Helvetica-Bold')
      .text('Matriculation');
    
    doc
      .fillColor(secondaryColor)
      .fontSize(9.5)
      .font('Helvetica-Oblique')
      .text('Ushodaya English Medium School');

    doc
      .fillColor(secondaryColor)
      .fontSize(9)
      .font('Helvetica')
      .text('Guntur, India  |  CGPA - 8.5 (CBSE)');

    // --- CERTIFICATES ---
    addSectionHeader('Certificates');

    const addCert = (name: string, issuer: string) => {
      doc
        .fillColor(primaryColor)
        .fontSize(9.5)
        .font('Helvetica-Bold')
        .text(`${name}: `, { continued: true })
        .font('Helvetica')
        .fillColor(secondaryColor)
        .text(issuer, { lineGap: 4 });
    };

    addCert('Introduction to cybersecurity', 'IBM SkillsBuild');
    addCert('Cybersecurity Fundamentals', 'IBM SkillsBuild');
    addCert('Programming Competency', 'Codechef');
    addCert('Python for everybody', 'Coursera');

    doc.end();
  });
}
