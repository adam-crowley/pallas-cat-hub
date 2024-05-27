import { useState, useEffect } from 'react'
import { ThreeCircles } from 'react-loader-spinner'

import { VideoSlideData } from '../../models/models'

function VideoSlider() {
  const [data, setData] = useState<VideoSlideData[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showVideo, setShowVideo] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch('/data/video-slider-data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  useEffect(() => {
    let player: YT.Player | null = null
    if (showVideo) {
      setIsLoading(true)
      player = new YT.Player('slider__video', {
        height: '360',
        width: '640',
        videoId: data[currentIndex].youTubeId,
        playerVars: {
          autoplay: 1,
          controls: 0,
        },
        events: {
          onReady: () => setIsLoading(false),
        },
      })
    }
    return () => {
      if (player) {
        player.destroy()
      }
    }
  }, [showVideo])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    )
    setShowVideo(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    )
    setShowVideo(false)
  }

  const playVideo = () => {
    setShowVideo(true)
  }

  return (
    <>
      <div className="slider">
        {data.length > 0 && (
          <>
            <div className="slider__media">
              {isLoading ? (
                <ThreeCircles
                  visible={true}
                  height="75"
                  width="75"
                  innerCircleColor="#F9D36A"
                  middleCircleColor="#000"
                  outerCircleColor="#000"
                  ariaLabel="video-loading"
                  wrapperClass="slider__video-loading"
                />
              ) : null}
              <div>
                {showVideo ? (
                  <>
                    <div className="slider__video" id="slider__video"></div>
                  </>
                ) : (
                  <div
                    className="slider__video-img-container"
                    onClick={playVideo}
                  >
                    <img
                      className="slider__video-btn"
                      src="img/play-btn.svg"
                      alt=""
                    />
                    <img
                      className="slider__video-img"
                      src={data[currentIndex].imageUrl}
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="slider__content">
              <div className="slider__desc">
                <h3 className="slider__title">{data[currentIndex].title}</h3>
                <p className="slider__author">{data[currentIndex].author}</p>
                <p className="slider__text">{data[currentIndex].text}</p>
              </div>
              <div className="slider__nav">
                <button className="button button--prev" onClick={prevSlide}>
                  &#60; Previous
                </button>
                <button className="button button--next" onClick={nextSlide}>
                  Next &#62;
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default VideoSlider
