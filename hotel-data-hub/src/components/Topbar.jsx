import Icon from './Icon.jsx'

export default function Topbar({ rtl, onToggle }) {
  return (
    <div className="top">
      <button className="lang" onClick={onToggle}>
        <Icon name="lang" size={13} /> {rtl ? 'English' : 'العربية'}
      </button>
    </div>
  )
}
