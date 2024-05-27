import { Link } from 'react-router-dom'

import { CountryData, FilterProps } from '../../models/models'

function Filter({
  countryData,
  selectedCountry,
  setSelectedCountry,
}: FilterProps) {
  return (
    <div className="section--database__filter">
      <span>Filter by country</span>
      <ul className="section--database__filter-list">
        <li>
          <Link to={`/database`}>
            <button
              className={!selectedCountry ? 'selected' : ''}
              onClick={() => setSelectedCountry(null)}
            >
              All
            </button>
          </Link>
        </li>
        {countryData.map((country: CountryData) => (
          <li key={country.countryId}>
            <Link to={`/database/${country.country.toLowerCase()}`}>
              <button
                className={
                  selectedCountry === country.country.toLowerCase()
                    ? 'selected'
                    : ''
                }
                onClick={() =>
                  setSelectedCountry(country.country.toLowerCase())
                }
              >
                <img
                  className="section--database__flag"
                  src={country.countryUrl}
                  alt={country.country}
                />
                {country.country}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filter
