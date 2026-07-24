import React, { useState } from "react";

function CurrencyConvertor() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    const converted = amount * 80;
    setResult(converted);
    alert("Converting to Euro Amount is " + converted);
  };

  return (
    <div>
      <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>

      <p>
        <label>Amount:&nbsp;&nbsp;&nbsp;</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </p>

      <p>
        <label>Currency:&nbsp;</label>
        <input type="text" value="Euro" readOnly />
      </p>

      <button onClick={handleSubmit}>Submit</button>

      {result !== "" && (
        <h3>Converting to Euro Amount is {result}</h3>
      )}
    </div>
  );
}

export default CurrencyConvertor;