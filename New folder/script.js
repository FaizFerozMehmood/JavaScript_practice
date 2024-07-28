// document.addEventListener('DOMContentLoaded', () => {
//     const modal = document.getElementById('product-modal');
//     const btn = document.getElementById('product-icon');
//     const span = document.getElementsByClassName('close')[0];

//     // Open the modal
//     btn.onclick = () => {
//         modal.style.display = 'block';
//         // Fetch product details and display
//         displayProductDetails();
//     }

//     // Close the modal
//     span.onclick = () => {
//         modal.style.display = 'none';
//     }

//     // Close the modal when user clicks outside of it
//     window.onclick = (event) => {
//         if (event.target == modal) {
//             modal.style.display = 'none';
//         }
//     }

//     // Function to display product details
//     function displayProductDetails() {
//         const productDetails = document.getElementById('product-details');
//         // Fetch selected products from your data source (e.g., Firebase)
//         // For demonstration, we'll use static data
//         const products = [
//             { name: 'Product 1', price: '$10', description: 'Description of product 1' },
//             { name: 'Product 2', price: '$20', description: 'Description of product 2' }
//         ];

//         productDetails.innerHTML = '';
//         products.forEach(product => {
//             const productDiv = document.createElement('div');
//             productDiv.innerHTML = `
//                 <h3>${product.name}</h3>
//                 <p>${product.price}</p>
//                 <p>${product.description}</p>
//             `;
//             productDetails.appendChild(productDiv);
//         });
//     }
// });
const  content = document.getElementById("content")
const values =`<p>heloo</p>`
content.innerHTML+=values