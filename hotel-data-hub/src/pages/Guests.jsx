import { useState } from 'react'
import PageTitle from '../components/PageTitle.jsx'
import SampleBanner from '../components/SampleBanner.jsx'

const GUESTS = [
  { ini: 'AK', name: 'Anna Kowalska', cc: 'PL', country: 'Poland', lang: 'Polish', src: 'WhatsApp', seen: '2 h ago',
    contact: '+48 600 *** 112 · anna.k@...', stays: 2, revenue: '$2,540',
    prefs: [['Room', ['sea view', 'high floor'], 'blue'], ['Service', ['spa', 'airport transfer'], 'org'], ['Occasion', ['anniversary'], 'pur'], ['Dietary', [], '']],
    history: ['Asked about spa packages for 2 (WhatsApp)', 'Lead created: 12–19 Dec, sea view', 'Stayed Mar 2026 · Room 412 · rated 5★'] },
  { ini: 'TB', name: 'Thomas Becker', cc: 'DE', country: 'Germany', lang: 'German', src: 'Website', seen: 'yesterday',
    contact: '+49 151 *** 340 · t.becker@...', stays: 1, revenue: '$1,980',
    prefs: [['Room', ['family room'], 'blue'], ['Service', ['kids club', 'all inclusive'], 'org'], ['Occasion', [], ''], ['Dietary', [], '']],
    history: ['Lead created: 3–10 Jan, family room'] },
  { ini: 'OK', name: 'Omar Khalil', cc: 'SA', country: 'Saudi Arabia', lang: 'Arabic', src: 'Phone', seen: '3 days ago',
    contact: '+966 50 *** 218 · o.khalil@...', stays: 1, revenue: '$980',
    prefs: [['Room', ['high floor'], 'blue'], ['Service', [], ''], ['Occasion', [], ''], ['Dietary', [], '']],
    history: ['Booked BK-88412 · 18 Oct · 3 nights'] },
]

export default function Guests() {
  const [sel, setSel] = useState(0)
  const g = GUESTS[sel]
  return (
    <div className="wrap full">
      <PageTitle title="Guests" sample />
      <p>Guest profiles with preferences collected from chats, so every offer fits.</p>
      <SampleBanner sprint={4} />
      <div className="gl">
        <div className="card glist">
          {GUESTS.map((x, i) => (
            <div key={x.name} className={'grow' + (i === sel ? ' on' : '')} onClick={() => setSel(i)}>
              <div className="avt">{x.ini}</div>
              <div><div className="gn">{x.name}</div><div className="gs"><small className="cc">{x.cc}</small> {x.country} · {x.src} · {x.seen}</div></div>
            </div>
          ))}
        </div>
        <div>
          <div className="card gh">
            <div className="avt big">{g.ini}</div>
            <div className="gi">
              <b>{g.name}</b>
              <div className="gs"><small className="cc">{g.cc}</small> {g.country} · {g.lang}</div>
              <div className="gs">{g.contact}</div>
            </div>
            <div className="gr"><small>Stays · Revenue</small><b>{g.stays} · {g.revenue}</b></div>
          </div>
          <div className="g2">
            <div className="card pad0">
              <div className="ch"><b>Preferences</b><small>Collected by Joe from the chat (with consent); staff can edit.</small></div>
              <div className="cb">
                {g.prefs.map(([label, items, c]) => (
                  <div className="pg" key={label}>
                    <small>{label}</small>
                    <div className="chips">{items.length ? items.map((t) => <span key={t} className={'chip ' + c}>{t}</span>) : <span className="dash">—</span>}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card pad0">
              <div className="ch"><b>History</b></div>
              <div className="cb">
                {g.history.map((h) => <div className="hi" key={h}><i />{h}</div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
