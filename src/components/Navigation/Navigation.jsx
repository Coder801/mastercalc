import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ mixins, palette }) => ({
  root: {
    paddingLeft: 22,
    display: "flex"
  },
  icon: {
    position: "relative",
    top: 1,
    marginRight: 10
  },
  item: {
    paddingLeft: 20,
    paddingRight: 20,
    color: palette.common.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: ".3s ease",
    textDecoration: "none",
    ...mixins.toolbar,
    "&:hover, &.active": {
      backgroundColor: palette.grey[900],
      color: palette.primary.main
    }
  }
}));

const Navigation = ({ routes, location }) => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      {routes.map(({ link, label, icon }, key) => {
        const active = new RegExp(link).test(location.pathname) ? "active" : "";

        return (
          <NavLink key={key} className={clsx(classes.item, active)} to={link} title={label}>
            <img className={classes.icon} src={icon} alt="" />
            <Typography variant="body1">{label}</Typography>
          </NavLink>
        );
      })}
    </nav>
  );
};

Navigation.propTypes = {
  routes: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired
};

export default Navigation;
