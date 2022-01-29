import React from 'react';

const Field = ({ field, fieldchange, type, val }) => {
  
  // console.log('Field', field, fieldchange, type, val);
  return (
    <div key={field._uid}>
      <label htmlFor={field._uid}>{field.label}</label>
      <input
        type={type}
        onInput={(e) => fieldchange(field._uid, e.target.value)}
        value={val}
        id={field._uid}
        name={field._uid}
      />
    </div>
  );
};

export default Field;
