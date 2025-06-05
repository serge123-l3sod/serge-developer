
 
// Consistent cart functionality with Home page
let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    alert('Igicuruzwa cyashyizwe mu gikapu!');
}
    
    
    






// // Cart System
// let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
// document.getElementById('cart-count').textContent = cart.length;

// function addToCart(name, price) {
//     cart.push({ name, price });
//     updateCartCount();
//     saveCart();
// }

// function saveCart() {
//     localStorage.setItem('cartItems', JSON.stringify(cart));
// }

// function updateCartCount() {
//     document.getElementById('cart-count').textContent = cart.length;
// }

// // Comment/Blog System
// const showCommentBtn = document.getElementById('showCommentBtn');
// const textareaContainer = document.getElementById('textareaContainer');
// const deleteBtn = document.getElementById('deleteBtn');

// showCommentBtn.addEventListener('click', () => {
//     textareaContainer.style.display = 'block';
//     showCommentBtn.style.display = 'none';
// });

// deleteBtn.addEventListener('click', () => {
//     textareaContainer.style.display = 'none';
//     showCommentBtn.style.display = 'inline-block';
// });

// document.getElementById('postForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const message = document.getElementById('message').value;
//     const user = localStorage.getItem("loggedUser") || "Guest";
    
//     if (message.trim()) {
//         const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
//         blogs.push({ user, text: message });
//         localStorage.setItem("blogs", JSON.stringify(blogs));
        
//         this.reset();
//         textareaContainer.style.display = 'none';
//         showCommentBtn.style.display = 'inline-block';
//         loadBlogs();
//     }
// });

// // User Authentication
// const user = localStorage.getItem("loggedUser");

// if (!user) {
//     window.location.href = "login.html";
// } else {
//     document.getElementById("username").textContent = user;
//     loadBlogs();
// }

// function loadBlogs() {
//     const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
//     const list = document.getElementById("blogList");
//     list.innerHTML = "";

//     blogs.forEach((blog, index) => {
//         const li = document.createElement("li");
//         li.innerHTML = `
//             <span>#${index + 1} by ${blog.user}: ${blog.text}</span>
//             <div>
//                 <button onclick="deleteBlog(${index})">Gusiba</button>
//             </div>
//         `;
//         list.appendChild(li);
//     });
// }

// function deleteBlog(index) {
//     const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
//     blogs.splice(index, 1);
//     localStorage.setItem("blogs", JSON.stringify(blogs));
//     loadBlogs();
// }

// function logout() {
//     localStorage.removeItem("loggedUser");
//     window.location.href = "login.html";
// }

// document.getElementById("logoutBtn").addEventListener("click", logout);
// </script>// function addToCart() {
// //     cartCount++;
// //     document.getElementById('cart-count').textContent = cartCount;
// // }
// // let cart = [];

// // function addToCart(name, price) {
// //     cart.push({ name, price });
// //     document.getElementById('cart-count').textContent = cart.length;
// //     saveCart();
// // }

// // Kubika mu browser (localStorage)
// // function saveCart() {
// //     localStorage.setItem('cartItems', JSON.stringify(cart));
// // }


// // const showCommentBtn = document.getElementById('showCommentBtn');
// //     const textareaContainer = document.getElementById('textareaContainer');
// //     const deleteBtn = document.getElementById('deleteBtn');

// //     showCommentBtn.addEventListener('click', () => {
// //       textareaContainer.style.display = 'block';
// //       showCommentBtn.style.display = 'none';
// //     });

// //     deleteBtn.addEventListener('click', () => {
// //       textareaContainer.style.display = 'none';
// //       showCommentBtn.style.display = 'inline-block';
// //     });
// //     document.getElementById('postForm').addEventListener('submit', function(e) {
// //       e.preventDefault(); // Prevent actual form submission

// //       const message = document.getElementById('message').value;
      
// //       Simulated POST action (e.g., send to server or log to console)
// //       console.log('Message posted:', message);

// //       Optional: Reset form
// //       this.reset();
      
// //       Optional: Display confirmation
// //       alert('Message posted successfully!');
// //     });














//     const user = localStorage.getItem("loggedUser");

//     🚫 Redirect to login if not logged in
//     if (!user) {
//       window.location.href = "login.html";
//     } else {
//       document.getElementById("username").textContent = user;
//     }

//     ✅ Load posts from localStorage
//     function loadBlogs() {
    
//       if(!user){
//         window.location.href = "login.html";
//       }
//       else{

//     const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
//       const list = document.getElementById("blogList");
//       list.innerHTML = "";

//       blogs.forEach((blog, index) => {
//         const li = document.createElement("li");
//         li.innerHTML = `<span>#${index + 1} by ${blog.user}: ${blog.text} </span><div><button onclick=" deleteAllBlogs()">Delete</button></div>`;
//         list.appendChild(li);
//       });
//       }
    
//   postBlog();
//     }
    
//     Delete all blogs
//     function deleteAllBlogs() {
//       localStorage.removeItem("blogs");
//       loadBlogs();
//     }

//     Attach delete button event
//     document.getElementById("deleteBtn").addEventListener("click", deleteAllBlogs);
//     Post a new blog
    
    

//      function saveData() {
//             const data = document
//                 .getElementById('textarea')
//                 .value;
//             localStorage
//                 .setItem('userData', data);
//             displayData();
//         }
//         function displayData() {
//             const savedData = localStorage
//                 .getItem('userData');
//             document
//                 .getElementById('savedData')
//                 .innerText = savedData;
//         }
//         displayData();

//     ✅ Logout
//     function logout() {
//       localStorage.removeItem("loggedUser");
//       window.location.href = "login.html";
//    }

//     🔁 Load posts on page load
//     logout();


//     function logout() {
//       localStorage.removeItem("loggedUser");
//       window.location.href = "blog.html";
//     }

//     document.getElementById("logoutBtn").addEventListener("click", logout);=