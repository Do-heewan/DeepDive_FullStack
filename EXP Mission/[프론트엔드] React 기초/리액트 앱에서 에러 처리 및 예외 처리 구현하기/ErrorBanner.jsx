import React, { useEffect } from 'react';

export default function ErrorBanner({ message, onClose, duration = 5000 }) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(() => {
      onClose && onClose();
    }, duration);
    return () => clearTimeout(t);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 16,
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#fff6f6',
      color: '#8a1f1f',
      padding: '12px 16px',
      borderRadius: 6,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
      zIndex: 2000,
      maxWidth: '90%',
    }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <div style={{ flex: 1 }}>{message}</div>
        <button onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 600 }}>닫기</button>
      </div>
    </div>
  );
}
