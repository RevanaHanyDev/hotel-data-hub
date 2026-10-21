import Icon from '../components/Icon.jsx'
import PageTitle from '../components/PageTitle.jsx'
import SampleBanner from '../components/SampleBanner.jsx'

// [room, category, type, urgent, title, from, minutes, target, orderId]
const COLUMNS = [
  ['Open', [
    ['412', 'AC / heating', 'maint', true, 'AC not cooling, guest waiting in room', 'Joe (WhatsApp)', 18, 15, 'ORD-2026-000131'],
    ['305', 'Towels & linen', 'svc', false, '2 extra towels', 'Joe (WhatsApp)', 6, 30, 'ORD-2026-000130'],
    ['218', 'Baby cot', 'svc', false, 'Baby cot before 18:00', 'Mona (Front Office)', 22, 30, 'ORD-2026-000129'],
  ]],
  ['In progress', [
    ['518', 'Plumbing', 'maint', true, 'Water leak in bathroom', 'Joe (WhatsApp) → Karim', 9, 15, 'ORD-2026-000128'],
    ['120', 'Cleaning', 'svc', false, 'Room cleaning after 14:00', 'Joe (WhatsApp) → Nadia', 35, 30, 'ORD-2026-000127'],
  ]],
  ['Done', [
    ['407', 'TV / WiFi', 'maint', false, 'TV remote not working', 'Sara (Front Office) → Hassan', 25, 30, 'ORD-2026-000126'],
    ['233', 'Amenities', 'svc', false, 'Extra pillows', 'Joe (WhatsApp) → Nadia', 12, 30, 'ORD-2026-000125'],
  ]],
]

function OrderCard({ o }) {
  const [room, cat, type, urgent, title, from, min, target, id] = o
  const late = min > target
  return (
    <div className="card ord">
      <div className="orow">
        <div className="ol">
          <span className="room">{room}</span>
          <span className={'chip ' + (type === 'maint' ? 'blue' : 'grn')}><Icon name={type === 'maint' ? 'wrench' : 'sparkles'} size={11} /> {cat}</span>
        </div>
        {urgent && <span className="chip red"><Icon name="alert" size={11} /> urgent</span>}
      </div>
      <div className="otitle">{title}</div>
      <div className="orow sm">
        <span>{from}</span>
        <span className={'tm' + (late ? ' late' : '')}><Icon name="clock" size={11} /> {min}/{target} min</span>
      </div>
      <div className="oid">{id}</div>
    </div>
  )
}

export default function Orders() {
  return (
    <div className="wrap full">
      <PageTitle title="Orders board" sample />
      <p>Housekeeping and maintenance requests from guests and staff, with target times.</p>
      <SampleBanner sprint={3} />
      <div className="ocols">
        {COLUMNS.map(([title, items]) => (
          <div key={title}>
            <div className="colh plain">{title} <small>{items.length}</small></div>
            {items.map((o) => <OrderCard key={o[8]} o={o} />)}
          </div>
        ))}
      </div>
    </div>
  )
}
