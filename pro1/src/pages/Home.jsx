import React from 'react';
import { Link } from 'react-router-dom';
import MyBatton from '../components/Button';
import './Home.css';
import { Form, Col, Row, Image } from 'react-bootstrap';
import img from '../img/coc.jpg'

export default class Home extends React.Component {
  render() {
    return (
      <div class="home content">
        <div class="header">
          <div class="logo">
            <a href="index.html">
              <span class="coc">COC</span><span class="teil">TAIL</span>
            </a>
          </div>
          <div class="top-menu">
            <ul>
              <li><a href="/login">Вход</a></li>
              <li><a href="/SingUp">Регистрация</a></li>
            </ul>
          </div>
        </div>

        <div class="parent-home container">
          <div class="block-home container">
            <Col md={10} sm={4}>
              <Col md={4} sm={4}>
                <Form>
                <div class="text">
                  <Form.Label>Выберите категорию желаемого коктейля: </Form.Label>
                </div>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check class = "check" type="checkbox" label=" Алкогольный" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check class = "check" type="checkbox" label=" Безалкогольный" />
                  </Form.Group>
                  <Link to="/resultSearch">
                    <MyBatton  caption="Поиск" onClick={() => { }}></MyBatton>
                  </Link>
                </Form>
                <Form>
                  <Form.Group class = "text" controlId="formSearchName">
                  <div class="text">
                    <Form.Label>  Поиск по названию   </Form.Label>
                    </div>
                  </Form.Group>
                  <Form.Group controlId="formName">
                  <Form.Control class = "searchName" type="name"  placeholder="Введите название коктейля" />
                  </Form.Group>
                  <Link to="/resultSearch">
                    <MyBatton  caption="Поиск" onClick={() => { }}></MyBatton>
                  </Link>
                </Form>
                <Form>
                  <Form.Group controlId="formSearchIngredient">
                  <div class="text">
                    <Form.Label>Поиск по ингредиенту  </Form.Label>
                    </div>
                  </Form.Group>
                  <Form.Group controlId="formIngredient">
                  <Form.Control class = "searchIngredient" type="ingredient" placeholder="Введите ингредиент" />
                  </Form.Group>
                  <Link to="/resultSearch">
                    <MyBatton   caption="Поиск" onClick={() => { }}></MyBatton>
                  </Link>
                </Form>
              </Col>

                </Col>
\
                <Col md={10} sm={10}>
                
                <Col md={4} sm={4}>
                  <Image class = "img" src={img} thumbnail />
                </Col>
                <Col md={4} sm={4}>
                <div class="text">
                <Form.Label>Хочешь испытать удачу и выпить то, что подготовила тебе судьба? жми на кнопку!</Form.Label>
                </div>
                  <Form>
                    <Link to="/randomeGame">
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

