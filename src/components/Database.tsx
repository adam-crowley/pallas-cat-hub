import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { CountryData, CatData } from '../../models/models'

function Database() {
  const [countryData, setCountryData] = useState([])
  const { country } = useParams<string>()

  useEffect(() => {
    fetch('/data/cat-data.json').then((response) =>
      response
        .json()
        .then((countryData) => setCountryData(countryData))
        .catch((error) => console.error('Error fetching data:', error))
    )
  }, [])

  const filteredCountryData = countryData.filter(
    (c) => c.country.toLowerCase() === country.toLowerCase()
  )

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
                  {countryData.map((country: CountryData) => (
                    <>
                      <li key={country.countryId}>
                        <Link to={`/database/${country.country}`}>
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
                {filteredCountryData.length > 0 ? (
                  <>
                    {filteredCountryData.map((country: CountryData) => (
                      <>
                        {country.cats.map((cat: CatData) => (
                          <>
                            <div
                              key={cat.id}
                              className="section--database__manul"
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
                                  <span className="section--database__flag-title">
                                    {cat.country}
                                  </span>
                                </div>
                              </div>
                            </div>
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
