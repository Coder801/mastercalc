import React from "react";
import { makeStyles } from "@material-ui/core";

import { Divider } from "@material-ui/core";
import { TreeItem, TreeView } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useTreeViewStyles = makeStyles({
  root: {
    padding: "0"
  }
});

const useTreeItemStyles = makeStyles({
  root: {
    padding: 0,
    "&[aria-expanded] > $content > $label": {
      color: "#2967BA"
    }
  },

  content: {
    flexDirection: "row-reverse",
    padding: "10px 0"
  },
  expanded: {},
  label: {
    backgroundColor: "transparent !important",
    color: "#111"
  },
  selected: {
    "& > $content > $label": {
      color: "#F2A000"
    }
  },
  group: {}
});

const StyledTreeItem = props => {
  const classes = useTreeItemStyles();
  const { label, ...other } = props;

  return (
    <TreeItem
      label={label}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label
      }}
      {...other}
    />
  );
};

const SidebarTreeView = () => {
  const classesTreeView = useTreeViewStyles();

  const [expanded, setExpanded] = React.useState(["1", "5"]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  return (
    <TreeView
      className={classesTreeView.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
    >
      <StyledTreeItem nodeId="1" label="Подготовка стен к покраски">
        <StyledTreeItem nodeId="2" label="Выравнивание штукатурки" />
        <StyledTreeItem nodeId="3" label="Грунтовка" />
        <StyledTreeItem nodeId="4" label="Финишная шпаклевкфа" />
      </StyledTreeItem>
      <Divider />
      <StyledTreeItem nodeId="5" label="Монтаж керамической плиты">
        <StyledTreeItem nodeId="6" label="Грунтовка стен" />
        <StyledTreeItem nodeId="7" label="Укладка плитки" />
      </StyledTreeItem>
      <Divider />
    </TreeView>
  );
};

export default SidebarTreeView;
