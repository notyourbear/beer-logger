import React from "react";
import PropTypes from "prop-types";

const OL = ({ listItems }) => (
  <ol className="list">
    {listItems.map((li, i) => (
      <li key={li._id}>
        <div class="col-md-4 d-inline-block">{li.user.name}</div>
        <div class="col-md-4 d-inline-block">{li.beer.name}</div>
        <div class="col-md-4 d-inline-block">{li.location.name}</div>
      </li>
    ))}
  </ol>
);

// OL.propTypes = {
//   label: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   value: PropTypes.bool.isRequired,
//   onChange: PropTypes.func.isRequired
// };

export default OL;
