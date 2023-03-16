import styled from "styled-components";

// CSS IN JS
const FurnitureList = styled.article`
  padding-top: 20px;
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 150px 150px 150px 150px;
  gap: 20px;`

const FurnitureTitleLink = styled.a`
  cursor: pointer;
  display: flex;
  color: white;
  text-decoration: none;
  text-align: center;
  font-size: 28px;
  margin: 0;
  background-color: #80A6AD;
  justify-content: center;
  align-items: center;
  grid-column: 3;
  transition: 1s;

  &:hover {
    opacity: 0.6;
  }`

const FurnitureTitle = styled.h2`
  margin: 0;`

const FurnitureImage = styled.img`
  object-fit: cover;
  display: block;
  width: 100%;
  height: 100%;
  transition: 1s;

  &:hover {
    transform: scale(1.2);
  }`

const FurnitureImageWrapper = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;`
// CSS IN JS

const FurnitureArticle = ({images, gridRow, label, titlePositionStyle}) => {
  const furnitureItemData = [
    {img: images[0], gridRow: gridRow[0]},
    {img: images[1], gridRow: gridRow[1]},
    {img: images[2], gridRow: gridRow[2]},
    {img: images[3], gridRow: gridRow[3]},
  ]

  const imagesList = furnitureItemData.map(({img, gridRow}, index) => {
    return (
      <FurnitureImageWrapper key={index} style={{gridRow: gridRow}}>
        <FurnitureImage src={img} alt={label}/>
      </FurnitureImageWrapper>
    )
  })

  return (
    <FurnitureList>
      <FurnitureTitleLink style={titlePositionStyle}>
        <FurnitureTitle>{label}</FurnitureTitle>
      </FurnitureTitleLink>
      {imagesList}
    </FurnitureList>
  )
}

export default FurnitureArticle;
