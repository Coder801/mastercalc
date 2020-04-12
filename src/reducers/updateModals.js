import { TOGGLE_MODAL } from "@/constants/actionTypes";

const initialState = {
  details: {
    isOpen: false
  },
  offers: {
    isOpen: false
  }
};

const updateRoomParametrs = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  const { name, isOpen } = action.payload;

  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...initialState,
        [name]: {
          isOpen
        }
      };

    default:
      return state.modals;
  }
};

export default updateRoomParametrs;
