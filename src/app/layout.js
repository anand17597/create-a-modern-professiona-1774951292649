import Script from 'next/script';

export const metadata = {
  title: 'Create a modern, professiona…',
  description: 'Created with Surge AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Tailwind CSS CDN — all generated pages use Tailwind utility classes */}
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
