import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { CountryData, CatData } from '../../models/models'

import ManulCard from './Cat'

function Database() {
  const [countryData, setCountryData] = useState([])
  const { country } = useParams()
  let filteredCountryData

  useEffect(() => {
    fetch('/data/cat-data.json').then((response) =>
      response
        .json()
        .then((countryData) => setCountryData(countryData))
        .catch((error) => console.error('Error fetching data:', error))
    )
  }, [])

  if (country) {
    filteredCountryData = countryData.filter(
      (c) => c.country.toLowerCase() === country.toLowerCase()
    )
  }

  return (
    <>
      <section>
        <div className="section--database">
          <div className="container">
            <div className="section--database__header col-12">
              <h2>Pallas Cat Database</h2>
              <div className="section--database__filter">
                <span>Filter by country</span>
                <ul className="section--database__filter-list">
                  <li>
                    <Link to={`/database`}>
                      <button>All</button>
                    </Link>
                  </li>
                  {countryData.map((country: CountryData) => (
                    <>
                      <li key={country.countryId}>
                        <Link to={`/database/${country.country.toLowerCase()}`}>
                          <button>
                            <img
                              className="section--database__flag"
                              src={country.countryUrl}
                              alt={country.country}
                            />
                            {country.country}
                          </button>
                        </Link>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="container container--full-width">
            <div className="col-12">
              <div className="section--database__manuls">
                {country && filteredCountryData.length > 0 ? (
                  <>
                    {filteredCountryData.map((country: CountryData) => (
                      <>
                        {country.cats.map((cat: CatData) => (
                          <>
                            <ManulCard key={cat.id} cat={cat} />
                          </>
                        ))}
                      </>
                    ))}
                  </>
                ) : (
                  <p className="section--database__message">
                    No cats found for this country
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Database
