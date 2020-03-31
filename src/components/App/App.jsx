import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import MastercalcService from "../../services/api-mastercalc";
import { MastercalcServiceContext, CalculatorContext } from "../context";

import Header from "../Header/Header";
import Home from "../../views/Home/Home";
import Calculator from "../../views/Calculator/Calculator";
// import Catalog from "../../views/Catalog/Catalog";
// import Choose from "../../views/Choose/Choose";

const {
  breakpoints,
  typography: { pxToRem }
} = createMuiTheme();

const variables = {
  fonts: {
    primary: '"Noto Sans", "Helvetica", "Arial", sans-serif',
    secondary: '"Saira Stencil One, "Helvetica", "Arial", sans-serif'
  },
  colors: {
    primary: "#f2a000",
    success: "#569A00",
    info: "#2967ba",
    error: "#bf5837",
    grey: { 50: "#f9f9f9", 100: "#f1f1f0", 300: "#e5e5e5", 600: "#767676", 800: "#252525", 900: "#111111" }
  }
};

let theme = createMuiTheme({
  overrides: {
    MuiDivider: {
      root: {
        width: "100%"
      }
    },
    MuiTypography: {
      root: {
        fontFamily: variables.fonts.primary
      }
    },
    MuiTableCell: {
      root: {
        [breakpoints.down("md")]: {
          padding: 8
        }
      },
      head: {
        color: variables.colors.grey[600]
      }
    },
    MuiTab: {
      root: {
        transition: ".3s ease",
        "&:hover": {
          backgroundColor: variables.colors.grey[300]
        }
      },
      textColorPrimary: {
        color: variables.colors.info
      }
    },
    MuiButton: {
      // Name of the styleSheet
      root: {
        padding: "3px 16px",
        borderRadius: "4px",
        fontFamily: variables.fonts.primary,
        color: variables.colors.grey[600]
      },
      outlined: {
        padding: "3px 16px",
        background: variables.colors.grey[100],
        color: variables.colors.info,
        border: `1px solid ${variables.colors.grey[100]}`,
        "&:hover": {
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.52), rgba(255, 255, 255, 0.52)), linear-gradient(180deg, #F1F1F0 0%, #E1E1E1 100%)",
          border: "1px solid #B3B3B3",
          boxShadow: "inset 0px 2px 0px rgba(255, 255, 255, 0.7)"
        }
      },
      containedPrimary: {
        background: "linear-gradient(180deg, #ffe7a9 0%, #ffb053 100%)",
        boxShadow: "inset 0 2px 0 rgba(255, 255, 255, .25)",
        color: variables.colors.grey[900],
        border: "1px solid #b99f6d",
        "&:hover": {
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.22)), linear-gradient(180deg, #FFE7A9 0%, #FFB053 100%)"
        }
      },
      containedSecondary: {
        background: "linear-gradient(180deg, #F1F1F0 0%, #E1E1E1 100%)",
        boxShadow: "inset 0px 1px 0px rgba(255, 255, 255, 0.7)",
        color: variables.colors.grey[900],
        border: "1px solid #B3B3B3",
        "&:hover": {
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.52), rgba(255, 255, 255, 0.52)), linear-gradient(180deg, #F1F1F0 0%, #E1E1E1 100%)"
        }
      }
    },
    MuiLink: {
      underlineHover: {
        "&:hover": {
          textDecoration: "none"
        }
      }
    }
  },
  palette: {
    primary: {
      main: variables.colors.primary
    },
    secondary: {
      main: "#252525"
    },
    success: {
      main: variables.colors.success
    },
    info: {
      main: variables.colors.info
    },
    error: {
      main: variables.colors.error
    },
    text: {
      primary: variables.colors.grey[900],
      secondary: variables.colors.grey[600]
    },
    grey: {
      50: variables.colors.grey[50],
      100: variables.colors.grey[100],
      300: variables.colors.grey[300],
      600: variables.colors.grey[600],
      800: variables.colors.grey[800],
      900: variables.colors.grey[900]
    }
  },
  typography: {
    fontFamily: variables.fonts.primary,
    h2: {
      color: variables.colors.grey[900],
      fontSize: pxToRem(36),
      lineHeight: pxToRem(42),
      [breakpoints.down("md")]: {
        fontSize: pxToRem(30),
        lineHeight: pxToRem(40)
      },
      [breakpoints.down("sm")]: {
        fontSize: pxToRem(28),
        lineHeight: pxToRem(32)
      }
    },
    h3: {
      color: variables.colors.grey[900],
      fontSize: pxToRem(56),
      lineHeight: pxToRem(56),
      fontWeight: 600,
      [breakpoints.down("md")]: {
        fontSize: pxToRem(42),
        lineHeight: pxToRem(42)
      },
      [breakpoints.down("sm")]: {
        fontSize: pxToRem(34),
        lineHeight: pxToRem(34)
      }
    },
    h4: {
      fontSize: pxToRem(20)
    },
    h5: {
      fontSize: pxToRem(18)
    },
    subtitle1: {
      color: variables.colors.grey[600],
      fontSize: pxToRem(16),
      lineHeight: pxToRem(22)
    },
    subtitle2: {
      fontWeight: 600
    },
    body1: {
      fontSize: pxToRem(14)
    },
    button: {
      fontSize: pxToRem(14),
      textTransform: "none"
    }
  }
});

const parametrs = {
  length: {
    name: "length",
    placeholder: "Длинна: {value} см",
    title: "Длинна:",
    value: 4000,
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

const App = () => {
  const mastercalcService = new MastercalcService();
  const [options, setOptions] = useState(parametrs);

  return (
    <MastercalcServiceContext.Provider value={mastercalcService}>
      <CalculatorContext.Provider value={parametrs}>
        <ThemeProvider theme={theme}>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              {/* <Route path="/catalog">
                <Catalog />
              </Route> */}
              <Route path="/calculator">
                <Calculator />
              </Route>
              {/* <Route path="/choose">
                <Choose />
              </Route> */}
            </Switch>
          </Router>
        </ThemeProvider>
      </CalculatorContext.Provider>
    </MastercalcServiceContext.Provider>
  );
};

export default App;
