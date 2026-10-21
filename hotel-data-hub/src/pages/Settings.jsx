import { useState } from 'react'
import Icon from '../components/Icon.jsx'

const TABS = [['users', 'Users & Telegram', 'users'], ['keys', 'API keys', 'key'], ['widget', 'Website chat widget', 'bubble']]
const ROLES = ['Admin', 'Manager', 'Front Office', 'Staff']
const DEPTS = ['—', 'Front Office', 'Housekeeping', 'Maintenance', 'F&B', 'Sales']

const USERS = [
  { ini: 'YN', name: 'Your Name', email: 'jovaney.mores@team.hurghada-longbeach.com', role: 'Admin', dept: '—', tg: '', active: true },
  { ini: 'YN', name: 'Your Name', email: 'YOUR-EMAIL@app-lbr.com', role: 'Admin', dept: '—', tg: '', active: true },
  { ini: 'A', name: 'Admin', email: 'admin@app-lbr.com', role: 'Admin', dept: '—', tg: '', active: false },
]

function UsersTab() {
  const [users, setUsers] = useState(USERS)
  const set = (i, k, v) => setUsers(users.map((u, j) => (j === i ? { ...u, [k]: v } : u)))
  return (
    <div className="card pad0 tbl">
      <div className="ch">
        <b>Users &amp; Telegram</b>
        <small>Telegram ID: each staff member sends /start to @userinfobot to get it. The staff assistant uses it to know who is asking.</small>
      </div>
      <table className="utable">
        <thead><tr><th>Name</th><th>Role</th><th>Department</th><th>Telegram ID</th><th>Status</th></tr></thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>
                <div className="uname">
                  <div className="avt">{u.ini}</div>
                  <div><b>{u.name}</b><div className="gs">{u.email}</div></div>
                </div>
              </td>
              <td><select value={u.role} onChange={(e) => set(i, 'role', e.target.value)}>{ROLES.map((r) => <option key={r}>{r}</option>)}</select></td>
              <td><select value={u.dept} onChange={(e) => set(i, 'dept', e.target.value)}>{DEPTS.map((d) => <option key={d}>{d}</option>)}</select></td>
              <td><input value={u.tg} placeholder="123456789" onChange={(e) => set(i, 'tg', e.target.value)} /></td>
              <td><span className={'chip ' + (u.active ? 'grn' : 'gry')}>{u.active ? 'Active' : 'Inactive'}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const KEYS = [
  ['smoke-test (temporary)', 'hdh_live_0hAwY…', '18 Oct 2026', '3 days ago', ['kb:feedback', 'kb:read'], true],
  ['temp guest-view check', 'hdh_live_ptWhE…', '21 Oct 2026', '1 hour ago', ['kb:read'], true],
  ['deploy check (temporary)', 'hdh_live_dfrFl…', '21 Oct 2026', '57 minutes ago', ['kb:read'], true],
  ['n8n guest bot (Joe)', 'hdh_live_zSSvf…', '21 Oct 2026', 'Never', ['kb:feedback', 'kb:read'], true],
  ['n8n guest bot (Joe)', 'hdh_live_5EA-o…', '21 Oct 2026', 'Never', ['kb:feedback', 'kb:read'], false],
]
const PERMS = ['kb:read', 'kb:feedback', 'kb:write', 'orders:read', 'orders:write', 'leads:write', 'guests:read']

function KeysTab() {
  const [keys, setKeys] = useState(KEYS)
  const [name, setName] = useState('')
  const [perms, setPerms] = useState(['kb:read', 'kb:feedback'])
  const toggle = (p) => setPerms(perms.includes(p) ? perms.filter((x) => x !== p) : [...perms, p])
  const create = () => {
    const token = 'hdh_live_' + Math.random().toString(36).slice(2, 7) + '…'
    setKeys([[name.trim(), token, '21 Oct 2026', 'Never', PERMS.filter((p) => perms.includes(p)).sort(), false], ...keys])
    setName('')
  }
  const revoke = (i) => setKeys(keys.map((k, j) => (j === i ? [...k.slice(0, 5), true] : k)))
  return (
    <div className="kgrid">
      <div className="card pad0">
        <div className="ch"><b>API keys</b><small>Used by the n8n chatbots: Joe on WhatsApp and the staff assistant on Telegram.</small></div>
        {keys.map(([n, tok, date, used, pm, revoked], i) => (
          <div className="krow" key={i}>
            <span className="kic"><Icon name="key" size={14} /></span>
            <div className="kinfo">
              <div className="kn">{n}</div>
              <div className="kmeta">{tok} · {date} · Last used: {used}</div>
              <div className="chips">{pm.map((x) => <span key={x} className="chip gry">{x}</span>)}</div>
            </div>
            {revoked ? <span className="chip red">Revoked</span> : <button className="btn ghost rev" onClick={() => revoke(i)}>Revoke</button>}
          </div>
        ))}
      </div>
      <div className="card newkey">
        <b>New API key</b>
        <label>Name</label>
        <input className="fld" value={name} onChange={(e) => setName(e.target.value)} placeholder="n8n guest bot (Joe)" />
        <label>Permissions</label>
        <div className="perms">
          {PERMS.map((p) => (
            <label key={p} className={'perm' + (perms.includes(p) ? ' on' : '')}>
              <input type="checkbox" checked={perms.includes(p)} onChange={() => toggle(p)} /> {p}
            </label>
          ))}
        </div>
        <button className="btn wide" disabled={!name.trim() || !perms.length} onClick={create}>+ New API key</button>
      </div>
    </div>
  )
}

function WidgetTab() {
  const [welcome, setWelcome] = useState("Hi! I'm Joe, Long Beach Resort's AI assistant. How can I help?")
  const [f, setF] = useState({ domain: 'www.your-hotel-website.com', link: 'https://booking.example.com/?hotel=LONGBEACH&checkin={arrival}&checkout={departure}', hours: '08:00 – 23:00' })
  return (
    <div className="wgrid">
      <div className="card wform">
        <div className="hd"><b>Website chat widget</b><span className="sample"><Icon name="flask" size={10} /> Sample data</span></div>
        <label>Allowed website domains</label>
        <input className="fld" value={f.domain} onChange={(e) => setF({ ...f, domain: e.target.value })} />
        <label>Welcome message</label>
        <input className="fld" value={welcome} onChange={(e) => setWelcome(e.target.value)} />
        <label>Booking engine link</label>
        <input className="fld" value={f.link} onChange={(e) => setF({ ...f, link: e.target.value })} />
        <label>Live hand-off hours</label>
        <input className="fld" value={f.hours} onChange={(e) => setF({ ...f, hours: e.target.value })} />
        <label className="mut">Embed code (website footer):</label>
        <pre className="code">{`<script src="https://cdn.app-lbr.com/widget/v1/chat.js"\n        data-key="pk_live_LONGBEACH_…" defer></script>`}</pre>
      </div>
      <div className="wprev">
        <div className="wbox">
          <div className="wh"><span className="wav">🤖</span><div><b>Joe · Long Beach Resort</b><small>AI assistant · replies instantly</small></div></div>
          <div className="wb">
            <div className="wm bot">{welcome}</div>
            <div className="wm me">Is the pool heated in December?</div>
            <div className="wm bot">Yes, the main pool is heated to 28 °C all winter 🏊</div>
            <div className="wq"><span>Book a room</span><span>Restaurants</span></div>
          </div>
          <div className="wf">Write a reply to the guest…</div>
        </div>
      </div>
    </div>
  )
}

export default function Settings() {
  const [tab, setTab] = useState('users')
  return (
    <div className="wrap full">
      <h1>Settings</h1>
      <div className="tabs" style={{ marginTop: 14 }}>
        {TABS.map(([id, label, icon]) => (
          <button key={id} className={'tab' + (tab === id ? ' on' : '')} onClick={() => setTab(id)}>
            <Icon name={icon} size={13} /> {label}
          </button>
        ))}
      </div>
      {tab === 'users' ? <UsersTab /> : tab === 'keys' ? <KeysTab /> : <WidgetTab />}
    </div>
  )
}
