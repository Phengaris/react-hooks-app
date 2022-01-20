import React from 'react';
import { Card, Row } from 'react-bootstrap';

const UseEffectInfo = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>.useEffect</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Hooks</Card.Subtitle>
        <Card.Text>
          <Row>
            <strong>Quando utilizar?</strong>
            <span>
              Para definir um callback que será executado durante certos
              momentos do ciclo de vida do componente.
            </span>
          </Row>
          <Row>
            <strong>Como utilizar?</strong>
            <span>React.useEffect(() {'=> {//alguma coisa}'}, []);</span>
            <span>
              O array de parametro define as dependências de quando fazer o
              callback, o array vazio quer dizer que deve fazer só na primeira
              renderização do código.
            </span>
            <span>
              O warning ocorre apenas para avisar que aquele estado não está
              definido como dependencia do callback.
            </span>
            <span>Dá pra retornar um callback com uma função.</span>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UseEffectInfo;
