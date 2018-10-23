import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 2em;
  width: 33%;
`;

/*const buttons = [
    {
        title: 'Příjem',
        id: 'income',
        // processFunction: () => ()
    },
    {
        title: 'Výdaj',
        id: 'expense'
    },
    {
        title: 'Vše',
        id: 'all'
    }
];*/

const FilterButton = ({ item: { title, id }, func }) => (
  <Button
    id={id}
    onClick={id => {
      func(id.target.id);
    }}
  >
    {title}
  </Button>
);

const Filter = ({ funkce, buttons }) => (
  <div>
    {buttons.map(button => (
      <FilterButton key={button.id} item={button} func={funkce} />
    ))}
  </div>
);

export default Filter;
