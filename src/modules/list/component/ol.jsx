import React from "react";
import PropTypes from "prop-types";

const OL = ({ listItems }) => (
  <ol className="list">{listItems.map(li => <li> item </li>)}</ol>
);

// OL.propTypes = {
//   label: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   value: PropTypes.bool.isRequired,
//   onChange: PropTypes.func.isRequired
// };

export default OL;
