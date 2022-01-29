import React, { useState, useEffect } from 'react';
import Field from './Field.js';

const Multistepform = ({ formData }) => {
  const [page, setPage] = useState(0);
  const [currentPageData, setCurrentPageData] = useState(formData[page]);
  const [values, setValues] = useState({});

  useEffect(() => {
    let upcomingPageData = formData[page];
    setCurrentPageData(upcomingPageData);
    // console.log(upcomingPageData.fields);

    setValues((currentValues) => {
      const newValues = upcomingPageData.fields.reduce((acc, field) => {
        if (field.component === 'field_group') {
          for (let subfields of field.fields) {
            acc[subfields._uid] = '';
          }
        } else {
          acc[field._uid] = '';
        }
        return acc;
      }, {});
      // console.log('newValues', newValues,currentValues);
      return Object.assign({}, newValues, currentValues);
    });
  }, [page, formData]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  // console.log('Values', values,currentPageData);
  const fieldchange = (id, value) => {
    setValues((currentValues) => {
      currentValues[id] = value;
      return currentValues;
    });
    setCurrentPageData((currentPageData) => {
      return Object.assign({}, currentPageData);
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>{currentPageData.label}</h1>
      {currentPageData.fields.map((field) => {
        switch (field.component) {
          case 'field_group':
            return '';
          default:
            return (
              <Field
                key={field._uid}
                field={field}
                fieldchange={fieldchange}
                type={field.type}
                val={values[field._uid]}
              />
            );
        }
      })}
      {page > 0 && (
        <button onClick={() => setPage((prevPage) => prevPage - 1)}>
          Prev
        </button>
      )}
      &nbsp;
      {page < formData.length - 1 && (
        <button onClick={() => setPage((prevPage) => prevPage + 1)}>
          Next
        </button>
      )}
    </form>
  );
};
export default Multistepform;
