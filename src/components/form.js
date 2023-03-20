import styled from "styled-components";

// CSS IN JS
const FormBlock = styled.form`
  display: flex;
  flex-direction: column;`

const Title = styled.h3`
  font-size: 20px;
  margin: 0 0 20px;
  color: #D6D6D6;`

const Input = styled.input`
  box-sizing: border-box;
  padding: 6px 0 6px 24px;
  display: block;
  width: 100%;
  border: 1px solid black;
  margin-bottom: 8px;`

const PrivacyBlock = styled.div`
  margin-bottom: 8px;`

const SubmitButton = styled.button`
  padding: 5px 0;
  cursor: pointer;
  display: block;
  width: 100%;
  background-color: #405357;
  transition: 0.3s;
  border: none;
  color: white;
  font-size: 18px;

  &_disabled {
    background-color: #D6D6D6;
    color: #b0b0b0;
  }
`

const Link = styled.a`
  text-decoration: none;`
// CSS IN JS

const Form = () => {
  return (
    <FormBlock>
      <Title>Оставьте заявку и мы Вам перезвоним</Title>
      <Input id={'name'} name={'name'} required type={'text'} placeholder={'Имя'}/>
      <Input id={'number'} name={'number'} required type={'text'} placeholder={'Имя'}/>
      <PrivacyBlock>
        <input className={'form__privacy-checkbox'} type={'checkbox'} name={'privacy'} id={'formPrivacy'}
               checked={true}/>
        <label htmlFor={'formPrivacy'}/>
        <span style={{marginLeft: 5}}>Я согласен на <Link href={'#'}>обработку персональных данных.</Link></span>
      </PrivacyBlock>
      <SubmitButton>Отправить</SubmitButton>
    </FormBlock>
  )
}

export default Form;
