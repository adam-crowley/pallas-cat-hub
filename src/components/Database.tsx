import { useState, useEffect } from 'react'

function Database() {
  const [catData, setCatData] = useState([])

  useEffect(() => {
    fetch('/data/cat-data.json').then((response) =>
      response
        .json()
        .then((catData) => setCatData(catData))
        .catch((error) => console.error('Error fetching data:', error))
    )
  }, [])

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
                    <button>
                      <img
                        className="section--database__flag"
                        src="img/jp.svg"
                        alt=""
                      />
                      Japan
                    </button>
                  </li>
                  <li>
                    <button>
                      <img
                        className="section--database__flag"
                        src="img/cn.svg"
                        alt=""
                      />
                      China
                    </button>
                  </li>
                  <li>
                    <button>
                      <img
                        className="section--database__flag"
                        src="img/de.svg"
                        alt=""
                      />
                      Germany
                    </button>
                  </li>
                  <li>
                    <button>
                      <img
                        className="section--database__flag"
                        src="img/ru.svg"
                        alt=""
                      />
                      Russia
                    </button>
                  </li>
                  <li>
                    <button>
                      <img
                        className="section--database__flag"
                        src="img/pl.svg"
                        alt=""
                      />
                      Poland
                    </button>
                  </li>
                  <li>
                    <button>
                      <img
                        className="section--database__flag"
                        src="img/us.svg"
                        alt=""
                      />
                      US
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container container--full-width">
            <div className="col-12">
              <div className="section--database__manuls">
                {catData.map((cat) => (
                  <div className="section--database__manul">
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Database
