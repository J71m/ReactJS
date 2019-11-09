import React from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

export default class Catfacts extends React.Component {
    state = {
        catFact: ""
    }

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts/random?animal_type=cat`)
            .then(res => {
                const catFact = res.data.text;
                this.setState({ catFact });
            })
    }

    render() {
        return (
            <Container>
                <h1>Cat facts</h1>
                <p>{this.state.catFact}</p>
            </Container>

        )
    }
}