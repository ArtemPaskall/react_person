import React from 'react';
import './Person.scss';

const Person = (props) => {
  const partnerType = props.person.sex === 'm'
    ? 'wife\'s'
    : 'husband\'s';

  return (
    <>
      <section className="Person">
        <h2 className="Person__name">
          My name is
          {props.person.name}
        </h2>
        {props.person.age && (
          <p className="Person__age">
            {`I am ${props.person.age}`}
          </p>
        )
        }
        <p className="Person__partner">
          {props.person.isMarried
            ? `My ${partnerType} name is ${props.person.partnerName}`
            : `I am not married`}
        </p>
      </section>
    </>
  );
};

export default Person;