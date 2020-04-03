import updateRoomParameters from "./roomParameters";
import updateSurface from "./surface";

const reducer = (state, action) => ({
  roomParameters: updateRoomParameters(state, action),
  surface: updateSurface(state, action)
});

export default reducer;
