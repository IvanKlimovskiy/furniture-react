import styled from "styled-components";
import {useEffect, useState, useRef} from "react";

//CSS IN JS
const SliderInit = styled.div`
  display: flex;
  max-width: 550px;
  max-height: 420px;
  overflow: hidden;
  width: 100%;`

const SliderWrapper = styled.div`
  display: flex;
  transform: translateX(0);
  transition: 1s;`

const SliderImage = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;`
//CSS IN JS

const Slider = ({imagesArray, counter, setCounter, setText, titles}) => {
  const [slideWidthCounter, setSlideWidthCounter] = useState(0)

  const slideWidthRef = useRef(0)
  const slidesNumberRef = useRef(0)

  useEffect(() => {
    const slideWidth = slideWidthRef.current.offsetWidth
    const slidesNumber = slidesNumberRef.current.childElementCount
    setTimeout(() => {
      setText(titles[counter])
      setCounter(prevState => prevState + 1)
      if (counter === titles.length) {
        setCounter(0)
        setText(titles[counter])
        setCounter(prevState => prevState + 1)
      }
      setSlideWidthCounter(slideWidthCounter => {
        if (slideWidthCounter === slideWidth * (slidesNumber - 1)) {
          setSlideWidthCounter(0)
        } else {
          return slideWidthCounter + slideWidth
        }
      })
    }, 5000)
  }, [slideWidthCounter])

  useEffect(() => {
    setTimeout(() => {
      setText("A large wave in the middle of the ocean")
    }, 5000)
  }, [])

  return (
    <SliderInit ref={slideWidthRef}>
      <SliderWrapper ref={slidesNumberRef}
                     style={{transform: `translateX(-${slideWidthCounter}px)`}}>
        {imagesArray.map(({urls, alt_description, id}) => {
          return (
            <SliderImage key={id} src={urls.regular} alt={alt_description}/>
          )
        })}
      </SliderWrapper>
    </SliderInit>
  )
}

export default Slider;
