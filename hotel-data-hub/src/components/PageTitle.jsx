import Icon from './Icon.jsx'

export default function PageTitle({ title, sample, children }) {
  return (
    <h1 className="ptitle">
      {title}
      {sample && <span className="sample"><Icon name="flask" size={10} /> Sample data</span>}
      {children}
    </h1>
  )
}
