import React from 'react';
import { Button } from 'react-bootstrap';

const CountButton = () => {
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    console.log('Apenas quando renderiza');
  }, []);

  React.useEffect(() => {
    console.log('Apenas quando renderiza', count); //gera uma warning de dependencia
  }, []);

  React.useEffect(() => {
    console.log('Toda vez que atualiza o contar', count);
  }, [count]);

  return (
    <Button variant="info" onClick={() => setCount(count + 1)}>
      Clicado {count}x
    </Button>
  );
};

export default CountButton;
