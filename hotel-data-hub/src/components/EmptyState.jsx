import Icon from './Icon.jsx'

export default function EmptyState({ icon, ring, text }) {
  return (
    <div className="card empty">
      {ring ? <div className="ringi"><Icon name={icon} size={14} /></div> : <Icon name={icon} size={28} />}
      <span>{text}</span>
    </div>
  )
}
