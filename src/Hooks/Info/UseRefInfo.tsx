import React from 'react';
import { Card, Row } from 'react-bootstrap';

const UseRefInfo = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>.useRef</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Hooks</Card.Subtitle>
        <Card.Text>
          <Row>
            <strong>Quando utilizar?</strong>
            <span>
              Para guardarmos valores que irão persistir durante todo o ciclo de
              vida do elemento. Geralmente usamos o mesmo para nos referirmos a
              um elemento do DOM, sem precisarmos utilizar o querySelector ou
              similar.
            </span>
          </Row>
          <Row>
            <strong>O que é o .useRef?</strong>
            <span>O useRef retorna um objeto com a propriedade current.</span>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UseRefInfo;
