import React, { useState } from 'react'

const CurrencyConverter = () => {

  let fromArr = ["USD", "EUR", "COP"];
  let toArr = ["CAD", "BRL", "BTN"];

  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currAmount, setCurrAmount] = useState(0);
  const [currFrom, setCurrFrom] = useState();
  const [currTo, setCurrTo] = useState();


  const handleCurrencyAmount = (e) => {
    console.log("handleCurrencyAmount", e.target.value);
    let currAmountF = e.target.value;
    setCurrAmount(currAmountF);
  }

  const handleCurrencyFrom = (e) => {
    console.log("handleCurrencyFrom", e.target.value);
    console.log(e.target.value);
    let currFromF = e.target.value;
    setCurrFrom(currFromF);
  }

  const handleCurrencyTO = (e) => {
    console.log("handleCurrencyTO", e.target.value);
    console.log(e.target.value);
    let currToF = e.target.value;
    setCurrTo(currToF);
  }

  const convertCurrency = () => {
    console.log("convertCurrencyFrom", currFrom);
    console.log("convertCurrencyTo", currTo);
    if (currFrom === "EUR" && currTo === "BRL") {
      console.log("1 EUR to CAD", currAmount * 1.35);
      const convertedAmountF = currAmount * 1.35;
      setConvertedAmount(convertedAmountF);
    }
    else if (currFrom === "EUR" && currTo === "BTN") {
      const convertedAmountF = currAmount * 80.33
      console.log("1 EUR to BTN", currAmount * 80.33);
      setConvertedAmount(convertedAmountF);
    }
    else if (currFrom === "COP" && currTo === "BRL") {
      const convertedAmountF = currAmount * 0.0013
      console.log("1 COP to BRL", currAmount * 0.0013);
      setConvertedAmount(convertedAmountF);
    }
    else if (currFrom === "USD" && currTo === "CAD") {
      const convertedAmountF = currAmount * 1.30
      console.log("1 COP to BRL", currAmount * 1.30);
      setConvertedAmount(convertedAmountF);
    }
    else {
      alert("not mached currency");
    }

  }

  return (
    <>
      <div className='curr-converter-wrap col-sm-6'>
        <h3 className='text-center'>Currency Converter</h3>
        <div className='curr-converter'>
          <div className='curr-input-wrap'>
            <label>Amount to convert</label>
            <input type="number" placeholder="Enter amount" onChange={handleCurrencyAmount} />
          </div>
          <div className='curr-input-wrap'>
            <label>From</label>
            <select onChange={handleCurrencyFrom}>
              {
                fromArr && fromArr.map((item) => (
                  <option>{item}</option>
                ))
              }
            </select>
          </div>
          {/* <div>
          <button type='button' className='btn btn-info text-center'>Reverse</button>
          </div> */}
          <div className='curr-input-wrap'>
            <label>To</label>
            <select onChange={handleCurrencyTO}>
              {
                toArr && toArr.map((item) => (
                  <option>{item}</option>
                ))
              }
            </select>
          </div>
          <button type='button' className='btn btn-success text-center' onClick={convertCurrency}>Convert Currency</button>
          <div className='curr-input-wrap'>
            <label>Result</label>
            <input type="text" value={convertedAmount} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CurrencyConverter