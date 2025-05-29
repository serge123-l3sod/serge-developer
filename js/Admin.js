

        // Sample admin functionality
        const ADMIN_PASSWORD = "admin123"; // In a real app, use proper authentication
        
        function login() {
            const password = document.getElementById('admin-pass').value;
            if (password === ADMIN_PASSWORD) {
                document.getElementById('login-section').style.display = 'none';
                document.getElementById('dashboard').style.display = 'block';
                document.getElementById('logoutBtn').style.display = 'block';
                
                // In a real app, you would fetch these from a database
                document.getElementById('order-count').textContent = '12';
                document.getElementById('total-sales').textContent = 'Frw 1,250,000';
                document.getElementById('product-count').textContent = '24';
                document.getElementById('customer-count').textContent = '48';
                
                // Sample orders
                const orders = [
                    { id: 1001, customer: "John Doe", amount: "Frw 105,000", status: "Completed" },
                    { id: 1002, customer: "Jane Smith", amount: "Frw 75,000", status: "Shipped" },
                    { id: 1003, customer: "Bob Johnson", amount: "Frw 45,000", status: "Processing" }
                ];
                
                let ordersHTML = '<table style="width:100%; border-collapse:collapse;">';
                ordersHTML += '<tr><th style="text-align:left; padding:8px; border-bottom:1px solid #ddd;">ID</th><th style="text-align:left; padding:8px; border-bottom:1px solid #ddd;">Umukiriya</th><th style="text-align:left; padding:8px; border-bottom:1px solid #ddd;">Igiteranyo</th><th style="text-align:left; padding:8px; border-bottom:1px solid #ddd;">Imiterere</th></tr>';
                
                orders.forEach(order => {
                    ordersHTML += `<tr>
                        <td style="padding:8px; border-bottom:1px solid #ddd;">${order.id}</td>
                        <td style="padding:8px; border-bottom:1px solid #ddd;">${order.customer}</td>
                        <td style="padding:8px; border-bottom:1px solid #ddd;">${order.amount}</td>
                        <td style="padding:8px; border-bottom:1px solid #ddd;">${order.status}</td>
                    </tr>`;
                });
                
                ordersHTML += '</table>';
                document.getElementById('orders').innerHTML = ordersHTML;
            } else {
                alert('Ijambobanga ntabwo ari ryo!');
            }
        }
        
        document.getElementById('logoutBtn').addEventListener('click', function() {
            document.getElementById('login-section').style.display = 'block';
            document.getElementById('dashboard').style.display = 'none';
            document.getElementById('logoutBtn').style.display = 'none';
            document.getElementById('admin-pass').value = '';
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
    
    
        
        