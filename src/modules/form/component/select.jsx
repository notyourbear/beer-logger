import React from "react";
import PropTypes from "prop-types";

const Select = ({ id, text, options, value, onChange }) => (
  <div className="form-group">
    <label>
      {text}
      <select id={id} value={value} onChange={onChange}>
        {options.map(option => {
          return (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          );
        })}
      </select>
    </label>
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
