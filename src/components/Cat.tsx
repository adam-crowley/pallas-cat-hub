import { motion } from 'framer-motion'

import { ManulCardProps } from '../../models/models'

function ManulCard({ cat }: ManulCardProps) {
  return (
    <motion.div
      className="section--database__manul"
      key={cat.id}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.4 }}
    >
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
    </motion.div>
  )
}

export default ManulCard
