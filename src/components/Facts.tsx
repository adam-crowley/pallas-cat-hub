import Slider from './Slider'

function Facts() {
  return (
    <>
      <div className="section--facts">
        <div className="container">
          <div className="col-12">
            <div className="section--facts__intro">
              <h2>Facts</h2>
              <p className="large">
                Everything you always wanted to know about Pallas’ Cats!
              </p>
            </div>
            <Slider />
          </div>
        </div>
      </div>
    </>
  )
}

export default Facts
