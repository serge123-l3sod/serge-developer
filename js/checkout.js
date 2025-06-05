
 

// Cart functionality
let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
}

// Comment form toggle
document.getElementById('show-comment-btn').addEventListener('click', function() {
    document.getElementById('comment-form').style.display = 'block';
});

document.getElementById('cancel-comment-btn').addEventListener('click', function() {
    document.getElementById('comment-form').style.display = 'none';
});

// Form submission
document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Murakoze gukora! Mwakiriye imeri yemeza ko igicuruzwa cyoherejwe.');
});






    
    