import VideoSlider from './VideoSlider'

function Videos() {
  return (
    <>
      <div className="section--videos">
        <div className="container">
          <div className="col-12">
            <div className="section--facts__intro">
              <h2>Videos</h2>
              <p className="large">
                Step into the captivating world of Pallas cats as they prowl,
                play, and mesmerize.
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
