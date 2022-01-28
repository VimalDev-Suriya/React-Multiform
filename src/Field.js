import React from 'react';

const Field = ({ field, fieldchange, type, value }) => {
  return (
    <div key={field._uid}>
      <label htmlFor={field._uid}>{field.label}</label>
      <input
        type={type}
        onChange={(e) => fieldchange(field._uid, e.target.value)}
        value={value}
        id={field._uid}
        name={field._uid}
      />
    </div>
  );
};

export default Field;
