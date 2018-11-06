import React from "react";
import PropTypes from "prop-types";

const Input = ({ label, text, type, id, value, onChange }) => (
  <div className="form-group">
    <label>
      {label}
      <input
        type={type}
        className="form-control"
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onChange}
        required
      />
    </label>
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;
