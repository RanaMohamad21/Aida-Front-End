/* eslint-disable react/prop-types */

import PropTypes from "prop-types";

// This reusable component consistes of a shelf name and the
// children represents the shelf content
function Shelf({ shelfName, styles, children }) {
  return (
    <div className={`flex flex-col justify-between md:mr-4`}>
      <div className="p-2 bg-teal inline-block max-w-max text-white ml-4 ">
        {shelfName}
      </div>
      <div className={`${styles} `}>
        
        {children}
      </div>
    </div>
  );
}

Shelf.propTypes = {};

export default Shelf;
