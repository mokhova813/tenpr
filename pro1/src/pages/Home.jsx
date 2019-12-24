import React from 'react';
import { Link } from 'react-router-dom';
import MyBatton from '../components/Button';
import './Home.css';
import { Form, Col } from 'react-bootstrap';
import img from '../img/coc.jpg';

export default class Home extends React.Component {
  state = {
    type: 'alco'
  }
  types = { alc: true, noalc: true }
  render() {
    return (
      <div class="home content">
        <div class="header">
          <div class="logo">
            <a href="index.html">
              <span class="coc">COCK</span><span class="teil">TAIL</span>
            </a>
          </div>
          <div class="top-menu">
            <ul>
              <li><a href="/we">О Нас</a></li>
              <li><a href="/login">Вход</a></li>
              <li><a href="/singup">Регистрация</a></li>
            </ul>
          </div>
        </div>
        <div class="parent-home container">
          <div class="block-home container">
            <Col md={10} sm={4}>
              <Col md={4} sm={4}>
                <Form onSubmit = {this.hadleSubmit}>
                  <div class="text">
                    <Form.Label>Выберите категорию желаемого коктейля: </Form.Label>
                  </div>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check class="check" type="checkbox" label=" Алкогольный" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check class="check" type="checkbox" label=" Безалкогольный" />
                  </Form.Group>
                  <Link to="/search" props={this.types}>
                    <MyBatton caption="Поиск" onClick={() => { }}></MyBatton>
                  </Link>
                </Form>
                <Form>
                  <Form.Group class="text" controlId="formSearchName">
                    <div class="text">
                      <Form.Label>  Поиск по названию   </Form.Label>
                    </div>
                  </Form.Group>
                  <div class="text-field contact_form input">
                    <Form.Group controlId="formName">
                      <Form.Control class="searchName" type="name" placeholder="Введите название коктейля" />
                    </Form.Group>
                  </div>
                  <Link to="/search">
                    <MyBatton caption="Поиск" onClick={() => { }}></MyBatton>
                  </Link>
                </Form>
                <Form>

                  <Form.Group controlId="formSearchIngredient">
                    <div class="text">
                      <Form.Label>Поиск по ингредиенту  </Form.Label>
                    </div>
                  </Form.Group>
                  <div class="text-field contact_form input">
                    <Form.Group controlId="formIngredient">
                      <Form.Control class="searchIngredient" type="ingredient" placeholder="Введите ингредиент" />
                    </Form.Group>
                  </div>
                  <Link to="/search">
                    <MyBatton caption="Поиск" onClick={() => { }}></MyBatton>
                  </Link>
                </Form>
                <Form>
                  <Link to="/resultSearch">
                    <MyBatton caption="Все коктейли" onClick={() => { }}></MyBatton>
                  </Link>
                </Form>
              </Col>
            </Col>
            <Col md={10} sm={10}>
              <Col md={4} sm={4}>
                <img
                  width={500}
                  height={300}
                  className="mr-3"
                  src={img}
                  alt="Example of coctails"
                />
              </Col>
              <Col md={4} sm={4}>
                <div class="text">
                  <Form.Label>Хочешь испытать удачу и выпить то, что подготовила тебе судьба?</Form.Label>
                </div>
                <Form>
                  <Link to="/search">
                    <MyBatton caption="Рандом" onClick={() => { }}></MyBatton>
                  </Link>
                </Form>
              </Col>
            </Col>
          </div>
        </div>
      </div >
    )
  }
}

