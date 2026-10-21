import { useState } from 'react'
import Icon from '../components/Icon.jsx'

export default function BotPreview() {
  const [q, setQ] = useState('')
  const [asked, setAsked] = useState('')

  const submit = (e) => {
    e.preventDefault()
    setAsked(q.trim())
  }

  return (
    <div className="wrap full">
      <h1>Bot answer preview</h1>
      <p>Ask a question the way a guest would. You see exactly which facts the chatbots will use.</p>
      <form className="searchrow" onSubmit={submit}>
        <div className="sbox">
          <Icon name="search" size={14} />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. What time does the spa open on Monday?" />
        </div>
        <button className="btn" type="submit">Search</button>
      </form>
      {asked && (
        <div className="card result">
          No facts found for “{asked}” yet. Fill the related fields in Hotel information first.
        </div>
      )}
    </div>
  )
}
