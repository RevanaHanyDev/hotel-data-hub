import { NAV } from '../data.js'
import Icon from './Icon.jsx'
import logo from '../assets/logo.png'

export default function Sidebar({ page, onNavigate }) {
  return (
    <aside className="side">
      <div className="brand">
        <img className="logo" src={logo} alt="Long Beach Resort" />
        <div><b>Long Beach Resort</b><small>Hotel Data Hub</small></div>
      </div>
      <nav className="nav">
        {NAV.map(([section, items]) => (
          <div key={section}>
            {section && <div className="sec">{section}</div>}
            {items.map(([id, label, icon, badge, dot]) => (
              <div
                key={id}
                className={'it' + (page === id ? ' on' : '')}
                onClick={() => onNavigate(id)}
              >
                <span className="ic"><Icon name={icon} /></span>
                <span>{label}</span>
                {badge ? <em className="bdg">{badge}</em> : dot ? <i className="dot" /> : null}
              </div>
            ))}
          </div>
        ))}
      </nav>
      <div className="user">
        <div className="av">YN</div>
        <div>Your Name<small>Admin</small></div>
        <span className="out"><Icon name="logout" size={15} /></span>
      </div>
    </aside>
  )
}
