import styled from "styled-components";
import Slider from "./slider";
import {useEffect, useState, useContext} from "react";
import {Transition} from 'react-transition-group';
import UserContext from "../utils/userContext";

// CSS IN JS
const WelcomePage = styled.section`
  width: 100%;
  box-sizing: border-box;
  max-width: 1148px;
  padding: 160px 24px 0;`

const PromoBlock = styled.article`
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr 1fr;`

const Text = styled.div`
  box-sizing: border-box;
  max-width: 550px;
  color: #405357;
  padding: 0 30px 0;
  background-color: #80A6AD;
  display: flex;
  flex-direction: column;
  justify-content: center;`

const Title = styled.h1`
  font-size: 52px;`

const Subtitle = styled.p`
  color: white;
  border-bottom: 2px solid #405357;
  padding-bottom: 5px;
  margin: 20px 0 0;
  font-size: 28px;
  max-width: 468px;`


// CSS IN JS
const Promo = () => {

  const [user] = useContext(UserContext)

  const duration = 500;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: {opacity: 1},
    entered: {opacity: 1},
    exiting: {opacity: 0},
    exited: {opacity: 0},
  };

  const [images, setImages] = useState([]);
  const [titles, setTitles] = useState([]);
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(1)
  const [showAnimation, setShowAnimation] = useState(true)

  const unsplashDotComUrl = 'https://api.unsplash.com/photos?client_id=or3lTu7HvN52gM-dDrAjiH3HXbvZsqKAYbiDaAF61Os'

  useEffect(() => {

    onRequest().then(result => {
      setImages(result)
      setTitles(result.map(image => {
        if (image.alt_description !== null) {
          return image.alt_description.replace(image.alt_description[0], image.alt_description[0].toUpperCase())
        }
        return 'Sorry, there is no description for this picture'
      }))
    })
  }, [])


  function onRequest() {
    return fetch(unsplashDotComUrl).then(result => {
      if (result.ok) {
        return result.json()
      } else {
        return Promise.reject(result.status)
      }
    })
  }

  // console.log(titles)

  // console.log(titles[counter])
  return (
    <WelcomePage>
      <PromoBlock>
        <Text>
          {/*<Transition in={showAnimation} timeout={duration}>*/}
          {/*  {*/}
          {/*    state => (*/}
          {/*      <Title style={{*/}
          {/*        ...defaultStyle,*/}
          {/*        ...transitionStyles[state]*/}
          {/*      }}>*/}
          {/*        {!text ? titles[0] : text}*/}
          {/*      </Title>*/}
          {/*      */}
          {/*    )*/}
          {/*  }*/}
          {/*</Transition>*/}
          <Title>
            {!text ? titles[0] : text}
          </Title>
          <Subtitle>{`Здравствуй ${user.name}`}</Subtitle>
        </Text>
        <Slider counter={counter}
                showAnimation={showAnimation}
                setShowAnimation={setShowAnimation}
                setCounter={setCounter}
                text={text}
                images={images}
                setText={setText}
                titles={titles}
                imagesArray={images}/>
      </PromoBlock>
    </WelcomePage>
  )
}

export default Promo;
