import React from "react";
import { ServiceConsumer } from "../service-context";

const withBankService = () => Wrapped => {
  return props => {
    return (
      <ServiceConsumer>
        {bankService => {
          return <Wrapped {...props} bankService={bankService} />;
        }}
      </ServiceConsumer>
    );
  };
};

export default withBankService;
