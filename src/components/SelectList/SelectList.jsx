import React from "react";
import PropTypes from "prop-types";

import CustomSelect from "../CustomSelect/CustomSelect";

const SelectList = ({ data }) =>
  data.map((item, key) => (
    <CustomSelect key={key} value={state[item.name]} data={item} onChange={value => handleState(value, item.name)} />
  ));

export default SelectList;
