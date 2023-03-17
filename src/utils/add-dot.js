export function addDotInQuantity(quantity) {
    quantity = String(quantity)
    if (quantity.length > 3) {
        quantity = quantity.split('')
        quantity[0] = quantity[0] + ',';
        quantity = quantity.join('')
    }

    return quantity;
};