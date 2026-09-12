'use client';
import React, { useState } from 'react';

export default function KronaApp() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [theme, setTheme] = useState('dark');
  const [mockupText, setMockupText] = useState('');
  const [cart, setCart] = useState([]);

  // Productos de ejemplo
  const products = [
    { id: 1, name: 'Pijama Personalizada Humano', category: 'Pijamas', price: 18.50 },
    { id: 2, name: 'Pijama Mascota (Dúo)', category: 'Pijamas', price: 9.50 },
    { id: 3, name: 'Camiseta Sublimada KRONA', category: 'Ropa', price: 12.00 },
    { id: 4, name: 'Taza Personalizada Mágica', category: 'Festividades', price: 6.50 },
    { id: 5, name: 'Combo Pijamada Amo & Pet', category: 'Combos', price: 24.99 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const getDiscount = () => {
    if (cart.length >= 3) return 0.15; // 15% descuento
    if (cart.length === 2) return 0.10; // 10% descuento
    return 0;
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const discount = subtotal * getDiscount();
  const total = subtotal - discount;

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return alert('El carrito está vacío');
    const orderText = cart.map(i => `- ${i.name} ($${i.price})`).join('%0A');
    const message = `¡Hola KRONA! Deseo realizar el siguiente pedido:%0A${orderText}%0A%0A*Total con descuento:* $${total.toFixed(2)}`;
    window.open(`https://wa.me/593900000000?text=${message}`, '_blank');
  };

  return (
    <div style={{
      backgroundColor: theme === 'dark' ? '#0f172a' : theme === 'minimal' ? '#ffffff' : '#18181b',
      color: theme === 'minimal' ? '#0f172a' : '#ffffff',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header / Nav */}
      <header style={{
        padding: '15px 20px',
        borderBottom: '1px solid #334155',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <h1 style={{ color: '#f59e0b', margin: 0, fontSize: '24px' }}>KRONA</h1>
        
        {/* Selector Trimodal */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => setTheme('dark')} style={{ padding: '4px 8px', borderRadius: '4px', border: 'none', cursor: 'pointer', background: '#334155', color: '#fff' }}>Oscuro</button>
          <button onClick={() => setTheme('minimal')} style={{ padding: '4px 8px', borderRadius: '4px', border: 'none', cursor: 'pointer', background: '#e2e8f0', color: '#000' }}>Minimalista</button>
          <button onClick={() => setTheme('urban')} style={{ padding: '4px 8px', borderRadius: '4px', border: 'none', cursor: 'pointer', background: '#f59e0b', color: '#000' }}>Urbano</button>
        </div>

        <nav style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
          {['inicio', 'simulador', 'catalogo', 'festividades', 'combos'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab ? '#f59e0b' : 'transparent',
                color: activeTab === tab ? '#0f172a' : '#94a3b8',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                textTransform: 'capitalize'
              }}>
              {tab === 'simulador' ? '🎨 Simulador' : tab === 'festividades' ? '🎁 Festividades' : tab}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        {activeTab === 'inicio' && (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <h2 style={{ fontSize: '32px', color: '#f59e0b' }}>Sublimación Única & Personalizada</h2>
            <p style={{ color: '#94a3b8' }}>Pijamas, camisetas, prendas para mascotas y regalos por festividades con diseños exclusivos en Quito y Ecuador.</p>
            <button onClick={() => setActiveTab('simulador')} style={{ padding: '12px 24px', backgroundColor: '#f59e0b', color: '#0f172a', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>Probador / Simulador IA</button>
          </div>
        )}

        {activeTab === 'simulador' && (
          <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
            <h3 style={{ color: '#38bdf8' }}>Simulador de Mockups con Marca de Agua KRONA</h3>
            <input 
              type="text" 
              placeholder="Escribe el texto o idea de diseño..." 
              value={mockupText} 
              onChange={(e) => setMockupText(e.target.value)}
              style={{ width: '80%', padding: '10px', borderRadius: '6px', border: '1px solid #334155', marginBottom: '15px' }}
            />
            
            {/* Canvas / Vista Previa con Protección Marca de Agua */}
            <div style={{ 
              width: '280px', 
              height: '280px', 
              margin: '0 auto', 
              backgroundColor: '#334155', 
              borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              position: 'relative',
              overflow: 'hidden',
              border: '2px dashed #f59e0b'
            }}>
              {/* Marca de agua de protección */}
              <div style={{ position: 'absolute', opacity: 0.25, fontSize: '22px', fontWeight: 'bold', transform: 'rotate(-30deg)', pointerEvents: 'none', color: '#ffffff' }}>
                PROPIEDAD KRONA - NO COPIAR
              </div>
              <div style={{ zIndex: 1, color: '#ffffff', fontWeight: 'bold', padding: '10px' }}>
                {mockupText || 'Vista previa del diseño personalizado'}
              </div>
            </div>
          </div>
        )}

        {(activeTab === 'catalogo' || activeTab === 'festividades') && (
          <div>
            <h3 style={{ color: '#38bdf8' }}>{activeTab === 'festividades' ? '🎁 Colección Especial Festividades & Regalos' : '🛍️ Catálogo de Productos'}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '15px', marginTop: '15px' }}>
              {products.map(product => (
                <div key={product.id} style={{ backgroundColor: '#1e293b', padding: '15px', borderRadius: '8px', border: '1px solid #334155' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: '#f8fafc' }}>{product.name}</h4>
                  <p style={{ color: '#f59e0b', fontWeight: 'bold' }}>${product.price.toFixed(2)}</p>
                  <button onClick={() => addToCart(product)} style={{ width: '100%', padding: '8px', backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>+ Añadir a Combo</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'combos' && (
          <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px' }}>
            <h3 style={{ color: '#f59e0b' }}>🧩 Creador de Combos y Carrito de Compras</h3>
            {cart.length === 0 ? <p style={{ color: '#94a3b8' }}>No has añadido productos al combo.</p> : (
              <div>
                <ul style={{ paddingLeft: '20px' }}>
                  {cart.map((item, idx) => (
                    <li key={idx} style={{ color: '#e2e8f0', marginBottom: '5px' }}>{item.name} - ${item.price.toFixed(2)}</li>
                  ))}
                </ul>
                <div style={{ borderTop: '1px solid #334155', paddingTop: '10px', marginTop: '10px' }}>
                  <p style={{ margin: '5px 0' }}>Subtotal: ${subtotal.toFixed(2)}</p>
                  <p style={{ margin: '5px 0', color: '#f59e0b' }}>Descuento Combo ({(getDiscount() * 100)}%): -${discount.toFixed(2)}</p>
                  <h4 style={{ color: '#38bdf8', fontSize: '18px' }}>Total Final: ${total.toFixed(2)}</h4>
                  <button onClick={handleWhatsAppOrder} style={{ width: '100%', padding: '12px', backgroundColor: '#22c55e', color: '#ffffff', border: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }}>📱 Hacer Pedido por WhatsApp</button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
