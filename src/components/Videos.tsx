import VideoSlider from './VideoSlider'

function Videos() {
  return (
    <>
      <div className="section--videos">
        <div className="container">
          <div className="col-12">
            <div className="section--facts__intro">
              <h2>Videos</h2>
              <p>
                Everything you always wanted to know about Pallas’ Cats but were
                afraid to ask!
              </p>
            </div>
            <VideoSlider />
          </div>
        </div>
      </div>
    </>
  )
}

export default Videos
