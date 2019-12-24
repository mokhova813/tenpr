import React from "react";
import API from "../components/API";
import { Form, Col } from 'react-bootstrap';

export default class RandomeGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: {
                s1: [],
                s2: []
            }

        }
    }
    data = { alc: true, noalc: true }

    componentDidMount() {
        API.post('/api/search', this.data).then(res => {
            let drinks = res.data;
            this.setState({ drinks })
        })
    }
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
                                        {this.state.drinks.s1.map(el => (<div>{el.strDrink}</div>))}
                {this.state.drinks.s2.map(el => (<div>{el.strDrink}</div>))}
                                        </Form.Label>
                                        
                                    </div>
                                </Form>
                            </Col>

                        
                        </Col>
                    </div>
                </div>
            </div>
        );
    }
}