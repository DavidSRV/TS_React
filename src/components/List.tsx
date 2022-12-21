import React from "react";

interface IProps {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

function List({ people }: IProps) {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List" key={person.name}>
          <div className="List-header">
            <img src={person.url} className="List-img" alt="" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note"> {person.note} </p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
}

export default List;
