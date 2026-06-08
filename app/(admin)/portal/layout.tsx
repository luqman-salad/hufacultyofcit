export const metadata = {
  title: 'Sanity Studio Studio Portal',
  description: 'Content Management Workspace',
}

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#1a1a1a' }}>
        {children}
      </body>
    </html>
  )
}