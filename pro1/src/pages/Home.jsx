import React from 'react';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import MyBatton from '../components/Button';
import './Home.css';



export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <Link to="/login"> Войти
              </Link>
        </Form>
        <Form>
          <Form.Label>Впервые на нашем сайте ?</Form.Label>
          <Link to="/login"> Зарегистрироваться
              </Link>
        </Form>
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
        <Form.Label>Хочешь испытать удачу и выпить то, что подготовила тебе судьба? жми на кнопку!</Form.Label>
        <Form>

          <Link to="/randomeGame">
            <MyBatton caption="Рандом" onClick={() => { }}></MyBatton>
          </Link>
        </Form>

      </div>
    )
  }
}

