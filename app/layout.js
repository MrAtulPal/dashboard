import './globals.css'
import Head from 'next/head';

export const metadata = {
  title: 'Dashboard',
  description: 'The Dashboard Design',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}

