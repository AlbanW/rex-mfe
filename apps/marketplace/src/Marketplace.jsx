import 'bootstrap/dist/css/bootstrap.min.css'
import './marketplace.css'

const products = [
  { id: 1, name: 'Tasse en céramique', detail: 'Grès · fabriquée à la main', price: 18, emoji: '☕', color: '#f1e9db' },
  { id: 2, name: 'Petit vase', detail: 'Céramique · pièce unique', price: 32, emoji: '🏺', color: '#e6eee5' },
  { id: 3, name: 'Carnet de notes', detail: 'Papier recyclé · 120 pages', price: 12, emoji: '📓', color: '#ece9f3' },
]

export default function Marketplace({ user, onAddToCart = () => {} }) {
  return <>
    <p className="small text-secondary mb-3">Bonjour {user ? user.name : 'Anonyme'}</p>
    <div className="row row-cols-1 row-cols-md-2 g-3">{products.map(product => <div className="col" key={product.id}>
    <article className="card card-product panel-card">
      <div className="product-art" style={{background:product.color}}>{product.emoji}</div>
      <div className="card-body d-flex flex-column"><h3 className="card-title fw-semibold">{product.name}</h3><p className="card-text text-secondary">{product.detail}</p><div className="mt-auto d-flex justify-content-between align-items-center"><strong>{product.price} €</strong><button className="btn btn-success btn-sm" onClick={() => onAddToCart(product)}>Ajouter au panier <span>＋</span></button></div></div>
    </article>
    </div>)}</div>
  </>
}
