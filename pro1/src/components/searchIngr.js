import React from 'react';
import Form from 'react-bootstrap/Form'
import { Button} from 'react-bootstrap';



class SearchIngr extends React.Component{
    render(){
        return(
            <div>
                <Form>
                <Form.Label>Выберите категорию</Form.Label>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Алкогольный" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Безлкогольный" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Поиск
  </Button>
</Form>
                <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Поиск по названию</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit">
    Поиск
  </Button>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Поиск по ингридиенту</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
   Поиск
  </Button>
</Form>

                </div>
        )
    }
}

export default SearchIngr;