import React, { useEffect, useState, useRef } from "react";

import style from "./Dropdown.module.scss";

const Dropdown = ({
  placeholder,
  options,
  value = options[0],
  onChange,
  disabled
}) => {
  const node = useRef();

  const [open, setOpen] = useState(false);

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  const handleChange = selectedValue => {
    onChange(selectedValue);
    setOpen(false);
  };

  const onOpen = event => {
    event.preventDefault();
    disabled || setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={node} className={style.dropdown}>
      <button
        className={`${style.button} ${disabled && style.disabled}`}
        onClick={event => onOpen(event)}
      >
        {placeholder} {value}
      </button>
      {open && (
        <ul className={style.list}>
          {options.map((option, key) => (
            <li
              key={key}
              className={style.item}
              onClick={e => handleChange(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
