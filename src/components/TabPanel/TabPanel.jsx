import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

function TabPanel({ children, value, index, ...other }) {
  return (
    <Box role="tabpanel" hidden={value !== index} {...other}>
      {children}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

export default TabPanel;
