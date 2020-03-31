import React, { cloneElement } from "react";
import PropTypes from "prop-types";

import { MenuItem, Select, makeStyles } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(() => ({
  root: {
    border: "1px solid #b3b3b3",
    boxShadow: "none",
    background: "linear-gradient(180deg, #f1f1f0 0%, #e1e1e1 100%)",
    transition: "all .3s ease",
    borderRadius: 4,
    "&:hover": {
      background:
        "linear-gradient(0deg, rgba(255, 255, 255, 0.52), rgba(255, 255, 255, 0.52)), linear-gradient(180deg, #F1F1F0 0%, #E1E1E1 100%)",
      boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
    },
    "&:focus": {
      borderRadius: 4
    }
  },
  select: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: "13px !important",
    paddingRight: "40px !important"
  },
  icon: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none"
  }
}));

const CustomSelect = ({ value, title, options, className, onChange }) => {
  const classes = useStyles();

  const handleChange = event => {
    onChange(event.target.value);
  };

  const findOption = (value, options) => {
    const result = options.find(item => item.value === value);
    return result ? result.label : false;
  };

  return (
    <Select
      value={value}
      onChange={handleChange}
      className={className}
      classes={classes}
      renderValue={value => findOption(value, options) || title}
      defaultValue={title}
      IconComponent={() => <ExpandMoreIcon className={classes.icon} />}
      disableUnderline
      displayEmpty
    >
      {options.map(({ value, label, component = <MenuItem /> }, key) =>
        cloneElement(component, {
          children: label,
          value,
          key
        })
      )}
    </Select>
  );
};

CustomSelect.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  renderValue: PropTypes.func,
  className: PropTypes.any
};

export default CustomSelect;
