import StatCard from '../components/StatCard.jsx'
import { HOME_STATS, COMPLETENESS, TODO, OPERATIONS } from '../data.js'

export default function Home() {
  return (
    <div className="wrap">
      <h1>Good afternoon, Your</h1>
      <p>Here is what needs attention at Long Beach Resort today.</p>

      <div className="grid4">
        {HOME_STATS.map(([label, value, color, icon, bar]) => (
          <StatCard key={label} label={label} value={value} color={color} icon={icon} bar={bar} />
        ))}
      </div>

      <div className="two">
        <div className="card">
          <div className="hd"><span>Completeness by category</span><span className="live">Live data</span></div>
          {COMPLETENESS.map(([name, count]) => {
            const [a, b] = count.split('/').map(Number)
            return (
              <div className="row" key={name}>
                <span className="n">{name}</span>
                <div className="tr"><i style={{ width: (b ? (a / b) * 100 : 0) + '%' }} /></div>
                <span className="c">{count}</span>
              </div>
            )
          })}
        </div>

        <div className="card" style={{ alignSelf: 'start' }}>
          <div className="hd"><span>To do</span><span className="live">Live data</span></div>
          {TODO.map((t) => (
            <div className="todo" key={t}><span>⊘</span>Hotel identity - {t}</div>
          ))}
        </div>
      </div>

      <h3>Today in operations <span className="sample">Sample data</span></h3>
      <div className="grid4">
        {OPERATIONS.map(([label, value, color, icon, sub]) => (
          <StatCard key={label} label={label} value={value} color={color} icon={icon} sub={sub} />
        ))}
      </div>
    </div>
  )
}
