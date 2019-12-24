import React from 'react';
import { Form, Col } from 'react-bootstrap';
import img from '../img/podrugki.jpg';
import "./we.css";


export default class We extends React.Component {
    render() {
        return (
            <div class="home content">
                <div class="header">
                    <div class="logo">
                        <a href="index.html">
                            <span class="coc">COCK</span><span class="teil">TAIL</span>
                        </a>
                    </div>
                </div>
                <div class="parent-home container">
                    <div class="block-home container">
                        <Col md={10} sm={4}>
                            <Col md={4} sm={4}>
                                <Form>
                                    <div class="text">
                                        <Form.Label>
                                            Решил организовать вечеринку с коктейлями, но не знаете, что конкретно подать на стол?
                                             Или же захотел попробовать что-нибудь новое и необычное, но ты совсем не знаешь, что выбрать? А может ты решил сам приготовить себе коктейль, но забыл из каких ингредиентов он состоит? Тогда тебе сюда!
                                             <br></br>
                                        </Form.Label>
                                        <br></br>
                                        <Form.Label>
                                            Сайт COCTAIL поможет тебе определиться с выбором напитка. В огромной базе коктейлей ты без труда сможешь отыскать рецепт напитка по его названию. Поиск по ингредиенту покажет коктейли, в которых присутствует данный ингредиент. Ну а если ты решил вести здоровый образ жизни, то, добавив "галочку" в графе "безалкогольный", ты получишь список всех подходящих по этому фильтру коктейлей.
                                            <br></br>
                                        </Form.Label>
                                        <br></br>
                                        <Form.Label>
                                            Для тех, кто решил рискнуть и готов выпить то, что приготовила ему судьба, на нашем сайте есть кнопка "Рандом", которая позволяет сайту самому выбрать тебе напиток. Удачи!
                                    </Form.Label>
                                    </div>
                                </Form>
                            </Col>

                            <div class="text_creaters">
                                <br></br>
                                <Form.Label>Создатели сия чуда:</Form.Label>
                            </div>
                            <Col md={4} sm={4}>
                                <img
                                    width={400}
                                    height={300}
                                    className="mr-3"
                                    src={img}
                                    alt="Example of coctails"
                                />
                            </Col>
                        </Col>
                    </div>
                </div>
            </div>
        );
    }
}
