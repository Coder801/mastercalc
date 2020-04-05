import React from "react";
import PropTypes from "prop-types";
import { withProps } from "recompose";

import CustomListbox from "../CustomListbox/CustomListbox";

const ListboxGroup = ({ items, innerComponent, onSave, className }) =>
  items.map(({ name, placeholder, title, value, range: { min, max } }, key) => {
    const InnerComponent = withProps({ value, min, max })(innerComponent);
    let newValue = value;
    const handleChange = value => {
      newValue = value;
    };

    return (
      <CustomListbox
        key={key}
        value={value}
        title={title}
        className={className}
        placeholder={placeholder}
        onSave={() => onSave(newValue, name)}
      >
        <InnerComponent onChange={value => handleChange(value)} />
      </CustomListbox>
    );
  });

ListboxGroup.defaultProps = {
  items: []
};

ListboxGroup.propTypes = {
  items: PropTypes.array.isRequired,
  innerComponent: PropTypes.elementType,
  className: PropTypes.string,
  onSave: PropTypes.func
};

export default ListboxGroup;
