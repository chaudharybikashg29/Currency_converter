import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`flex gap-4 rounded-lg border bg-white p-3 ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="mb-1 block text-sm text-gray-500"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="w-full bg-transparent py-1 text-lg outline-none"
        />
      </div>

      <div className="flex w-1/2 flex-col items-end">
        <p className="mb-1 text-sm text-gray-500">Currency</p>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="cursor-pointer rounded bg-gray-100 px-2 py-1 outline-none"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
