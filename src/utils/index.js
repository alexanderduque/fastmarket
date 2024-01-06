/**
 * funciton to calculate totalGeneral card
 * @param {array} products cartProduct: array of objects 
 * @returns {number} totalGeneral
 */
export const totalGeneral = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.price);

    // Redondear la suma a dos decimales
    return parseFloat(sum.toFixed(2));
};



