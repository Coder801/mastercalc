import React from "react";
import PropTypes from "prop-types";
import { withProps } from "recompose";
import { compose } from "lodash/fp";
import { makeStyles } from "@material-ui/core";

import { TreeItem } from "@material-ui/lab";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    padding: 0,
    "&[aria-expanded] > $content > $label": {
      color: palette.info.main
    }
  },
  content: {
    flexDirection: "row-reverse",
    padding: "10px 0"
  },
  label: {
    backgroundColor: "transparent !important",
    color: palette.grey[900]
  },
  selected: {
    "& > $content > $label": {
      color: palette.primary.main
    }
  }
}));

const StyledTreeItem = ({ label, classes, ...other }) => (
  <TreeItem
    label={label}
    classes={{
      root: classes.root,
      content: classes.content,
      selected: classes.selected,
      label: classes.label
    }}
    {...other}
  />
);

StyledTreeItem.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string
};

export default compose(
  withProps(() => ({
    classes: useStyles()
  }))
)(StyledTreeItem);
