import { CatData } from '../../models/models'

interface ManulCardProps {
  cat: CatData
}

function ManulCard({ cat }: ManulCardProps) {
  return (
    <div className="section--database__manul" key={cat.id}>
      <h3>{cat.name}</h3>
      <div className="section--database__img-wrap">
        <img
          className="section--database__img"
          src={cat.imageUrl}
          alt={cat.name}
        />
        <div className="section--database__country">
          <img
            className="section--database__flag"
            src={cat.countryUrl}
            alt={cat.country}
          />
          <span className="section--database__flag-title">{cat.country}</span>
        </div>
      </div>
    </div>
  )
}

export default ManulCard
