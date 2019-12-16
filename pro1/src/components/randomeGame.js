import React from "react";

import { Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

class RandomeGame extends React.Component {
    render() {
    return (
      <div>
      <Image src="C:/Users/kamie/tenz/tenpr/pro/src/resours/coc.jpg/100px250" fluid />
      <Button variant="primary" type="submit">
  Играть !
  </Button>
      </div>
    );
    }
  }
  
  export default RandomeGame;