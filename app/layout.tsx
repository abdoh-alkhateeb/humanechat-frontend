import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'HumaneChat - Intelligent Knowledgebase Chatbots',
  description:
    'HumaneChat - Enhance your customer experience with intelligent knowledgebase chatbots.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
