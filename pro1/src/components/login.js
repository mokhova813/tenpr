import React from "react";
import Form from 'react-bootstrap/Form';
import s from './login.module.css';
import { Button } from 'react-bootstrap';

const ErrorMessage = {
  color: "white",
  fontSize: "13px"
}

class Login extends React.Component{
    render(){
        return(
            <div>
              <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label> Введите ваш email </Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      Мы никогда не будем делиться вашей электронной почтой с кем-либо еще.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label> Пароль</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button className={s.button_new} variant="primary" type="submit">
    Войти
  </Button>
  <Button className={s.button} variant="primary" type="submit">
    Зарегистрироваться
  </Button>
</Form>
    </div>

        )
    }
}
export default Login;