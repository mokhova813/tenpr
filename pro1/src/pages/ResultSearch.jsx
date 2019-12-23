import React from "react";
import API from "../components/API";


export default class RandomeGame extends React.Component {
    constructor(props){
        super(props)
        
    }
    data = {alc: true, noalc: true}
    state = {
        drinks: {
            s1: [],
            s2: []
        }
    }
    componentDidMount(){
        API.post('/api/search', this.data).then(res => {
            let drinks = res.data;
            
            this.setState({drinks})
        })
    }
    render() {
    return (
      <div>
            {this.state.drinks.s1.map(el => (<div>{el.strDrink}</div>))}

            {this.state.drinks.s2.map(el => (<div>{el.strDrink}</div>))}
      </div>
    );
    }
  }