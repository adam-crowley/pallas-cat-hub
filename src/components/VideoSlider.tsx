import { useState, useEffect, useRef } from 'react'

interface SlideData {
  imageUrl: string
  youTubeId: string
  title: string
  author: string
  text: string
}

function VideoSlider() {
  const [data, setData] = useState<SlideData[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const playerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('/data/video-slider-data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    )
    setShowVideo(false) // Reset video display when changing slides
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    )
    setShowVideo(false) // Reset video display when changing slides
  }

  const handleImageClick = () => {
    setShowVideo(true)
  }

  return (
    <>
      <div className="slider">
        {data.length > 0 && (
          <>
            <div className="slider__media">
              {showVideo ? (
                <div className="slider__video">
                  <div ref={playerRef} />
                </div>
              ) : (
                <div className="slider__img" onClick={handleImageClick}>
                  <img src={data[currentIndex].imageUrl} alt="" />
                </div>
              )}
            </div>
            <div className="slider__content">
              <div className="slider__desc">
                <h3 className="slider__title">{data[currentIndex].title}</h3>
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
