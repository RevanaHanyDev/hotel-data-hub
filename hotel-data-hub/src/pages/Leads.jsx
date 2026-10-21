import { useRef } from 'react'
import Icon from '../components/Icon.jsx'
import PageTitle from '../components/PageTitle.jsx'
import SampleBanner from '../components/SampleBanner.jsx'

const SRC = { WhatsApp: 'bubble', Phone: 'phone', Website: 'globe' }

// [country, name, price, details, tags, source, agent, note]
const COLUMNS = [
  ['New', '#98a2b8', [
    ['PL', 'Anna Kowalska', '$1,260', '12–19 Dec · 2 adults · Sea view', ['sea view', 'anniversary', 'spa'], 'WhatsApp', 'Mona', 'Reply within 30 min'],
    ['DE', 'Thomas Becker', '$1,980', '3–10 Jan · 2 adults, 2 kids · Family room', ['kids club', 'all inclusive'], 'Website', 'Karim'],
  ]],
  ['Sent to booking engine', '#1d4a9c', [
    ['EG', 'Ahmed Hassan', '$540', '24–27 Nov · 2 adults · Deluxe', ['high floor'], 'Phone', 'Mona'],
    ['RU', 'Elena Petrova', '$2,310', '1–8 Dec · 3 adults · Suite', ['airport transfer', 'late check-out'], 'WhatsApp', 'Sara'],
  ]],
  ['Not booked', '#f59e2b', [
    ['GB', 'James Carter', '$1,120', '15–22 Nov · 2 adults · Sea view', ['honeymoon', 'dinner'], 'Website', 'Karim', 'Call today'],
  ]],
  ['Contacted', '#1fa1e6', [
    ['CZ', 'Lukas Novák', '$1,650', '20–27 Dec · 2 adults, 1 kid · Family room', ['kids club', 'pool'], 'WhatsApp', 'Sara'],
  ]],
  ['Booked', '#f59e2b', [
    ['PL', 'Marta Nowak', '$1,340', '25 Oct–1 Nov · 2 adults · Deluxe', ['spa'], 'Phone', 'Mona'],
  ]],
]

function LeadCard({ lead }) {
  const [cc, name, price, details, tags, src, agent, note] = lead
  return (
    <div className="card lead">
      <div className="lr"><span><small className="cc">{cc}</small> {name}</span><b>{price}</b></div>
      <div className="ld">{details}</div>
      <div className="chips">{tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
      <div className="lr">
        <span className="chip blue"><Icon name={SRC[src]} size={11} /> {src}</span>
        <span className="agent">{agent}</span>
      </div>
      {note && <div className="note">{note}</div>}
    </div>
  )
}

export default function Leads() {
  const kan = useRef(null)
  const start = useRef(null)

  // drag with the mouse to scroll sideways (scrollbar is hidden)
  const down = (e) => {
    start.current = { x: e.pageX, left: kan.current.scrollLeft }
    kan.current.classList.add('drag')
  }
  const move = (e) => {
    if (start.current) kan.current.scrollLeft = start.current.left - (e.pageX - start.current.x)
  }
  const up = () => {
    start.current = null
    kan.current?.classList.remove('drag')
  }

  return (
    <div className="wrap full">
      <div className="phead">
        <div>
          <PageTitle title="Leads pipeline" sample />
          <p>Booking requests from the chatbots, phone and walk-ins, from first message to booked.</p>
        </div>
        <div className="card rev"><small>Potential revenue</small><b>$10,200</b></div>
      </div>
      <SampleBanner sprint={4} />
      <div className="kan" ref={kan} onMouseDown={down} onMouseMove={move} onMouseUp={up} onMouseLeave={up}>
        {COLUMNS.map(([title, color, leads]) => (
          <div className="col" key={title}>
            <div className="colh"><i style={{ background: color }} />{title} <small>{leads.length}</small></div>
            {leads.map((l) => <LeadCard key={l[1]} lead={l} />)}
          </div>
        ))}
      </div>
    </div>
  )
}
