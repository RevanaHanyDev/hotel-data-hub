import { useRef } from 'react'
import Icon from '../components/Icon.jsx'
import PageTitle from '../components/PageTitle.jsx'
import SampleBanner from '../components/SampleBanner.jsx'

const ROWS = [
  ['BK-88412', 'Omar Khalil', '18 Oct', 3, '$980', ['Booked · email', 'grn'], 'L-1019'],
  ['BK-88417', 'Marta Nowak', '25 Oct', 7, '$1,260', ['Booked · phone', 'grn'], 'L-1017'],
  ['BK-88420', 'E. Petrova', '1 Dec', 7, '$2,310', ['Check · name + date (78%)', 'org'], 'L-1036', true],
  ['BK-88421', 'Hans Weber', '4 Nov', 5, '$900', ['No lead', 'gry'], '—'],
]

export default function Reservations() {
  const file = useRef(null)
  return (
    <div className="wrap full">
      <PageTitle title="Daily reservations check" sample />
      <p>Upload yesterday's reservations each morning; the system marks which chat leads booked.</p>
      <SampleBanner sprint={5} />

      <div className="rtop">
        <div className="upload">
          <Icon name="file" size={30} />
          <span>CSV or Excel export from the PMS / booking engine</span>
          <button className="btn lg" onClick={() => file.current.click()}><Icon name="upload" size={13} /> Upload reservations file</button>
          <input ref={file} type="file" accept=".csv,.xlsx,.xls" hidden />
          <small>Last import: today 08:42 · 37 rows · mapping “Opera daily export”</small>
        </div>
        <div className="card rs"><div className="l"><span>Booked (matched)</span><span style={{ color: 'var(--grn)' }}><Icon name="check" size={13} /></span></div><div className="v" style={{ color: 'var(--grn)' }}>2</div><div className="sub">credited to the chatbot</div></div>
        <div className="card rs"><div className="l"><span>Needs your check</span><span style={{ color: 'var(--org)' }}><Icon name="help" size={13} /></span></div><div className="v" style={{ color: '#d98a1f' }}>1</div><div className="sub">same name, different email</div></div>
        <div className="card rs"><div className="l"><span>Not booked after 24 h</span><span style={{ color: 'var(--red)' }}><Icon name="xcircle" size={13} /></span></div><div className="v" style={{ color: 'var(--red)' }}>3</div><div className="sub">follow-up tasks created</div></div>
      </div>

      <div className="card pad0 tbl">
        <div className="ch"><b>Matches from today's file</b><small>Matched on email, then phone, then name + arrival date.</small></div>
        <table>
          <thead><tr><th>Booking</th><th>Guest</th><th>Arrival</th><th>Nights</th><th>Value</th><th>Match</th><th>Lead</th><th /></tr></thead>
          <tbody>
            {ROWS.map(([b, g, a, n, v, [m, c], lead, act]) => (
              <tr key={b}>
                <td className="mono">{b}</td><td>{g}</td><td>{a}</td><td>{n}</td><td>{v}</td>
                <td><span className={'bd ' + c}>{m}</span></td><td className="mono">{lead}</td>
                <td className="acts">{act && <><button className="btn ghost">Reject</button><button className="btn">Confirm</button></>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
