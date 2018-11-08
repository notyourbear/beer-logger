import React from "react";
import PropTypes from "prop-types";

const Input = ({ label, text, type, id, value, onChange }) => (
  <div className="input-group mb-3">
    <div className="input-group-addon">
      <label className="input-group-text mb-0" htmlFor={id}>
        {label}
      </label>
    </div>
    <input
      className="form-control"
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onChange}
      required
    />
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
