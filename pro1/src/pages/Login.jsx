import React from 'react';
import { Form, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import MyBatton from '../components/Button';
import "./Login.css";


export default class Login extends React.Component {
  render() {
    return (
<<<<<<< HEAD
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

=======
      <div class="parent" >
        <div class="block">
          <Form>
            <div class="contact_form h2">
              <Form.Label>
                <h2>ВХОД</h2>
              </Form.Label>
            </div>
            <div class="text-field contact_form input">
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </div>
            <div class="contact_form input">
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </div>
            <ul>
          <button class="submit" type="submit">
            <Link to="/Home">
             Войти
            </Link>
            </button>
            </ul>
          </Form>
        </div>
      </div>
>>>>>>> e2aed4ea96458d9ef15fa77b42cf2ed61d14849a
    )
  }
}
