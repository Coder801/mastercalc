import React from "react";
import PropTypes from "prop-types";
import { withProps } from "recompose";
import { compose } from "lodash/fp";

import { Divider, makeStyles } from "@material-ui/core";
import { TreeView } from "@material-ui/lab";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import RenderDeepTreeHelper from "./RenderDeepTreeHelper";

const useStyles = makeStyles({
  root: {
    padding: 0
  }
});

const SidebarTreeView = ({ classes, options, opens }) => {
  const [expanded, setExpanded] = React.useState(opens);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  return (
    <>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
      >
        {options.map(option => RenderDeepTreeHelper(option))}
        <Divider />
      </TreeView>
    </>
  );
};

SidebarTreeView.propTypes = {
  classes: PropTypes.object,
  options: PropTypes.array,
  opens: PropTypes.array
};

SidebarTreeView.defaultProps = {
  opens: ["1", "5"]
};

export default compose(
  withProps(() => ({
    classes: useStyles()
  }))
)(SidebarTreeView);
