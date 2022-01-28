import React, { useState } from 'react';
import Field from './Field.js';

const Multistepform = ({ formData }) => {
  const [page, setPage] = useState(0);
  const [currentPageData, setCurrentPageData] = useState(formData[page]);
  const [value, setValues] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const fieldchange = ({ id, value }) => {
    console.log(id, value);
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>{currentPageData.label}</h1>
      {currentPageData.fields.map((field) => {
        switch (field.component) {
          case '':
            return '';
          default:
            return (
              <Field
                field={field}
                fieldchange={fieldchange}
                type={field.type}
                value={value[field._uid]}
              />
            );
        }
      })}
    </form>
  );
};
export default Multistepform;
