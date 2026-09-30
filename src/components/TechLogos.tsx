import React from 'react';

export const TechLogo: React.FC<{ name: string; className?: string }> = ({ name, className = "w-6 h-6" }) => {
  switch (name.toLowerCase()) {
    case 'html5':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm17.47 5.25H6.012l.288 3.25h9.38l-.407 4.542-3.303.896-3.32-.896-.212-2.392H5.176l.425 4.885 6.37 1.767 6.353-1.767.876-9.785H18.97z" fill="#E34F26"/>
          <path d="M12 17.585l4.373-1.215.546-6.12H12v2.607h2.622l-.213 2.392L12 15.82v1.765z" fill="#FFF"/>
        </svg>
      );

    case 'css3':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm17.47 5.25H6.012l.288 3.25h9.38l-.407 4.542-3.303.896-3.32-.896-.212-2.392H5.176l.425 4.885 6.37 1.767 6.353-1.767.876-9.785H18.97z" fill="#1572B6"/>
          <path d="M12 17.585l4.373-1.215.546-6.12H7.01l.24 2.607H14.1l-.213 2.392L12 15.82v1.765z" fill="#FFF"/>
        </svg>
      );

    case 'react':
    case 'react.js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        </svg>
      );

    case 'tailwind':
    case 'tailwind css':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
        </svg>
      );

    case 'js':
    case 'javascript':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M12.5 17.8c.6.9 1.4 1.5 2.6 1.5 1.1 0 1.8-.5 1.8-1.3 0-.9-.7-1.2-1.9-1.7l-.7-.3c-1.9-.8-3.1-1.8-3.1-3.9 0-2.2 1.7-3.9 4.3-3.9 1.9 0 3.1.7 4 2.1l-1.9 1.2c-.5-.8-1.1-1.2-2-1.2-.9 0-1.5.5-1.5 1.2 0 .8.5 1.1 1.7 1.6l.7.3c2.2.9 3.4 1.9 3.4 4.1 0 2.5-1.9 4-4.7 4-2.6 0-4.1-1.1-5-2.7l2.2-1.3zm-6.2.2c.4.7.8 1.3 1.7 1.3.8 0 1.3-.3 1.3-1.6V8.2h2.7v9.6c0 2.8-1.6 4.1-3.9 4.1-2.1 0-3.3-1.1-3.9-2.5l2.1-1.4z" fill="#000" />
        </svg>
      );

    case 'ts':
    case 'typescript':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M14.7 17.8c.6.9 1.4 1.5 2.6 1.5 1.1 0 1.8-.5 1.8-1.3 0-.9-.7-1.2-1.9-1.7l-.7-.3c-1.9-.8-3.1-1.8-3.1-3.9 0-2.2 1.7-3.9 4.3-3.9 1.9 0 3.1.7 4 2.1l-1.9 1.2c-.5-.8-1.1-1.2-2-1.2-.9 0-1.5.5-1.5 1.2 0 .8.5 1.1 1.7 1.6l.7.3c2.2.9 3.4 1.9 3.4 4.1 0 2.5-1.9 4-4.7 4-2.6 0-4.1-1.1-5-2.7l2.2-1.3zm-7.9-7.2H4.2V8.2h8.3v2.4H9.7v9.3H6.8V10.6z" fill="#FFF" />
        </svg>
      );

    case 'vite':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M22.5 3.3L12.7 21a.9.9 0 0 1-1.6 0L1.5 3.3a.9.9 0 0 1 .8-1.3h19.4a.9.9 0 0 1 .8 1.3z" fill="url(#viteGrad)" />
          <path d="M16.5 2.3L11.7 12l-2.4-4.2L5.8 2.3h10.7z" fill="#FFC812" />
          <defs>
            <linearGradient id="viteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#41D1FF" />
              <stop offset="100%" stopColor="#BD34FE" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'bootstrap':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#7952B3" />
          <path d="M7 5h5.5c2.2 0 3.7.9 3.7 2.5 0 1.2-.8 2-1.8 2.3v.1c1.3.3 2.3 1.2 2.3 2.7 0 1.9-1.6 3.4-4 3.4H7V5zm2.8 4.6h2.4c.9 0 1.6-.4 1.6-1.1 0-.8-.7-1.1-1.6-1.1H9.8v2.2zm0 4.4h2.7c1 0 1.8-.4 1.8-1.3 0-.8-.8-1.2-1.8-1.2H9.8v2.5z" fill="#FFF" />
        </svg>
      );

    case 'node':
    case 'node.js':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M12 1l10.4 6v12L12 23 1.6 17V7L12 1z" fill="#339933" />
          <path d="M12 4.2L4.5 8.5v7l7.5 4.3 7.5-4.3v-7L12 4.2zm0 2.2l5 2.9v5.7l-5 2.9-5-2.9V9.3l5-2.9z" fill="#FFF" />
        </svg>
      );

    case 'express':
    case 'express.js':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#18181B" stroke="#3F3F46" strokeWidth="1" />
          <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="bold">ex</text>
        </svg>
      );

    case 'python':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M11.9 1.5c-4.8 0-4.5 2.1-4.5 2.1v2.1h4.6v.7H5.6s-3.1-.3-3.1 4.5c0 4.8 2.7 4.6 2.7 4.6h1.6v-2.3c0-2.6 2.3-2.5 2.3-2.5h4.4s2.2 0 2.2-2.2V3.7s.4-2.2-3.8-2.2zm-2.4 1.4a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z" fill="#3776AB"/>
          <path d="M12.1 22.5c4.8 0 4.5-2.1 4.5-2.1v-2.1h-4.6v-.7h6.4s3.1.3 3.1-4.5c0-4.8-2.7-4.6-2.7-4.6h-1.6v2.3c0 2.6-2.3 2.5-2.3 2.5H10.5s-2.2 0-2.2 2.2v4.4s-.4 2.2 3.8 2.2zm2.4-1.4a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z" fill="#FFD43B"/>
        </svg>
      );

    case 'flask':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#E2E8F0" strokeWidth="1.8">
          <path d="M9 3h6M10 3v6.2L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9.2V3" />
        </svg>
      );

    case 'fastapi':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" fill="#059669" />
          <path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" fill="#FFF" />
        </svg>
      );

    case 'rest apis':
    case 'api':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#0284C7" />
          <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FFF" fontSize="9" fontFamily="sans-serif" fontWeight="900">API</text>
        </svg>
      );

    case 'graphql':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" stroke="#E535AB" strokeWidth="1.8" />
          <circle cx="12" cy="2" r="2" fill="#E535AB" />
          <circle cx="20.66" cy="7" r="2" fill="#E535AB" />
          <circle cx="20.66" cy="17" r="2" fill="#E535AB" />
          <circle cx="12" cy="22" r="2" fill="#E535AB" />
          <circle cx="3.34" cy="17" r="2" fill="#E535AB" />
          <circle cx="3.34" cy="7" r="2" fill="#E535AB" />
          <path d="M12 2v20M3.34 7l17.32 10M3.34 17L20.66 7" stroke="#E535AB" strokeWidth="1.2" />
        </svg>
      );

    case 'jwt':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#D946EF" />
          <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FFF" fontSize="9" fontFamily="sans-serif" fontWeight="900">JWT</text>
        </svg>
      );

    case 'mongodb':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M12 1.5c-1.5 5.5-6.5 8-6.5 13.5 0 4.14 3.36 7.5 7.5 7.5s7.5-3.36 7.5-7.5c0-5.5-5-8-6.5-13.5zm-1 19.3V7.5c-2.3 2.1-4 4.5-4 7.5 0 3 2.2 4.8 4 5.8zm2 0c1.8-1 4-2.8 4-5.8 0-3-1.7-5.4-4-7.5v13.3z" fill="#47A248"/>
        </svg>
      );

    case 'postgresql':
    case 'postgres':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.5h-2v-2h2v2zm1.7-4.9c-.4.3-.9.5-1.5.6v1.8h-2.4v-1.8c-.8-.2-1.5-.6-2.1-1.1l1.4-1.5c.4.4.9.7 1.4.8v-1.6c-1.4-.4-2.4-1.1-2.4-2.4 0-1.4 1.2-2.3 2.8-2.4V6h2.4v1.8c.8.2 1.4.5 1.9.9l-1.4 1.5c-.3-.3-.7-.5-1.1-.6v1.5c1.4.4 2.5 1.1 2.5 2.5 0 .9-.5 1.7-1.5 2.1z" fill="#336791"/>
        </svg>
      );

    case 'mysql':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M12 3C6.48 3 2 6.58 2 11c0 2.53 1.45 4.8 3.73 6.27L4.5 21l4.13-1.81C9.75 19.74 10.86 20 12 20c5.52 0 10-3.58 10-9s-4.48-8-10-8zm-1 11h-2v-4h2v4zm4 0h-2v-4h2v4z" fill="#00758F"/>
        </svg>
      );

    case 'sqlite':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#003B57" />
          <path d="M6 8l6-3 6 3-6 3-6-3zm0 4l6 3 6-3v2l-6 3-6-3v-2zm0 4l6 3 6-3v2l-6 3-6-3v-2z" fill="#003B57" stroke="#00B4D8" strokeWidth="1.2"/>
        </svg>
      );

    case 'git':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M22.68 10.518L13.482 1.32a1.98 1.98 0 0 0-2.8 0L8.79 3.21l3.52 3.52a2.35 2.35 0 0 1 2.98 2.98l3.41 3.41a2.35 2.35 0 1 1-1.4 1.41l-3.05-3.05v5.33a2.35 2.35 0 1 1-1.98 0v-7.8l-3.52-3.52L1.32 10.518a1.98 1.98 0 0 0 0 2.8l9.2 9.2a1.98 1.98 0 0 0 2.8 0l9.36-9.36a1.98 1.98 0 0 0 0-2.64z" fill="#F05032"/>
        </svg>
      );

    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#FFF">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      );

    case 'vs code':
    case 'vscode':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M17.5 1.8L12 6.4 5.2 1.3 2 3v18l3.2 1.7 6.8-5.1 5.5 4.6 4.5-2.2V4l-4.5-2.2zm0 15.6l-5-4.2 5-4.2v8.4z" fill="#007ACC" />
        </svg>
      );

    case 'postman':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" fill="#FF6C37" />
          <path d="M17 12l-7-4v8l7-4z" fill="#FFF" />
        </svg>
      );

    case 'docker':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M13.98 11.08h2.12v2.12h-2.12v-2.12zm-3.18 0h2.12v2.12h-2.12v-2.12zm-3.18 0h2.12v2.12H7.62v-2.12zm-3.18 0h2.12v2.12H4.44v-2.12zm9.54-3.18h2.12v2.12h-2.12V7.9zm-3.18 0h2.12v2.12h-2.12V7.9zm-3.18 0h2.12v2.12H7.62V7.9zm6.36-3.18h2.12v2.12h-2.12V4.72zM.5 14.8c.6 3.5 3.9 6.2 7.7 6.2 5.5 0 9.8-3.5 11.2-8.3.8.1 1.7-.1 2.3-.6.6-.5.9-1.2.9-2 0-.2 0-.4-.1-.6-.7.4-1.5.6-2.4.6-.3-1.4-1.3-2.6-2.7-3.1l-.6-.2-.3.6c-.6 1.1-1 2.3-1.1 3.6H.5v.8z" fill="#2496ED" />
        </svg>
      );

    case 'mongodb compass':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" fill="#111827" stroke="#47A248" strokeWidth="1.5" />
          <path d="M12 4c-1.2 4-5 6-5 10 0 3 2.2 5.5 5 5.5s5-2.5 5-5.5c0-4-3.8-6-5-10z" fill="#47A248" />
        </svg>
      );

    case 'figma':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83"/>
          <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF"/>
          <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E"/>
          <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262"/>
          <circle cx="16" cy="12" r="4" fill="#1ABCFE"/>
        </svg>
      );

    case 'linux':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#FCC624" />
          <text x="50%" y="62%" dominantBaseline="middle" textAnchor="middle" fill="#000" fontSize="14">🐧</text>
        </svg>
      );

    case 'wireshark':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" fill="#1679A7" />
          <path d="M12 6c-3 4-7 6-7 10h14c0-4-4-6-7-10z" fill="#FFF" />
        </svg>
      );

    case 'jupyter':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8" fill="none" stroke="#F37626" strokeWidth="2.5" />
          <circle cx="7" cy="6" r="1.8" fill="#F37626" />
          <circle cx="17" cy="18" r="1.8" fill="#F37626" />
        </svg>
      );

    case 'google colab':
    case 'colab':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm-3.5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm7 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#F9AB00" />
        </svg>
      );

    case 'notion':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#FFF" />
          <path d="M6 5h3.5l6.5 10V5h3v14h-3.5L9 9v10H6V5z" fill="#000" />
        </svg>
      );

    case 'google':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
        </svg>
      );

    case 'googlecloud':
    case 'google-cloud':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-2.89 0-5.4 1.64-6.65 4.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/>
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.25 0-2.43.3-3.47.84l1.52 2.63C10.74 7.16 11.35 7 12 7c2.76 0 5 2.24 5 5v.5h2.35c1.46 0 2.65 1.19 2.65 2.65 0 1.46-1.19 2.65-2.65 2.65H13v3h6c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#34A853"/>
          <path d="M6 20h7v-3H6c-1.66 0-3-1.34-3-3 0-1.54 1.16-2.81 2.68-2.98l.55-.06.24-.5C7.21 9.01 9.42 7.5 12 7.5c.65 0 1.26.1 1.83.29l1.01-2.82C13.98 4.33 13.01 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6z" fill="#EA4335"/>
          <path d="M12 4c.67 0 1.33.08 1.96.24l-1.01 2.82C12.63 7.03 12.32 7 12 7c-2.58 0-4.79 1.51-5.53 3.94l-.24.5-.55.06C4.16 11.19 3 12.46 3 14c0 1.66 1.34 3 3 3h7v3H6c-3.31 0-6-2.69-6-6 0-3.09 2.34-5.64 5.35-5.96C6.6 5.64 9.11 4 12 4z" fill="#FBBC05"/>
        </svg>
      );

    case 'edx':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#FFF">
          <path d="M8.5 7L5 12l3.5 5H6L3 12l3-5h2.5zm7 0l3 5-3 5h2.5l3.5-5-3.5-5H15.5zm-5 0l-2 10h2l2-10h-2z" />
        </svg>
      );

    case 'cisco':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#00BCEB">
          <path d="M4 14v4h2v-4H4zm4-4v8h2v-8H8zm4-4v12h2V6h-2zm4 4v8h2v-8h-2zm4 4v4h2v-4h-2z" />
        </svg>
      );

    case 'qualys':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z" fill="#005B94" />
          <path d="M12 6a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm1.8 4.2l2.2 2.2" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'codechef':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M12 2a7 7 0 00-7 7c0 2.8 1.6 5.2 4 6.3V18a2 2 0 002 2h2a2 2 0 002-2v-2.7c2.4-1.1 4-3.5 4-6.3a7 7 0 00-7-7zm0 2a5 5 0 015 5c0 2.2-1.4 4-3.3 4.7l-.7.3v3h-2v-3l-.7-.3C8.4 13 7 11.2 7 9a5 5 0 015-5z" fill="#E85D04" />
          <path d="M10 8.5a2 2 0 014 0" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'nptel':
    case 'iit':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#0F172A" />
          <path d="M12 3L3 8l9 5 9-5-9-5zm0 8.5L5.5 8 12 4.4 18.5 8 12 11.5z" fill="#F97316" />
          <path d="M6 10.5v5.5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5l-6 3.3-6-3.3z" fill="#38BDF8" />
        </svg>
      );

    case 'intel':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="#0068B5" />
          <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">intel</text>
        </svg>
      );

    case 'aws':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M6.7 10.3c0-.7.2-1.3.7-1.7.5-.4 1.2-.6 2-.6.9 0 1.6.2 2.1.7.5.5.8 1.1.8 1.9v4.2h-1.6v-1c-.4.4-.8.7-1.3.9-.5.2-1.1.3-1.7.3-.8 0-1.5-.2-2-.7-.5-.5-.8-1.1-.8-1.9 0-.8.3-1.4.8-1.9.5-.5 1.3-.8 2.3-.9l2.4-.2v-.4c0-.4-.1-.8-.4-1-.3-.2-.7-.3-1.2-.3-.4 0-.8.1-1.1.3-.3.2-.5.5-.6.8L6.7 10.3zm4.5 2.8v-.9l-1.9.2c-.5.1-.9.2-1.1.4-.2.2-.4.5-.4.8 0 .3.1.6.3.8.2.2.5.3.9.3.5 0 .9-.2 1.3-.5.6-.4.9-.7.9-1.1zM15 14.8l-2.4-7.4h1.8l1.5 5.2 1.6-5.2h1.7l1.6 5.2 1.5-5.2h1.8l-2.4 7.4h-1.8l-1.5-5.1-1.5 5.1H15z" fill="#FF9900"/>
          <path d="M3.5 18.5c5.5 2 11.5 2 17-1M19 16l2.5 1.5L19 20" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      );

    case 'microsoft':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <rect x="1" y="1" width="10" height="10" fill="#F25022" />
          <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
          <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
          <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
        </svg>
      );

    case 'freecodecamp':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#0A0A23">
          <rect width="24" height="24" rx="4" fill="#0A0A23" />
          <path d="M12 4s-4 4.5-4 8.5c0 2.5 1.8 4.5 4 4.5s4-2 4-4.5C16 8.5 12 4 12 4z" fill="#3B82F6" />
        </svg>
      );

    case 'hack the box':
    case 'hackthebox':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L18.5 8 12 11.2 5.5 8 12 4.8zM4 9.4l7 3.5v7.1l-7-3.5V9.4zm16 0v7.1l-7 3.5v-7.1l7-3.5z" fill="#9FEF00"/>
        </svg>
      );

    case 'ibm':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#054ADA">
          <path d="M2 5h6v2H2V5zm0 3h6v1.5H2V8zm0 2.5h6v1.5H2v-1.5zm0 2.5h6v1.5H2V13zm0 2.5h6v2H2v-2zm8-10.5h6v2h-6V5zm0 3h6v1.5h-6V8zm0 2.5h6v1.5h-6v-1.5zm0 2.5h6v1.5h-6V13zm0 2.5h6v2h-6v-2zm8-10.5h4v2h-4V5zm0 3h4v1.5h-4V8zm0 2.5h4v1.5h-4v-1.5zm0 2.5h4v1.5h-4V13zm0 2.5h4v2h-4v-2z" />
        </svg>
      );

    case 'coursera':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#0056D2">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
        </svg>
      );

    case 'tryhackme':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#1E293B" />
          <path d="M12 3.5L4 7.2v5.3c0 4.8 3.4 9.3 8 10.5 4.6-1.2 8-5.7 8-10.5V7.2L12 3.5z" fill="#E11D48" />
          <path d="M9 9h6v2h-2v5h-2v-5H9V9z" fill="#FFFFFF" />
        </svg>
      );

    case 'leetcode':
      return (
        <svg className={className} viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.17 6.1a1.375 1.375 0 00.961 2.336h6.059c.758 0 1.375-.617 1.375-1.375V1.375A1.375 1.375 0 0014.19 0h-.707z" fill="#FFA116"/>
          <path d="M20.205 12.387a1.375 1.375 0 00-1.944 0l-9.192 9.193a1.375 1.375 0 000 1.944l.707.707a1.375 1.375 0 001.944 0l9.192-9.192a1.375 1.375 0 000-1.944l-.707-.708z" fill="#FFA116"/>
          <path d="M11.837 2.05a1.375 1.375 0 00-1.944 0L1.7 10.242a5.5 5.5 0 000 7.778l1.414 1.414a5.5 5.5 0 007.778 0l2.122-2.121a1.375 1.375 0 00-1.944-1.944l-2.122 2.121a2.75 2.75 0 01-3.889 0L3.646 16.08a2.75 2.75 0 010-3.889l8.193-8.193a1.375 1.375 0 000-1.948z" fill="#B3B3B3"/>
        </svg>
      );

    case 'linkedin':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#0A66C2">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect width="18" height="18" x="3" y="3" rx="2" strokeWidth="2" />
        </svg>
      );
  }
};
