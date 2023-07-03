export function validateUserInput(product, e) {
  // Validate the name field
  if (product.name.trim() === "") {
    alert("Please enter a name.");
    const nameInput = e.target.querySelector("#name");
    nameInput.focus();
    return false;
  }

  // Validate the price field
  const priceRegex = /^\d+(\.\d{1,2})?$/; // Regex for numbers with up to 2 decimal places
  if (!priceRegex.test(product.price)) {
    alert("Please enter a valid price (e.g., $10.99).");
    const priceInput = e.target.querySelector("#price");
    priceInput.focus();
    return false;
  }

  // Validate the current stock field
  if (!Number.isInteger(parseInt(product.currentStock))) {
    alert("Please enter a valid current stock value number.");
    const currentStockInput = e.target.querySelector("#currentStock");
    currentStockInput.focus();
    return false;
  }

  // Validate the minimum stock field
  if (!Number.isInteger(parseInt(product.minimunStock))) {
    alert("Please enter a valid minimum stock value number.");
    const minimunStockInput = e.target.querySelector("#minimunStock");
    minimunStockInput.focus();
    return false;
  }

  // Validate the category field
  if (product.category_id.trim() === "") {
    alert("Please enter a category.");
    const categoryInput = e.target.querySelector("#category_id");
    categoryInput.focus();
    return false;
  }
  return true;
}
