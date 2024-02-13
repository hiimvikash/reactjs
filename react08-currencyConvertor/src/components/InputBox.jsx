import React, {useId} from 'react'

export function InputBox({
    label,
    amount,
    setAmount,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    placeholder="Enter Amount"
}) {
   const amountInputId = useId()
   const style = {
    border : "2px solid #055267aa",
    marginTop : "10px",
    borderRadius : "10px",
    padding : "20px"
  }
    return (
        <div style={style}>
            <div>
                <label htmlFor={amountInputId}>
                    {label}
                </label>
                <input
                    id={amountInputId}
                    type="number"
                    placeholder={placeholder}
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => setAmount && setAmount(parseInt(e.target.value))}
                />
            </div>
           
                <p>Currency Type</p>
                <select value={selectedCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} >{currency}</option>)
                        )}
                
                </select>
            
        </div>
    );
}
