import { lazy, Suspense, useState } from 'react'

const Marketplace = lazy(() => import('marketplace/Marketplace'))
const Cart = lazy(() => import('cart/Cart'))
const Account = lazy(() => import('account/Account'))

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [user, setUser] = useState(null)

  function addToCart(product) {
    setCartItems(items => [...items, product])
  }

  function removeFromCart(indexToRemove) {
    setCartItems(items => items.filter((_, index) => index !== indexToRemove))
  }

  return <div className="app-shell">
    <header className="navbar navbar-expand bg-white border-bottom sticky-top">
      <div className="container-xl">
        <a className="navbar-brand fw-bold" href="#home">REX MFE</a>
        <button className="btn btn-outline-dark position-relative ms-auto" onClick={() => setCartOpen(true)} aria-label="Ouvrir le panier">
          <svg aria-hidden="true" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" /></svg>
          <span className="ms-2">Panier</span>
          {cartItems.length > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-success">{cartItems.length}</span>}
        </button>
      </div>
    </header>

    <main className="container-xl py-5">
      <div className="row g-4 align-items-start">
        <section className="col-lg-8" aria-labelledby="marketplace-title">
          <div className="section-heading"><h2 id="marketplace-title" className="h5 mb-0">Marketplace</h2><span className="badge text-bg-light">MFE · :5011</span></div>
          <Suspense fallback={<div className="text-secondary py-4">Chargement de la marketplace…</div>}><Marketplace user={user} onAddToCart={addToCart} /></Suspense>
        </section>
        <aside className="col-lg-4" aria-labelledby="account-title">
          <div className="section-heading"><h2 id="account-title" className="h5 mb-0">Mon espace</h2><span className="badge text-bg-light">MFE · :5013</span></div>
          <Suspense fallback={<div className="text-secondary py-4">Chargement du compte…</div>}><Account user={user} onLogin={() => setUser({ name: 'Alex Martin', email: 'alex.martin@example.com' })} onLogout={() => setUser(null)} /></Suspense>
        </aside>
      </div>
    </main>

    <footer className="bg-dark text-white mt-auto py-4">
      <div className="container-xl"><span className="fw-semibold">REX MFE</span></div>
    </footer>

    <Suspense fallback={null}><Cart open={cartOpen} onClose={() => setCartOpen(false)} user={user} items={cartItems} onRemoveItem={removeFromCart} /></Suspense>
  </div>
}
