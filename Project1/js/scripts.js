const currentHour = new Date().getHours();
let timeGreeting = "";

if (currentHour < 12) {
    timeGreeting = "Good morning";
} else if (currentHour < 18) {
    timeGreeting = "Good afternoon";
} else {
    timeGreeting = "Good evening";
}

const user = 'Lovely shopper';
const greeting = timeGreeting + ', ' + user + '! Welcome to aftermarket wheels heaven.';
const greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// Product information
const rimData = [
    {
        name: "Velocity Series - Red Edition",
        basePrice: 1499.99,
        studentDiscount: 0.10,
        material: "Forged Aluminum",
        weight: "19.5 lbs",
        inStock: true
    },
    {
        name: "Phantom Series - Black and Orange",
        basePrice: 1299.99,
        studentDiscount: 0.10,
        material: "Cast Aluminum",
        weight: "22.3 lbs",
        inStock: false
    },
    {
        name: "Aero Pro - Black Diamond",
        basePrice: 999.99,
        studentDiscount: 0.10,
        material: "Mid-range Aluminum",
        weight: "17.8 lbs",
        inStock: true
    },
    {
        name: "Drift Master - Gold",
        basePrice: 1999.99,
        studentDiscount: 0.10,
        material: "Forged Aluminum",
        weight: "20.1 lbs",
        inStock: true
    }
];

// Set up prices for all products
window.addEventListener('load', function() {
    // First product - original
    const priceEl = document.getElementById('price');
    const studentPriceEl = document.getElementById('student-price');
    
    if (priceEl && studentPriceEl) {
        priceEl.textContent = rimData[0].basePrice.toFixed(2);
        const discountedPrice = rimData[0].basePrice - (rimData[0].basePrice * rimData[0].studentDiscount);
        studentPriceEl.textContent = discountedPrice.toFixed(2);
        
        // Create availability info
        createAvailabilityInfo(rimData[0], priceEl.closest('.price-tag'));
    }
    
    // Second product - Phantom
    const pricePhantomEl = document.getElementById('price-phantom');
    const studentPricePhantomEl = document.getElementById('student-price-phantom');
    
    if (pricePhantomEl && studentPricePhantomEl) {
        pricePhantomEl.textContent = rimData[1].basePrice.toFixed(2);
        const discountedPricePhantom = rimData[1].basePrice - (rimData[1].basePrice * rimData[1].studentDiscount);
        studentPricePhantomEl.textContent = discountedPricePhantom.toFixed(2);
        
        // Create availability info
        createAvailabilityInfo(rimData[1], pricePhantomEl.closest('.price-tag'));
    }
    
    // Third product - Aero Pro
    const priceAeroEl = document.getElementById('price-aero');
    const studentPriceAeroEl = document.getElementById('student-price-aero');
    
    if (priceAeroEl && studentPriceAeroEl) {
        priceAeroEl.textContent = rimData[2].basePrice.toFixed(2);
        const discountedPriceAero = rimData[2].basePrice - (rimData[2].basePrice * rimData[2].studentDiscount);
        studentPriceAeroEl.textContent = discountedPriceAero.toFixed(2);
        
        // Create availability info
        createAvailabilityInfo(rimData[2], priceAeroEl.closest('.price-tag'));
    }
    
    // Fourth product - Drift Master
    const priceDriftEl = document.getElementById('price-drift');
    const studentPriceDriftEl = document.getElementById('student-price-drift');
    
    if (priceDriftEl && studentPriceDriftEl) {
        priceDriftEl.textContent = rimData[3].basePrice.toFixed(2);
        const discountedPriceDrift = rimData[3].basePrice - (rimData[3].basePrice * rimData[3].studentDiscount);
        studentPriceDriftEl.textContent = discountedPriceDrift.toFixed(2);
        
        // Create availability info
        createAvailabilityInfo(rimData[3], priceDriftEl.closest('.price-tag'));
    }
});

// Helper function to create availability info
function createAvailabilityInfo(product, priceTagElement) {
    if (!priceTagElement) return;
    
    // Create a new element for availability
    const availabilityDiv = document.createElement('div');
    
    if (product.inStock) {
        availabilityDiv.textContent = "In Stock - Ready to Ship";
        availabilityDiv.className = "availability in-stock";
    } else {
        availabilityDiv.textContent = "Out of Stock - Pre-order Available";
        availabilityDiv.className = "availability out-of-stock";
    }
    
    // Insert the availability info after the price tag div
    priceTagElement.after(availabilityDiv);
}
