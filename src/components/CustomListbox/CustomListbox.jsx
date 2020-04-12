import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import { Popper, Typography, Button, Fade, ClickAwayListener, Grid, makeStyles } from "@material-ui/core";
import ConditionWrapper from "../../helpers/conditionWrapper";

const useStyles = makeStyles(({ palette, spacing, breakpoints }) => {
  const size = {
    sm: 4,
    xs: 3
  };

  return {
    button: {
      width: "100%",
      transition: "all .3s ease",
      boxShadow: "none"
    },
    popper: {
      minWidth: 360,
      background: palette.common.white,
      border: "1px solid #D7D7D7",
      boxShadow: "0px 4px 28px rgba(0, 0, 0, 0.13)",
      borderRadius: 4,
      [breakpoints.down("xs")]: {
        minWidth: "100%",
        width: "90vw"
      }
    },
    header: {
      justifyContent: "flex-start",
      padding: spacing(size.sm),
      paddingBottom: 0,
      [breakpoints.down("xs")]: {
        padding: spacing(size.xs)
      }
    },
    content: {
      justifyContent: "center",
      padding: spacing(size.sm),
      [breakpoints.down("xs")]: {
        padding: spacing(size.xs)
      }
    },
    footer: {
      justifyContent: "flex-end",
      border: `1px solid ${palette.grey[100]}`,
      padding: `${spacing(2)}px ${spacing(size.sm)}px`,
      [breakpoints.down("xs")]: {
        padding: `${spacing(1)}px ${spacing(size.xs)}px`
      }
    }
  };
});

const wrapPlaceholder = (placeholder, value) =>
  placeholder.replace(/\{value\}/, ` <strong>&nbsp;${value}&nbsp;</strong> `);

const CustomListbox = ({ placeholder, value, title, children, onSave, className, isClickAway }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
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
          <ConditionWrapper
            condition={isClickAway}
            wrap={children => <ClickAwayListener onClickAway={handleClickAway}>{children}</ClickAwayListener>}
          >
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
          </ConditionWrapper>
        )}
      </Popper>
    </div>
  );
};

CustomListbox.defaultProps = {
  isClickAway: true,
  onSave: () => {}
};

CustomListbox.propTypes = {
  value: PropTypes.any,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  onSave: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.string,
  isClickAway: PropTypes.bool
};

export default CustomListbox;
