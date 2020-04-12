const toggleClassByCondition = (condition, element, className) =>
  condition ? element.classList.remove(className) : element.classList.add(className);

export default toggleClassByCondition;
