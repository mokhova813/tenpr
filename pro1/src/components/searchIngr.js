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
  <Form.Group controlId="searchByName">
    <Form.Label>Поиск по названию</Form.Label>
    <Form.Control type="search" placeholder="Enter name" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit">
    Поиск
  </Button>

  <Form.Group controlId="searchByIngridient">
    <Form.Label>Поиск по ингридиенту</Form.Label>
    <Form.Control type="search" placeholder="Enter Ingridients" />
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