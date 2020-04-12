import updateRoomParameters from "./updateRoomParameters";
import updateCategoryState from "./updateCategoryState";
import updateCategory from "./updateCategory";
import updateModals from "./updateModals";

const reducer = (state, action) => ({
  roomParameters: updateRoomParameters(state, action),
  categoryState: updateCategoryState(state, action),
  category: updateCategory(state, action),
  modals: updateModals(state, action)
});

export default reducer;
