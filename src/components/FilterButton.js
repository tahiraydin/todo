import React from "react";

const FilterButton = (props) => {
  return (
    <div className="footer">
      <div className="footer-button">
        <button
          type="button"
          aria-pressed={props.isPressed}
          onClick={() => props.setFilter(props.name)}
        >
          <span className="visually-hidden">Show</span>
          <span>{props.name}</span>
          <span className="visually-hidden">tasks</span>
        </button>
      </div>
    </div>
  );
};

export default FilterButton;