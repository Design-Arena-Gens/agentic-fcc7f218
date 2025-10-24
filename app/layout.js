export const metadata = {
  title: 'Test Application',
  description: 'A test application deployed on Vercel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
