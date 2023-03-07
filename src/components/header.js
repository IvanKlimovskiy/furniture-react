import styled from "styled-components";
import logo from '../images/logo.png'

// CSS IN JS
const Heading = styled.header`
  z-index: 4;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 44px 0 44px;
  width: 100%;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.8);
`
const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 1148px;
  padding: 0 24px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;`

const HeaderLogoWrapper = styled.div`
  max-width: 200px;
  margin-right: 60px;
  align-self: start;`

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;`

const NavMenu = styled.nav`
  max-width: 800px;
  width: 100%;`

const CloseMenuButton = styled.button`
  display: none;
  margin: 20px 0 0 20px;
  border: none;
  width: 7vw;
  height: 7vw;
  background-image: url(../images/close-button.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0);`

const List = styled.ul`
  margin: 0;
  display: flex;
  list-style: none;
  justify-content: space-between;`

const Link = styled.a`
  font-size: 20px;
  text-decoration: none;
  color: black;
  opacity: 0.6;
  transition: 0.5s;`

const BurgerMenu = styled.div`
  display: none;
`

const BurgerLine = styled.span``
// CSS IN JS

const Header = () => {

  const linksData = [
    {label: 'Шкафы', href: './cabinets.html'},
    {label: 'Кухни-гостиные', href: './kitchen-living-rooms.html'},
    {label: 'Гардеробные', href: './dressing-rooms.html'},
    {label: 'Как заказать', href: './how-to-order.html'},
    {label: 'Контакты', href: './contacts.html'},
  ]

  return (
    <Heading>
      <Wrapper>
        <HeaderLogoWrapper>
          <Logo alt={'Логотип'} src={logo}/>
        </HeaderLogoWrapper>
        <NavMenu>
          <CloseMenuButton type={'button'} aria-label={'Закрыть'}></CloseMenuButton>
          <List>
            {linksData.map(({label, href}, index) => {
              return (
                <li key={index}>
                  <Link href={href}>{label}</Link>
                </li>
              )
            })}
          </List>
        </NavMenu>
        <BurgerMenu>
          <BurgerLine></BurgerLine>
        </BurgerMenu>
      </Wrapper>
    </Heading>
  )

}

export default Header;
