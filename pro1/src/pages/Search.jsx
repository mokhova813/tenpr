import React from 'react';
import { Form, Col } from 'react-bootstrap';


export default class Search extends React.Component {
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
                                             Извините, не получилос!(((
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

