import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import { Popper, Typography, Button, Fade, ClickAwayListener, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ palette }) => ({
  button: {
    width: "100%",
    transition: "all .3s ease",
    boxShadow: "none"
  },
  popper: {
    width: 350,
    background: palette.common.white,
    border: "1px solid #D7D7D7",
    boxSizing: "borderBox",
    boxShadow: "0px 4px 28px rgba(0, 0, 0, 0.13)",
    borderRadius: 4
  },
  header: {
    justifyContent: "flex-start",
    padding: "40px 40px 0"
  },
  content: {
    justifyContent: "center",
    padding: "30px 40px 40px"
  },
  footer: {
    justifyContent: "flex-end",
    border: "1px solid #F1F1F0",
    padding: "15px 40px"
  }
}));

const wrapPlaceholder = (placeholder, value) =>
  placeholder.replace(/\{value\}/, ` <strong>&nbsp;${value}&nbsp;</strong> `);

const CustomListbox = ({ placeholder, value, title, children, onSave, className }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    console.log("Away");

    setOpen(false);
  };

  const handleSave = () => {
    onSave();
    setOpen(false);
  };

  return (
    <div className={className}>
      <Button className={classes.button} variant="contained" color="secondary" onClick={event => handleClick(event)}>
        {ReactHtmlParser(wrapPlaceholder(placeholder, value))}
      </Button>

      <Popper open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClickAway}>
            <Fade {...TransitionProps} timeout={350}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="stretch"
                className={classes.popper}
                spacing={2}
              >
                <Grid container className={classes.header}>
                  <Typography variant="h5">{title}</Typography>
                </Grid>
                <Grid container className={classes.content}>
                  {children}
                </Grid>
                <Grid container className={classes.footer}>
                  <Button variant="contained" color="primary" onClick={handleSave}>
                    Сохранить
                  </Button>
                </Grid>
              </Grid>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </div>
  );
};

CustomListbox.propTypes = {
  value: PropTypes.any,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  onSave: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.string
};

export default CustomListbox;
