import React from "react";

const Select = ({ methods, setSelect }) => {
  return (
    <select
      name="method"
      id="method"
      defaultValue="Method Select"
      onChange={(event) => setSelect(event.target.value)}
    >
      <option disabled="disabled" value="Method Select">
        Method Select
      </option>
      {methods.map((e) => (
        <option key={e.method} value={e.method}>
          {e.method}
        </option>
      ))}
    </select>
  );
};

export default Select;
