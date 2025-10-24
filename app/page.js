export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        Test Application
      </h1>
      <p style={{
        fontSize: '1.25rem',
        color: '#6b7280',
        marginBottom: '2rem'
      }}>
        Deployed successfully on Vercel
      </p>
      <div style={{
        padding: '1rem 2rem',
        background: '#f3f4f6',
        borderRadius: '0.5rem'
      }}>
        <p style={{ margin: 0, color: '#374151' }}>
          Status: <strong style={{ color: '#10b981' }}>✓ Running</strong>
        </p>
      </div>
    </main>
  )
}
