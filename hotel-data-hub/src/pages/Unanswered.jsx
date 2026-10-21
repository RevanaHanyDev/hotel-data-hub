import EmptyState from '../components/EmptyState.jsx'

export default function Unanswered() {
  return (
    <div className="wrap full">
      <h1>Unanswered questions</h1>
      <p>Questions guests and staff asked that the knowledge base could not answer. Fill the field, then close the question.</p>
      <EmptyState icon="bubbleHelp" text="No open questions. The bots answered everything." />
    </div>
  )
}
