export function generateCardNumber() {
    let number = '';
    for (let i = 0; i < 16; i++) {
        number += Math.floor(Math.random() * 10);
    }
    return number;
}

export function generateExpiryDate() {
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const year = new Date().getFullYear() + Math.floor(Math.random() * 5) + 1; // +1 to avoid current year
    const shortYear = String(year).slice(-2);
    return `${month}/${shortYear}`;
  }
  

  
