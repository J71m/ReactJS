import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function InputEx(props) {
    const [text, setText] = useState(0)

    const sendData = () => {
        props.parentCallback(text);
    }

    return (
        <Container>
            <Form>
                <Form.Group controlId="input1">
                    <Form.Label>Insert text</Form.Label>
                    <Form.Control type="text" placeholder="Enter text" name="text" onChange={e => setText(e.target.value)} />
                    <p>Component state: {text}</p>
                </Form.Group>
                <Button variant="primary" onClick={sendData}>
                    Submit
            </Button>
            </Form>
        </Container>
    )
}

export default InputEx;
