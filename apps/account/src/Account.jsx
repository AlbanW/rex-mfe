import 'bootstrap/dist/css/bootstrap.min.css'
import './account.css'

export default function Account({ user, onLogin, onLogout }) {
  return <section className="account-card panel-card">
    {user ? <>
      <div className="d-flex align-items-center gap-3 mb-4"><div className="account-avatar">{user.name.split(' ').map(part => part[0]).join('')}</div><div><h3 className="h6 mb-1">{user.name}</h3><p className="small text-secondary mb-0">{user.email}</p></div></div>
      <button className="btn btn-outline-secondary btn-sm" onClick={onLogout}>Se déconnecter</button>
    </> : <>
      <button className="btn btn-success btn-sm" onClick={onLogin}>Se connecter</button>
    </>}
  </section>
}
