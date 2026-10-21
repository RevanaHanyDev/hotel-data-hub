import { useState } from 'react'
import PageTitle from '../components/PageTitle.jsx'
import SampleBanner from '../components/SampleBanner.jsx'

const ALL = [41, 38, 52, 47, 55, 61, 58, 49, 53, 66, 71, 63, 59, 64]
const JOE = [33, 31, 44, 40, 47, 53, 50, 43, 46, 58, 62, 56, 52, 56]
const BLUE = '#3b66b8'

function Chart() {
  const W = 1000, H = 330, L = 60, R = 905, T = 20, B = 300
  const x = (i) => L + ((R - L) * i) / (ALL.length - 1)
  const y = (v) => B - ((v - 20) / 60) * (B - T)
  const path = (d) => d.map((v, i) => (i ? 'L' : 'M') + x(i) + ' ' + y(v)).join(' ')
  const last = ALL.length - 1
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" role="img" aria-label="Guest chats per day">
      {[20, 40, 60, 80].map((v) => (
        <g key={v}>
          <line x1={L} x2={R + 20} y1={y(v)} y2={y(v)} stroke="var(--bd)" />
          <text x={L - 14} y={y(v) + 6} textAnchor="end" fontSize="20" fill="#9aa6bd">{v}</text>
        </g>
      ))}
      <path d={path(ALL)} fill="none" stroke={BLUE} strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
      <path d={path(JOE)} fill="none" stroke="var(--org)" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={x(last)} cy={y(ALL[last])} r="7" fill={BLUE} />
      <circle cx={x(last)} cy={y(JOE[last])} r="7" fill="var(--org)" />
      <text x={x(last) + 20} y={y(ALL[last]) + 8} fontSize="26" fill="var(--tx)">{ALL[last]}</text>
      <text x={x(last) + 20} y={y(JOE[last]) + 8} fontSize="26" fill="var(--tx)">{JOE[last]}</text>
    </svg>
  )
}

function Table() {
  return (
    <table className="rtable">
      <thead><tr><th>Day</th><th>All guest chats</th><th>Answered by Joe alone</th></tr></thead>
      <tbody>{ALL.map((v, i) => <tr key={i}><td>{i + 1} Oct</td><td>{v}</td><td>{JOE[i]}</td></tr>)}</tbody>
    </table>
  )
}

export default function Reports() {
  const [view, setView] = useState('chart')
  return (
    <div className="wrap full">
      <PageTitle title="Reports" sample />
      <p>How the chatbots, the front office and the knowledge base are performing.</p>
      <SampleBanner sprint={8} />
      <div className="card pad0">
        <div className="ch rh">
          <b>Guest chats per day (October)</b>
          <div className="seg">
            <button className={view === 'chart' ? 'on' : ''} onClick={() => setView('chart')}>Chart</button>
            <button className={view === 'table' ? 'on' : ''} onClick={() => setView('table')}>Table</button>
          </div>
        </div>
        <div className="rbody">
          <div className="legend">
            <span><i style={{ background: BLUE }} />All guest chats</span>
            <span><i style={{ background: 'var(--org)' }} />Answered by Joe alone</span>
          </div>
          {view === 'chart' ? <Chart /> : <Table />}
        </div>
      </div>
    </div>
  )
}
