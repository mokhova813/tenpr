import React from 'react';
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import MyBatton from '../components/Button';
import "./Login.css";


export default class Login extends React.Component {
  render() {
    return (
      <div>
       
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
                <Link to="/home">
                  <MyBatton caption="Войти" onClick={() => { }}></MyBatton>
                </Link>
              </ul>
            </Form>
          </div>
        </div>
      </div>

    )
  }
}
