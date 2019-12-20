import React from 'react';
import { Link } from 'react-router-dom';
import MyBatton from '../components/Button';
import './Home.css';
import {Form,  Col, Row, Image} from 'react-bootstrap';
import img from '../img/coc.jpg'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Col md={4} sm={4}>
        <Form>
          <Link to="/login"> Войти
              </Link>
         

        </Form>
        <Form>
          <Form.Label>Впервые на нашем сайте ?</Form.Label>
          <Link to="/login"> Зарегистрироваться
              </Link>

        </Form>
        </Col>
        <Row>
        <Col md={4} sm={4}>
        <Form>
          <Form.Label>Выберите категорию желаемого коктеля </Form.Label>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Алкогольный" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Безлкогольный" />
          </Form.Group>
          <Link to="/resultSearch">
            <MyBatton caption="Поиск" onClick={() => { }}></MyBatton>
          </Link>
        </Form>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Поиск по названию</Form.Label>
            <Form.Control type="name" placeholder="Введите название коктейля" />
          </Form.Group>
          <Link to="/resultSearch">
            <MyBatton caption="Поиск" onClick={() => { }}></MyBatton>
          </Link>
          <Form.Group controlId="formIngredient">
            <Form.Label>Поиск по ингредиенту</Form.Label>
            <Form.Control type="ingredient" placeholder="Введите ингредиент" />
          </Form.Group>
          <Link to="/resultSearch">
            <MyBatton caption="Поиск" onClick={() => { }}></MyBatton>
          </Link>
        </Form>
        </Col>
        <Col md={8} sm={8}>
        <Form.Label>Хочешь испытать удачу и выпить то, что подготовила тебе судьба? жми на кнопку!</Form.Label>
        <Image src={img} thumbnail width="425" height="300"/>
        <Form>
          <Link to="/randomeGame">
            <MyBatton caption="Рандом" onClick={() => { }}></MyBatton>
          </Link>
        </Form>
        </Col>
</Row>
      </div>
    )
  }
}

