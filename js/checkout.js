

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


        
    // window.addEventListener('load', function () {
    //     document.getElementById('loader-spinner').style.display = 'block';
    //   });
  
    //   function enter() {
    //     const button = document.getElementById('button');
    //     const loader = document.getElementById('style');
  
    //     loader.style.display = 'block';  // Show spinner
    //     button.disabled = true;           // Disable button
  
    //     // Redirect after 5 seconds using setTimeout
    //     setTimeout(function () {
    //       // window.location.href ="../DEVELOPER-LION-KING/page/home.html";
    //        window.location.href ="home.html";
    //     }, 2000);  // 2000 milliseconds = 2 seconds
    //   }
    
    