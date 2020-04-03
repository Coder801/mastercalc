import { CHANGE_ROOM_PARAMETRS } from "../constants/actionTypes";

const initialState = {
  length: {
    name: "length",
    placeholder: "Длинна: {value} см",
    title: "Длинна:",
    value: 3000,
    range: {
      min: 0,
      max: 5000
    }
  },
  height: {
    name: "height",
    placeholder: "Высота: {value} см",
    title: "Высота:",
    value: 3000,
    range: {
      min: 0,
      max: 5000
    }
  },
  width: {
    name: "width",
    placeholder: "Ширина: {value} см",
    title: "Ширина:",
    value: 3000,
    range: {
      min: 0,
      max: 5000
    }
  },
  window: {
    name: "window",
    placeholder: "Окна: {value}",
    title: "Колличество окон:",
    value: 1,
    range: {
      min: 0,
      max: 20
    }
  },
  door: {
    name: "door",
    placeholder: "Двери: {value}",
    title: "Колличество дверей:",
    value: 1,
    range: {
      min: 0,
      max: 20
    }
  },
  area: {
    name: "area",
    value: 1
  },
  state: {
    name: "state",
    title: "Состояние потолка",
    value: "",
    options: [
      {
        label: "Потолок в старой краске/штукатурке",
        value: "CEIL_R_CURV"
      },
      {
        label: "Голая плита перекрытия",
        value: "CEIL_R_NAKE"
      },
      {
        label: "Старый натяжной потолок / гипсокартон",
        value: "CEIL_R_STRC"
      }
    ]
  },
  result: {
    name: "result",
    title: "Что нужно в результате",
    value: "",
    options: [
      {
        label: "Ровный окрашенный потолок",
        value: "CEIL_F_PAIN"
      },
      {
        label: "Окрашенный потолок из гипсокартона",
        value: "CEIL_F_DRPA"
      },
      {
        label: "Натяжной потолок",
        value: "CEIL_F_STRC"
      }
    ]
  }
};

const updateRoomParametrs = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case CHANGE_ROOM_PARAMETRS:
      return {
        ...state.roomParameters,
        [action.payload.key]: {
          ...state.roomParameters[action.payload.key],
          value: action.payload.value
        }
      };

    default:
      return state.roomParameters;
  }
};

export default updateRoomParametrs;
