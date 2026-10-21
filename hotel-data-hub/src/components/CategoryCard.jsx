const percent = (done, total) => (total === 0 ? 100 : Math.round((done / total) * 100))

export default function CategoryCard({ index, category }) {
  const [name, done, total, subtitle, fields, internal] = category
  const p = percent(done, total)
  return (
    <div className="card cat">
      <div className="no"><span>{String(index + 1).padStart(2, '0')}</span><em>›</em></div>
      <h4>{name}</h4>
      <p>{subtitle}</p>
      <div className="pr">
        <div className="bar"><i style={{ width: p + '%', background: p === 100 ? 'var(--pri)' : 'var(--org)' }} /></div>
        <span>{p}%</span>
      </div>
      <div className="tags">
        <span className="tag">{fields} fields</span>
        <span className="tag req">{done}/{total} Required</span>
        {internal && <span className="tag">🔒 Internal</span>}
      </div>
    </div>
  )
}
