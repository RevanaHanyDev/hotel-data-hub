import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import PageTitle from '../components/PageTitle.jsx'
import SampleBanner from '../components/SampleBanner.jsx'

const INITIAL = [
  { id: 1, name: 'Anna Kowalska', time: '2 min', preview: 'Czy mogę porozmawiać z kimś z recepcji?', status: 'person', channel: 'WhatsApp · PL', unread: 1, sub: 'WhatsApp · Not in house',
    msgs: [
      ['g', 'Dzień dobry! Czy macie pakiety spa dla dwóch osób?', '10:12'],
      ['b', 'Dzień dobry, Anna 🌞\nJestem Joe, asystent AI Long Beach Resort 🏨\n\nTak, spa jest otwarte wt.–nd. 09:00–21:00 💆\nPakiety dla par mogę przekazać recepcji, aby przygotowała ofertę.', '10:12'],
      ['g', 'Czy mogę porozmawiać z kimś z recepcji?', '10:14'],
    ] },
  { id: 2, name: 'Room 412', time: '8 min', preview: 'Thanks, the technician is here 👍', status: 'joe', channel: 'WhatsApp · EN', sub: 'WhatsApp · In house',
    msgs: [['g', 'The AC is not cooling, can someone check?', '09:40'], ['b', 'Sorry about that! I have sent a technician to room 412.', '09:41'], ['g', 'Thanks, the technician is here 👍', '09:52']] },
  { id: 3, name: 'Thomas Becker', time: '1 h', preview: 'Ab welchem Alter ist der Kids Club?', status: 'joe', channel: 'Website · DE', sub: 'Website · Not in house',
    msgs: [['g', 'Ab welchem Alter ist der Kids Club?', '08:30']] },
  { id: 4, name: 'عمر خليل', time: '3 h', preview: '✅ تم تأكيد الخروج المتأخر حتى الساعة ٢', rtl: true, status: 'staff', channel: 'WhatsApp · AR', sub: 'WhatsApp · In house',
    msgs: [['g', 'هل يمكنني الخروج متأخرا؟', '07:10'], ['s', 'تم تأكيد الخروج المتأخر حتى الساعة ٢', '07:25']] },
]
const LABEL = { person: ['Wants a person', 'org'], joe: ['Joe answering', 'blue'], staff: ['Staff replying', 'grn'] }

export default function ChatInbox() {
  const [chats, setChats] = useState(INITIAL)
  const [sel, setSel] = useState(1)
  const [text, setText] = useState('')
  const c = chats.find((x) => x.id === sel)
  const patch = (fn) => setChats(chats.map((x) => (x.id === sel ? fn(x) : x)))

  const send = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    patch((x) => ({ ...x, status: 'staff', msgs: [...x.msgs, ['s', text.trim(), 'now']] }))
    setText('')
  }

  return (
    <div className="wrap full">
      <PageTitle title="Chat inbox" sample />
      <p>Live guest conversations with Joe. Take over when a guest asks for a person.</p>
      <SampleBanner sprint="s 6–7" />
      <div className="chat card pad0">
        <div className="clist">
          {chats.map((x) => (
            <div key={x.id} className={'crow' + (x.id === sel ? ' on' : '')} onClick={() => { setSel(x.id); patch((y) => y) }}>
              <div className="ctop"><b>{x.name}</b><small>{x.time}</small></div>
              <div className="cprev" dir={x.rtl ? 'rtl' : undefined}>{x.preview}</div>
              <div className="chips">
                <span className={'chip ' + LABEL[x.status][1]}>{LABEL[x.status][0]}</span>
                <span className="chip blue">{x.channel}</span>
                {x.unread && x.id !== sel ? <span className="unread">{x.unread}</span> : x.unread && x.status === 'person' ? <span className="unread">{x.unread}</span> : null}
              </div>
            </div>
          ))}
        </div>
        <div className="cconv">
          <div className="chead">
            <div><b>{c.name}</b><div className="gs">{c.sub}</div></div>
            {c.status !== 'staff' && (
              <button className="btn take" onClick={() => patch((x) => ({ ...x, status: 'staff' }))}><Icon name="hand" size={13} /> Take over</button>
            )}
          </div>
          <div className="cmsgs">
            {c.msgs.map(([who, t, time], i) => (
              <div key={i} className={'bub ' + (who === 'g' ? 'guest' : 'out')}>
                <div style={{ whiteSpace: 'pre-line' }}>{t}</div>
                <small>{who === 'b' && <Icon name="bot" size={11} />} {time}</small>
              </div>
            ))}
          </div>
          <form className="cinput" onSubmit={send}>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a reply…" />
            <button className="btn" type="submit"><Icon name="send" size={13} /></button>
          </form>
        </div>
      </div>
    </div>
  )
}
