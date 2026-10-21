import EmptyState from '../components/EmptyState.jsx'

export default function Approvals() {
  return (
    <div className="wrap full">
      <h1>Approvals</h1>
      <p>Price and policy changes made by front office agents go live only after approval.</p>
      <EmptyState icon="check" text="Nothing waiting for approval." />
    </div>
  )
}
