//Welcome message
const user = 'Mike';
const salutation = 'Hello,  ';
const greeting = salutation + user + '! Here are the latest Rims Available.';
const greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// Product price
const price = 20;
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPrice = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);
