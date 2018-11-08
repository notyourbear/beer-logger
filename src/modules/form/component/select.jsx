import React from "react";
import PropTypes from "prop-types";

const Select = ({ id, text, options, value, onChange }) => (
  <div className="input-group mb-3">
    <div className="input-group-addon">
      <label className="input-group-text mb-0" htmlFor={id}>
        {text}
      </label>
    </div>
    <select
      className="form-control custom-select"
      id={id}
      value={value}
      onChange={onChange}
    >
      {options.map(option => {
        return (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        );
      })}
    </select>
  </div>
);

Select.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Select;
