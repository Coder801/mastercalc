import React from "react";
import { MastercalcServiceContext } from "../context";

const withMastercalcService = mapMethodToProps => Wrapper => {
  return props => {
    return (
      <MastercalcServiceContext.Consumer>
        {mastercalcService => {
          const serviceProps = mapMethodToProps(mastercalcService);
          return <Wrapper {...props} {...serviceProps} />;
        }}
      </MastercalcServiceContext.Consumer>
    );
  };
};

export default withMastercalcService;
