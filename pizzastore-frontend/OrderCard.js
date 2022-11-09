const url = 'http://localhost:8080/pizza';

let quantity;

fetch(url)
    .then(response => response.json())
    .then((products) => {
        let placeholder = document.querySelector("#product-list");
        let out = "";

        console.log(products);


        for (let product of products) {
            console.log(product.price);
            out += `
            
            <div id="product-list">
    <div class="row">
    <div class="column">
    <div class="card">
        <img src="./images/vegitarian%20Pizza.jpeg" alt="Avatar" style="width:100%">
        <div class="container">
            <h4><b>${product.pizzaName}</b></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus eos facere, magni minus natus nemo, nostrum obcaecati provident, quae recusandae repudiandae vitae voluptatem. Aliquam distinctio excepturi exercitationem sed voluptate!</p>
            <textarea onchange="" id="quantity" name="quantity" placeholder="Enter quantity"></textarea>
            <br>
            <h5>Price:
            <h4>${product.price}</h4>
            </h5>
            
            
        <div align="center"><button name="orderBtn" onclick="orderButton()" id="orderBtn">Order</button></div>
        </div>
    </div>


    </div>
    </div>
</div>
<script>
function orderButton(){
var=
         }

         
   // {
   //      "orderId": "3",
   //      "pizzaId": "1",
   //      "userId": "1",
   //      "orderDate": "2022-11-01T00:00:00",
   //      "quantity": 2,
   //      "price": 2500.0
   //  },
</script>
         
            `

            placeholder.innerHTML = out;
        }
    })

