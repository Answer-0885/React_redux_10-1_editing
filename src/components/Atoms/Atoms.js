import React from "react";
import PropTypes from "prop-types";
import { nanoid } from 'nanoid'


export const ItemList = ({ id, className, children }) => {
  return (
    <React.Fragment>
      <ItemList id={id} className={className + "-item item-list"} key={nanoid()}>
        <div className={className + "-item-wrap"} key={nanoid()}>
          {React.Children.map(children, (child) => {
            return child;
          })}
        </div>
      </ItemList>
    </React.Fragment>
  );
};

export const CardTitle = ({ title }) => {
  return (
    <>
      <h5 className="card-title">{title}</h5>
    </>
  );
};
CardTitle.propTypes = {
  title: PropTypes.string,
};

export const Button = React.forwardRef((props, ref) => {
  return (
      <button
        ref={ref}
        id={props.id}
        className={props.type}
        onClick={
          props.clickHandler
            ? () => props.clickHandler(props.id)
            : props.onClick
        }
        style={props.btnStyle}
      >
        {props.text}
      </button>
  );
});

/**Текст */

export const Text = React.forwardRef((data, ref) => {
  if (!data) {
    return null;
  }
  return (
    <React.Fragment>
      <span ref={ref} className={data.className}>
        {data.text}
      </span>
    </React.Fragment>
  );
});

/**Поле ввода в форме поиска */

export const Input = React.forwardRef((data, ref) => {

  return (
    <React.Fragment>
      <div className="input-wrapper">
        <input
          ref={ref}
          className={data.className + "__input"}
          type={data.type}
          name={data.name}
          value={data.value}
          onChange={data.onChange}
        />
        <label className="label" name={data.label}>
          {data.label}
        </label>
      </div>
    </React.Fragment>
  );
});
