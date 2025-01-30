import { useEffect, useState } from "react";


// const getCurrentDate = () => {
//   const today = new Date();
//   const year = today.getFullYear();
//   const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
//   const day = String(today.getDate()).padStart(2, '0');
//   return `${year}-${month}-${day}`;
// };

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-01-28/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    },[currency])

    return data;
}


export default useCurrencyInfo;