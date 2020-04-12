import React, { useState } from "react";
import PropTypes from "prop-types";
import { withProps } from "recompose";
import { compose } from "lodash/fp";

import { ListSubheader, makeStyles } from "@material-ui/core";

import CustomSelect from "@/components/CustomSelect/CustomSelect";

const useStyles = makeStyles({
  root: {
    padding: 0,
    width: "100%"
  }
});

// TODO: refactor this helpers start
const convertOptions = array =>
  array
    .map(({ name, children }) => ({
      value: null,
      label: name,
      children: children,
      component: <ListSubheader />
    }))
    .map(item => ({
      ...item,
      children: item.children.map(item => ({
        value: item.id,
        label: item.name
      }))
    }))
    .map(item => [item, ...item.children])
    .reduce((prev, current) => {
      prev.push(...current);
      return prev;
    }, []);
// TODO: refactor this helpers end

const SidebarTreeViewMobile = ({ placeholder, options, classes }) => {
  const [value, setValue] = useState("");

  const handleFilter = value => {
    setValue(value);
  };

  return (
    <CustomSelect
      placeholder={placeholder}
      data={{
        options: convertOptions(options),
        value: value
      }}
      className={classes.root}
      onChange={value => handleFilter(value)}
      displayEmpty
    />
  );
};

SidebarTreeViewMobile.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
  classes: PropTypes.object
};

SidebarTreeViewMobile.defaultProps = {
  placeholder: "Фильтр"
};

export default compose(
  withProps(() => ({
    classes: useStyles()
  }))
)(SidebarTreeViewMobile);
