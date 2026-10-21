import CategoryCard from '../components/CategoryCard.jsx'
import { CATEGORIES } from '../data.js'

export default function HotelInfo() {
  return (
    <div className="wrap">
      <h1>Hotel information</h1>
      <p>Every fact the chatbots use. Fill a field once; both bots answer from it immediately.</p>
      <div className="hgrid">
        {CATEGORIES.map((c, i) => <CategoryCard key={c[0]} index={i} category={c} />)}
      </div>
    </div>
  )
}
