// utils.js

export const formatCurrency = (value) => {
    // Assuming value is a number representing the price or totalStockValue
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NZD", // Change this to your desired currency code (e.g., "NZD" for New Zealand Dollar)
      minimumFractionDigits: 2,
    });
  
    return formatter.format(value);
  };
  