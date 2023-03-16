// CSS IN JS
import styled from "styled-components";
import FurnitureArticle from "./furniture-article";
import images from "../utils/images";

const GalleryList = styled.section`
  box-sizing: border-box;
  max-width: 1148px;
  width: 100%;
  padding: 0 24px 20px;`

// CSS IN JS
const Gallery = () => {

  const [
    cabinet1, cabinet2, cabinet3, cabinet4,
    kitchen1, kitchen2, kitchen3, kitchen4,
    livingRoom1, livingRoom2, livingRoom3, livingRoom4
  ] = images;

  const furnitureArticleData = [{
    images: [cabinet1, cabinet2, cabinet3, cabinet4],
    gridRow: ['1/5', '1/3', '3/5', '2/5'],
    label: 'Шкафы',
    titlePosition: {gridColumn: 3}
  }, {
    images: [kitchen1, kitchen2, kitchen3, kitchen4],
    gridRow: ['2/5', '1/5', '1/3', '3/5'],
    label: 'Кухни',
    titlePosition: {gridColumn: 1}
  }, {
    images: [livingRoom1, livingRoom2, livingRoom3, livingRoom4],
    gridRow: ['1/5', '1/3', '3/5', '2/5'],
    label: 'Гардеробные',
    titlePosition: {gridColumn: 3}
  }]

  return (<GalleryList>
    {furnitureArticleData.map(({
                                 images, gridRow, label, titlePosition
                               }, index) => {
      return (<FurnitureArticle key={index}
                                images={images}
                                gridRow={gridRow}
                                label={label}
                                titlePositionStyle={titlePosition}/>)
    })}
  </GalleryList>)

}

export default Gallery;
