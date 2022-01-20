import React from 'react';
import {
  Alert,
  Button,
  FormControl,
  InputGroup,
  ListGroup,
} from 'react-bootstrap';

const List = () => {
  const [items, setItems] = React.useState<Array<string>>([]);
  const [item, setItem] = React.useState<string>('');

  const inputRef = React.useRef<HTMLInputElement>(null);

  const [notification, setNotification] = React.useState<string | null>(null);
  const timeoutRef = React.useRef<any>(null);

  function incrementList() {
    setNotification(`Item ${item} adicionado!`);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotification(null);
    }, 1000);

    setItems((items) => [...items, item]);
    setItem('');
    inputRef.current?.focus();
  }

  return (
    <>
      <ListGroup>
        <ListGroup.Item variant="primary">Lista de Itens</ListGroup.Item>
        {items.map((item) => (
          <ListGroup.Item key={item}>{item}</ListGroup.Item>
        ))}
      </ListGroup>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Item"
          aria-label="Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          ref={inputRef}
        />
        <Button variant="primary" onClick={incrementList}>
          Adicionar
        </Button>
      </InputGroup>
      {notification && <Alert variant="success">{notification}</Alert>}
    </>
  );
};

export default List;
