export default function SampleBanner({ sprint }) {
  const label = typeof sprint === 'string' ? 'Sprints ' + sprint.replace(/^s /, '') : 'Sprint ' + sprint
  return <div className="banner">This screen shows sample data to agree the design. It is connected in {label}.</div>
}
