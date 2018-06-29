import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  id,
  name,
  type,
  label,
  info,
  onChange,
  placeholder,
  value,
  error,
  ...otherProps
}) => (
  <label htmlFor={name}>
    <span>{label}</span>
    <div className="input-field">
      <input
        className={error ? 'error' : ''}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
        {...otherProps}
        />
        <div className="info">{info}</div>
    </div>
  </label>
);

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
};

export default TextInput;
