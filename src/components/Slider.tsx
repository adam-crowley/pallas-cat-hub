import { useState, useEffect } from 'react'

interface SlideData {
  imageUrl: string
  title: string
  text: string
}

function Slider() {
  const [data, setData] = useState<SlideData[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    fetch('/data/slider-data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    )
  }

  return (
    <>
      <div className="slider">
        {data.length > 0 && (
          <>
            <div className="slider__img">
              <img src={data[currentIndex].imageUrl} alt="" />
            </div>
            <div className="slider__content">
              <div className="slider__desc">
                <h2 className="slider__title">{data[currentIndex].title}</h2>
                <p className="slider__text">{data[currentIndex].text}</p>
              </div>
              <div className="slider__nav">
                <button onClick={prevSlide}>&#60; Previous</button>
                <button onClick={nextSlide}>Next &#62;</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Slider
