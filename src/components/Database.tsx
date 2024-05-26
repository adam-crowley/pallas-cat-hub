import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { CountryData, CatData } from '../../models/models'

import ManulCard from './Cat'
import Filter from './Filter'

function Database() {
  const [countryData, setCountryData] = useState([])
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const { country } = useParams<string>()
  let filteredCountryData: CountryData[] = []

  useEffect(() => {
    fetch('/data/cat-data.json').then((response) =>
      response
        .json()
        .then((countryData) => setCountryData(countryData))
        .catch((error) => console.error('Error fetching data:', error))
    )
  }, [])

  useEffect(() => {
    if (country) {
      setSelectedCountry(country)
    } else {
      setSelectedCountry(null)
    }
  }, [country])

  if (country) {
    filteredCountryData = countryData.filter(
      (c: CountryData) => c.country.toLowerCase() === country.toLowerCase()
    )
  }

  return (
    <>
      <section>
        <div className="section--database">
          <div className="container">
            <div className="section--database__header col-12">
              <h2>Pallas Cat Database</h2>
              <Filter
                countryData={countryData}
                selectedCountry={selectedCountry}
              />
            </div>
          </div>
          <div className="container container--full-width">
            <div className="col-12">
              <div className="section--database__manuls">
                {country && filteredCountryData.length > 0 ? (
                  <>
                    {filteredCountryData.map((country: CountryData) => (
                      <React.Fragment key={country.countryId}>
                        {country.cats.map((cat: CatData) => (
                          <ManulCard key={cat.id} cat={cat} />
                        ))}
                      </React.Fragment>
                    ))}
                  </>
                ) : (
                  <>
                    {countryData.map((country: CountryData) => (
                      <React.Fragment key={country.countryId}>
                        {country.cats.map((cat: CatData) => (
                          <ManulCard key={cat.id} cat={cat} />
                        ))}
                      </React.Fragment>
                    ))}
                  </>
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
