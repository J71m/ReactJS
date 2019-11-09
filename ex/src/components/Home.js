import React from 'react';
import InputEx from './Input-ex';
import InputEx2 from './Input-ex2';
import { Container } from 'react-bootstrap';

export default class Catfacts extends React.Component {
    state = {
        text: ""
    }

    callbackFunction = (childData) => {
        this.setState({ text: childData })
    }

    render() {
        let input2

        if (this.state.text === "") {
            input2 = null
        } else {
            input2 = <InputEx2 data={this.state.text} />
        }

        return (
            <Container>
                <h1>Home page</h1>
                <div className="mt-4">
                    <InputEx parentCallback={this.callbackFunction} />
                    <br />
                    {input2}
                </div>
            </Container>
        )
    }
}
