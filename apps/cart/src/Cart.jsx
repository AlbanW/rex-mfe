import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './shared.css'

export default function Cart({ open, onClose, user, items = [], onRemoveItem = () => {} }) {
  const [styleConflict, setStyleConflict] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('cart-style-conflict', styleConflict)
    return () => document.body.classList.remove('cart-style-conflict')
  }, [styleConflict])

  if (!open) return null

  const total = items.reduce((sum, item) => sum + item.price, 0)

  return <div className="cart-layer">
    <button className="cart-backdrop" onClick={onClose} aria-label="Fermer le panier" />
    <aside className="cart-drawer" aria-label="Votre panier" role="dialog" aria-modal="true">
      <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3"><div><p className="text-uppercase small text-success fw-semibold mb-1">Bonjour {user ? user.name : 'Anonyme'}</p><h2 className="h5 mb-0">Panier <span className="text-secondary">({items.length})</span></h2></div><button className="btn btn-light" onClick={onClose} aria-label="Fermer">✕</button></div>
      {items.length === 0 ? <div className="cart-empty text-center text-secondary py-5"><div className="fs-1 mb-2">🛒</div><p className="mb-1">Votre panier est vide</p><small>Ajoutez un article depuis la marketplace.</small></div> : <div className="cart-items">{items.map((item, index) => <div className="d-flex align-items-center gap-3 py-3 border-bottom" key={`${item.id}-${index}`}><div className="cart-emoji">{item.emoji}</div><div className="flex-grow-1"><strong className="d-block">{item.name}</strong><small className="text-secondary">{item.price} €</small></div><button className="btn btn-sm btn-outline-secondary" onClick={() => onRemoveItem(index)}>Retirer</button></div>)}</div>}
      <footer className="cart-footer mt-auto">
        {items.length > 0 && <>
          <div className="d-flex justify-content-between align-items-center mb-3"><span className="fw-semibold">Total</span><strong className="fs-5">{total} €</strong></div>
          {!user && <p className="small text-secondary mb-2">Connectez-vous dans Mon espace pour valider votre panier.</p>}
          <button className="btn btn-success w-100 mb-3" disabled={!user} onClick={() => alert(`Merci pour votre commande, ${user.name} !`)}>Valider le panier</button>
        </>}
        <button className="btn btn-link btn-sm text-secondary p-0" aria-pressed={styleConflict} onClick={() => setStyleConflict(value => !value)}>CSS !important</button>
      </footer>
    </aside>
  </div>
}
