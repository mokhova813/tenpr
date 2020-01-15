import React from 'react';
import { Link } from 'react-router-dom';
import MyBatton from '../components/Button';
import './Home.css';
import { Form, Col } from 'react-bootstrap';
import img from '../img/coc.jpg';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alc: true, 
      noalc: true,
      name: null,
      ingridient: null
    };
  }

  getBoxLinks() {
    const result = [];

    if (this.state.alc === true) {
      result.push("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic");
    }
    if (this.state.noalc === true) {
      result.push("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");
    }

    return result;
  }
  
  render() {
    return (
      <div className="home content">
        <div className="header">
          <div className="logo">
            <a href="index.html">
              <span className="coc">COCK</span><span className="teil">TAIL</span>
            </a>
          </div>
          <div className="top-menu">
            <ul>
              <li><a href="/we">О Нас</a></li>
              {/* <li><a href="/login">Вход</a></li>
              <li><a href="/singup">Регистрация</a></li> */}
            </ul>
          </div>
        </div>
        <div className="parent-home container">
          <div className="block-home container">
            <Col md={10} sm={4}>
              <Col md={4} sm={4}>
                <Form onSubmit = {this.hadleSubmit}>
                  <div className="text">
                    <Form.Label>Выберите категорию желаемого коктейля: </Form.Label>
                  </div>
                  <Form.Group controlId="formBasicCheckboxAlc">
                    <Form.Check className="check" type="checkbox" label=" Алкогольный" checked={this.state.alc} onChange={(e)=>this.setState({alc:e.target.checked})}/>
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckboxNoalc">
                    <Form.Check className="check" type="checkbox" label=" Безалкогольный" checked={this.state.noalc} onChange={(e)=>this.setState({noalc:e.target.checked})} />
                  </Form.Group>
                  <Link to={{pathname: "/search", state: {links: this.getBoxLinks()}}}>
                    <MyBatton caption="Поиск" onClick={() => { }}></MyBatton>
                  </Link>
                </Form>
                <Form>
                  <Form.Group className="text" controlId="formSearchName">
                    <div className="text">
                      <Form.Label>  Поиск по названию   </Form.Label>
                    </div>
                  </Form.Group>
                  <div className="text-field contact_form input">
                    <Form.Group controlId="formName">
                      <input className="searchName" onChange={(n) => this.setState({name: n.target.value})} type="name" placeholder="Введите название коктейля" />
                    </Form.Group>
                  </div>
                  <Link to={{pathname: "/search", 
                      state: {links: ["https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + this.state.name]}}}>
                    <MyBatton caption="Поиск" onClick={() => { }}></MyBatton>
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
                <div className="text">
                  <Form.Label>Хочешь испытать удачу и выпить то, что подготовила тебе судьба?</Form.Label>
                </div>
                <Form>
                  <Link to={{
                    pathname: "/search", 
                    state: {links: ["https://www.thecocktaildb.com/api/json/v1/1/random.php"]}
                    }}>
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

