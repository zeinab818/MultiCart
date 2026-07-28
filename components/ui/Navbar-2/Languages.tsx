import React from "react";

const languages = [
  { name: "English", code: "en" },
  { name: "French", code: "fr" },
];

const currencies = [
  { name: "Euro", code: "EUR" },
  { name: "Rupees", code: "INR" },
  { name: "Pound", code: "GBP" },
  { name: "Dollar", code: "USD" },
];

export default function Languages() {
  return (
    <div className="w-44 p-3 font-montserrat">
      {/* Languages */}
      <h6 className="mb-2 text-xs font-bold uppercase text-gray-500">
        Language
      </h6>

      <ul className="mb-4 space-y-1">
        {languages.map((language) => (
          <li key={language.code}>
            <button
              className="w-full rounded-md px-3 py-2 text-left text-sm "
              onClick={() => console.log(language.code)}
            >
              {language.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Currencies */}
      <h6 className="mb-2 text-xs font-bold uppercase text-gray-500">
        Currency
      </h6>

      <ul className="space-y-1">
        {currencies.map((currency) => (
          <li key={currency.code}>
            <button
              className="w-full rounded-md px-3 py-2 text-left text-sm  "
              onClick={() => console.log(currency.code)}
            >
              {currency.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}