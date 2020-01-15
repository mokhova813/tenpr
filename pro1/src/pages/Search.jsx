import React from 'react';
import { Form, Col } from 'react-bootstrap';


export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: []
        };
    }

    fetchData(url) {
        fetch(url).then((response) => response.json())
        .then((data) => {
            console.log(data);
            
            this.setState({drinks: this.state.drinks.concat(data.drinks)});
        });
    }


    componentDidMount() {
        const {links} = this.props.location.state;  
        console.log(links);

        links.forEach(link => this.fetchData(link));
    }

    render() {
        console.log("Drinks: ", this.state.drinks);
        let drinks = this.state.drinks.map((d) => (
        <div key={d.idDrink}>
            <div className="text">
                <Form.Label>{d.strDrink}</Form.Label>
            </div>
            <img
                  width={100}
                  height={100}
                  className="mr-3"
                  src={d.strDrinkThumb}
                />
        </div>));

        return (
            <div className="home content">
                <div className="header">
                    <div className="logo">
                        <a href="index.html">
                            <span className="coc">COCK</span><span className="teil">TAIL</span>
                        </a>
                    </div>
                </div>
                <div className="parent-home container">
                    <div className="block-home container">
                        <Col md={10} sm={4}>
                            {drinks}
                            {/* <Col md={4} sm={4}>
                                <Form>
                                    <div className="text">
                                        <Form.Label>
                                             Извините, не получилос!(((
                                        </Form.Label>
                                    </div>
                                </Form>
                            </Col> */}
                        </Col>
                    </div>
                </div>
            </div>
        );
    }
}

