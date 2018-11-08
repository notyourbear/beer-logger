import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ label, text, id, value, onChange }) => (
  <div className="input-group">
    <div className="input-group-addon btn-block mb-3">
      <label className="input-group-text mb-0" htmlFor={id}>
        {label}
      </label>
    </div>
    <div className="input-group-addon mb-3">
      <input
        id={id}
        name={text}
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
    </div>
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
