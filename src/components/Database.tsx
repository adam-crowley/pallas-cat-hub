import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ThreeCircles } from 'react-loader-spinner'

import { CountryData, CatData } from '../../models/models'

import ManulCard from './Cat'
import Filter from './Filter'

function Database() {
  const [countryData, setCountryData] = useState([])
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { country } = useParams<string>()
  let filteredCountryData: CountryData[] = []

  useEffect(() => {
    fetch('/data/cat-data.json').then((response) =>
      response
        .json()
        .then((countryData) => {
          setCountryData(countryData)
          setIsLoading(false)
        })
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
          {isLoading ? (
            <ThreeCircles
              visible={true}
              height="75"
              width="75"
              innerCircleColor="#F9D36A"
              middleCircleColor="#000"
              outerCircleColor="#000"
              ariaLabel="video-loading"
              wrapperClass="section--database__loading"
            />
          ) : null}
          <div className="container">
            <div className="section--database__header col-12">
              <h2>Pallas Cat Database</h2>
              <Filter
                countryData={countryData}
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
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
