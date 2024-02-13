import { useState } from 'react'
import {InputBox} from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState()

  const currencyInfo = useCurrencyInfo(from);
  

  const options = Object.keys(currencyInfo)
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

 

  return (
    <form onSubmit={(e) => { e.preventDefault(); convert()}}>
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            setAmount={(amount) => setAmount(amount)}
            selectedCurrency={from}
          />
       
          <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              amountDisable
              placeholder = "Converted Amount" 
          />
                    
          <button type="submit">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
    </form>
);
}

export default App