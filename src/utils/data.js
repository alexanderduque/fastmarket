/**
 * This function obtains current DateTime
 * @returns {number} Date Time
 */

export const dateTime = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2); // Agrega un cero al mes si es necesario
    let day = ('0' + today.getDate()).slice(-2); // Agrega un cero al día si es necesario

    let date = year + '-' + month + '-' + day;
    let dateTime = date;
        
    return dateTime;
}