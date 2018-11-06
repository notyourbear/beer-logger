import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ label, text, id, value, onChange }) => (
  <div className="form-group">
    <label>
      {label}
      <input
        id={id}
        name={text}
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
    </label>
  </div>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
