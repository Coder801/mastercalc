import React from "react";
import PropTypes from "prop-types";
import SidebarTreeItem from "./SidebarTreeItem";

const RenderDeepTreeHelper = ({ id, name, children }) => (
  <SidebarTreeItem key={id} nodeId={id} label={name}>
    {Array.isArray(children) ? children.map(node => RenderDeepTreeHelper(node)) : null}
  </SidebarTreeItem>
);

RenderDeepTreeHelper.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  children: PropTypes.element
};

export default RenderDeepTreeHelper;
