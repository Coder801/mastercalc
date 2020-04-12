import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, makeStyles } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {},
  info: {
    padding: `${spacing(1)}px ${spacing(2)}px`,
    backgroundColor: palette.common.white,
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center"
  },
  label: {
    color: palette.grey[600],
    marginBottom: spacing(1)
  },
  icon: {
    paddingLeft: spacing(2),
    color: palette.grey[600]
  }
}));

const ProviderInfo = ({ image, label }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.label} variant="body1">
        {label}
      </Typography>
      <Box className={classes.info}>
        <img src={image} alt="" />
        <HelpOutlineIcon className={classes.icon} />
      </Box>
    </Box>
  );
};

ProviderInfo.propTypes = {
  label: PropTypes.string,
  image: PropTypes.string
};

ProviderInfo.defaultProps = {
  label: "Поставщик"
};

export default ProviderInfo;
