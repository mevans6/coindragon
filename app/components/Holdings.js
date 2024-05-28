import { useEffect, useState } from "react"
import Chart from 'react-apexcharts'

const Holdings = ({ tokens }) => {
  const defaultSymbols = ["---", "---", "---", "---", "---"]
  const defaultBalances = [15.5, 70.1, 35.89, 25, 100.9]

  const [symbols, setSymbols] = useState(null)
  const [balances, setBalances] = useState(null)

  const calculateValue = () => {
    let syms = []
    let bals = []

    for (var i = 0; i < tokens.length; i++) {
      syms.push(tokens[i].market.symbol.toUpperCase())
      bals.push(tokens[i].balance)
    }

    setSymbols(syms)
    setBalances(bals)
  }

  useEffect(() => {
    if (tokens.length === 0) {
      setSymbols(null)
    } else {
      calculateValue()
    }
  }, [tokens])

  return (
    <div className="holdings">
      <h3 className="holdings__title">Asset Holdings</h3>
      <div className="holdings__chart">

        <Chart
          options={{
            labels: symbols ? symbols : defaultSymbols,
            legend: {
              position: 'left',
              horizontalAlign: 'center',
              labels: {
                fontSize: '48px',
                fontWeight: 'bold',
                colors: '#FFFFFF'
              }
            }
          }}
          series={balances ? balances : defaultBalances}
          type="pie"
          height={300}
        />

      </div>
    </div>

  );
}

export default Holdings;
