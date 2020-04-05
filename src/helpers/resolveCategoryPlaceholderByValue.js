const resolveCategoryPlaceholderByValue = key => {
  const dictionary = {
    walls: "Состояние стен:",
    ceiling: "Состояние потолка:",
    floor: "Состояние пола:"
  };

  return dictionary[key];
};

export default resolveCategoryPlaceholderByValue;
