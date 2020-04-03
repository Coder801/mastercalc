import React from "react";
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

export default ListboxGroup;
