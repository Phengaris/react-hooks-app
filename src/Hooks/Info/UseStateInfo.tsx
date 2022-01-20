import React from 'react';
import { Card, Row } from 'react-bootstrap';

const UseStateInfo = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>.useState</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Hooks</Card.Subtitle>
        <Card.Text>
          <Row>
            <strong>Quando utilizar?</strong>
            <span>Quando há necessidade de sincronizar um estado.</span>
          </Row>
          <Row>
            <strong>O que é o .useState?</strong>
            <span>
              É um array com o get e o set do valor, o valor reage ao set e é
              isso que faz o React ter reatividade para renderizar novamente!
            </span>
          </Row>
          <Row>
            <strong>Como utilizar?</strong>
            <span>
              const [contador, setContador] = React.useState{'<number>'}(0);
            </span>
            <span>
              Por padrão o segundo valor do array sempre é inicializado como set
            </span>
            <span>A tipagem do estado é opcional</span>
            <span>
              Precisa ser setado dentro de um evento, pois sempre renderiza os
              componentes que o utilizaram
            </span>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UseStateInfo;
