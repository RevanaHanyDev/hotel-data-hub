export default function StatCard({ label, value, color, icon, bar, sub }) {
  return (
    <div className="card stat">
      <div className="l"><span>{label}</span><span style={{ color }}>{icon}</span></div>
      <div className="v" style={{ color }}>{value}</div>
      {bar && <div className="bar"><i style={{ width: '1%', background: 'var(--org)' }} /></div>}
      {sub && <div className="sub">{sub}</div>}
    </div>
  )
}
