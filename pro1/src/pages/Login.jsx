import React from 'react';
import { Form, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import MyBatton from '../components/Button';
import "./Login.css";


export default class Login extends React.Component {
  render() {
    return (
      <div>
        <Col md={4} sm={4}>
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
            <Link to="/randomeGame">
              <MyBatton caption="Войти" onClick={() => { }}></MyBatton>
            </Link>
          </Form>
        </Col>
      </div>

    )
  }
}
