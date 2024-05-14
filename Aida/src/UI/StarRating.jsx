import { useState } from "react";
import PropTypes from "prop-types";
import Star from "./Star";
const containerStyle = {
  display: "flex",
  alignItems: "center" /* aligns the items vertically*/,
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

StarRating.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  messages: PropTypes.string,
  className: PropTypes.string,
  onSetRating: PropTypes.func,
};
function StarRating({
  maxRating = 5,
  color = "#25b5ba",
  size = 38,
  className,
  disable = false,
  defaultRating,
  onSetRating,
}) {
  // We can set a default value while destructuring the props object
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);
  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }
  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size * 0.5}px`,
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {/* From creates an array of the specified length, on which we can map over to do a certain thing */}
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={disable ? "" : () => handleRating(i + 1)}
            full={tempRating ? tempRating >= 1 + i : rating >= 1 + i}
            onHoverIn={disable ? "" : () => setTempRating(i + 1)}
            onHoverOut={disable ? "" : () => setTempRating(0)}
            color={color}
            size={size}
            disabled={disable}
          />
        ))}
      </div>
      {/* <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p> */}
    </div>
  );
}

export default StarRating;
