export const metadata = {
  title: 'KRONA | Sublimación Personalizada & IA',
  description: 'Camisetas, Pijamas, Mascotas y Combos Personalizados en Quito y Ecuador',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0f172a' }}>
        {children}
      </body>
    </html>
  )
}
