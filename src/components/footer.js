import styled from "styled-components";
import Form from "./form";
import visa from '../images/visa.png';
import maestro from '../images/maestro.png';
import masterCard from '../images/master-card.png';
import mir from '../images/mir.png';
import vk from '../images/vk.png';
import instagram from '../images/instagram.png';
import profi from '../images/faviconV2.png'
// CSS IN JS
const MainBlock = styled.footer`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 40px;
  width: 100%;
  background-color: #577175;`

const Info = styled.div`
  box-sizing: border-box;
  padding: 0 24px 0;
  justify-content: space-between;
  display: flex;
  max-width: 1148px;
  width: 100%;`

const FormWrapper = styled.div`
  max-width: 350px;
  width: 100%;`

const PaymentTitle = styled.h4`
  font-size: 20px;
  margin: 0;
  color: #D6D6D6;`

const PaymentSystems = styled.ul`
  padding: 0;
  margin: 20px 0 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 160px;`

const PaymentSystem = styled.img`
  width: 30px;
  height: 30px;`

const ContactsTitle = styled.h5`
  font-size: 20px;
  margin: 0 0 20px;
  color: #D6D6D6;`

const Contact = styled.p`
  margin: 0 0 20px;
  color: #D6D6D6;`

const SocialLinks = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  max-width: 100px;`

const SocialLink = styled.a`
  text-decoration: none;
  color: #D6D6D6;`

const Icon = styled.img`
  width: 20px;
  height: 20px;`
// CSS IN JS
const Footer = () => {
  return (
    <MainBlock>
      <Info>
        <FormWrapper>
          <Form/>
        </FormWrapper>
        <div>
          <PaymentTitle>Мы принимаем</PaymentTitle>
          <PaymentSystems>
            <li>
              <PaymentSystem src={visa}/>
            </li>
            <li>
              <PaymentSystem src={maestro}/>
            </li>
            <li>
              <PaymentSystem src={mir}/>
            </li>
            <li>
              <PaymentSystem src={masterCard}/>
            </li>
          </PaymentSystems>
        </div>
        <div>
          <ContactsTitle>Свяжитесь с нами</ContactsTitle>
          <Contact>+7 (812) 986-02-02</Contact>
          <Contact>fordiz.meb@yandex.ru</Contact>
          <SocialLinks>
            <li>
              <SocialLink>
                <Icon src={vk}/>
              </SocialLink>
            </li>
            <li><SocialLink><Icon src={instagram}/></SocialLink></li>
            <li><SocialLink><Icon src={profi}/></SocialLink></li>
          </SocialLinks>
        </div>
      </Info>
    </MainBlock>
  )
}

export default Footer;
