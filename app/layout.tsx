import './styles.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="w-full h-screen flex">{children}</body>
    </html>
  )
}
