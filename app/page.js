export default function Home() {
  return (
    <main style={{ 
      backgroundColor: '#0f172a', 
      color: '#ffffff', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      <span style={{
        backgroundColor: '#f59e0b',
        color: '#000000',
        padding: '6px 16px',
        borderRadius: '20px',
        fontSize: '12px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: '16px'
      }}>
        Sitio en Construcción & Sublimación
      </span>
      <h1 style={{ fontSize: '2.5rem', margin: '0 0 10px 0' }}>KRONA</h1>
      <p style={{ color: '#94a3b8', maxWidth: '500px', lineHeight: '1.6' }}>
        Diseño por IA & Sublimación Única para Ti y Tu Mascota. 
        Próximamente: Catálogo, Pijamas, Fechas Especiales y Creador de Combos.
      </p>
    </main>
  );
}
