import React from "react";

export const App = () => {
  return (
    <>
      <h2>Payments 1</h2>
      <PaymentList payments={payments1} />

      <h2>Payments 2</h2>
      <PaymentList payments={payments2} />

      <h2>All payments</h2>
      <PaymentList payments={payments} />
    </>
  );
};
export default App;
