import React from 'react'

const CurrencyConverter = () => {

  let fromArr = ["USD", "INR"];
  const toArr = ["INR", "USD"];

  var currAmount;

  const handleCurrencyAmount = (e) => {
    console.log("handleCurrencyAmount");
     currAmount = e.target.value;
  }

  const handleCurrencyFrom = (e) => {
    console.log("handleCurrencyFrom");
    console.log(e.target.value);
  }

  const handleCurrencyTO = () => {
    console.log("handleCurrencyTo");
  }

  const convertCurrency = () => {
    console.log("convertCurrency");
    var fromCurrency = fromArr.map((item) => (
      fromCurrency = item
    ));
    var toCurrency = toArr.map((item) => (
      toCurrency = item
    ));
    console.log(fromCurrency)
    console.log(toCurrency)
    for(var i = 0; i < fromCurrency.length; i++){
      for(var j = 0; j < toCurrency.length; j++)
      if(fromCurrency[i] === "INR" && toCurrency[j] === "USD"){
        console.log("INR to USD", currAmount * 0.013);
      }
      if(fromCurrency[i] === "USD" && toCurrency[j] === "INR"){
        console.log("INR to USD", currAmount * 77.30);
      }
    }
  
  }

  
  return (
    <>
      <div className='curr-converter-wrap col-sm-12'>
        <h3 className='text-center'>Currency Converter</h3>
        <div className='curr-converter'>
          <div className='curr-input-wrap'>
            <label>Amount to convert</label>
            <input type="number" onChange={handleCurrencyAmount} />
          </div>
          <div className='curr-input-wrap'>
            <label>From</label>
            <select onChange={handleCurrencyFrom}>
            {
                fromArr && fromArr.map((item) => (
                  <option value={item}>{item}</option>
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
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CurrencyConverter