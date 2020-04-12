import React from "react";
import PropTypes from "prop-types";
import { withProps } from "recompose";
import { compose } from "lodash/fp";
import { Box, Typography, makeStyles } from "@material-ui/core";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    backgroundColor: palette.grey[100],
    borderRadius: 10,
    textAlign: "center"
  },
  icon: {
    color: palette.grey[500],
    fontSize: 100,
    marginBottom: spacing(2)
  },
  label: {
    color: palette.grey[500]
  }
}));

const Empty = ({ label, classes }) => (
  <Box className={classes.root} m={2} padding={10}>
    <PresentToAllIcon className={classes.icon} />
    <Typography variant="h4" className={classes.label}>
      {label}
    </Typography>
  </Box>
);

Empty.propTypes = {
  label: PropTypes.string,
  classes: PropTypes.object
};

Empty.defaultProps = {
  label: "Выберите параметры комнаты"
};

export default compose(
  withProps(() => ({
    classes: useStyles()
  }))
)(Empty);
