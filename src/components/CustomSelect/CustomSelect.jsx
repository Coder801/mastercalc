import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import variables from "../../assets/styles/variables.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  root: {
    border: "1px solid #b3b3b3",
    boxShadow: "inset 0 2px 0 rgba(255, 255, 255, .7)",
    background: "linear-gradient(180deg, #f1f1f0 0%, #e1e1e1 100%)",
    borderRadius: 4,
    "&:focus": {
      borderRadius: 4
    }
  },
  select: ({ showArrow }) => ({
    position: "relative",
    fontFamily: variables.secondaryFont,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: "13px !important",
    paddingRight: `${showArrow ? "40px" : "13px"} !important`,
    fontSize: 14,
    color: variables.blackColor
  }),
  icon: {
    position: "relative",
    right: 34,
    top: "40%",
    transform: "translateY(-50%)",
    pointerEvents: "none"
  }
});

const CustomSelect = ({ value, data, className, onChange, showArrow }) => {
  const classes = useStyles({ showArrow });
  const { label, options, counting = "" } = data;

  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <Select
      value={value}
      onChange={handleChange}
      className={className}
      classes={classes}
      renderValue={value => (
        <span>
          {label} <strong>{value}</strong> {counting}
        </span>
      )}
      IconComponent={() => (showArrow ? <ExpandMoreIcon className={classes.icon} /> : null)}
      disableUnderline
    >
      <MenuItem disabled>
        <em>{label}</em>
      </MenuItem>
      {options.map((option, key) => (
        <MenuItem key={key} value={option}>
          {`${option} ${counting}`}
        </MenuItem>
      ))}
    </Select>
  );
};

CustomSelect.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  data: PropTypes.object,
  onChange: PropTypes.func,
  showArrow: PropTypes.bool,
  renderValue: PropTypes.func,
  className: PropTypes.string
};

export default CustomSelect;
