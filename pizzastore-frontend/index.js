function onclick1() {
    var pizzaName = document.getElementById("name").value;
    var pizzaType = document.getElementById("type").value;
    var size = document.getElementById("size").value;
    var price = document.getElementById("price").value;

    const pizza = {
        pizzaName: pizzaName,
        pizzaType: pizzaType,
        size: size,
        price: price,
    };

    fetch("http://localhost:8080/pizza/addpizza", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(pizza),
    })
        .then((res) => res.text())
        .then((result) => {
            console.log(result);
            var error = "Error username or password";
            if (result == error) {
                window.location = "/";
            } else {
                // window.location="/category"
            }
        });
}

function onclick2() {
    fetch("http://localhost:8080/pizza/getpizza", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    })
        .then((res) => res.json())
        .then((result) => {
            let placeholder = document.querySelector("#pizza-list");
            let out = "";

            for (let pizza of result) {
                console.log(pizza);

                out = `
         
         <div class="pizza-list">
         <table class="table table-hover">
          
           <tr >
                    <td >${pizza.pizzaName}</td>
                    <td>${pizza.pizzaType}</td>
                    <td>
                        ${pizza.size}
                    </td>
                    <td>
                        ${pizza.price}
                    </td>
                    <td>
                    <span><button onClick="deletePizza(${pizza.pizzaId})">Delete</button>
                    <button onClick="updatePizza()">Update</button></span>
                    </td>

                </tr>
       
          
       
          
         </table>
       </div>
               

     
                `;
                placeholder.innerHTML += out;
            }

            var error = "Error username or password";
            if (result == error) {
                window.location = "/";
            } else {
            }
        });

}

Window.onload = onclick2();




function Register() {
    var FName = document.getElementById("fname").value;
    //alert(pizzaName);
    var LName = document.getElementById("lname").value;
    //alert(pizzaType);
    var CNumber = document.getElementById("cno").value;
    //alert(size);
    var Email = document.getElementById("email").value;
    //alert(price);

    const user = {
        firstName : FName,
        lastName: LName,
        email: Email,
        contactNumber: CNumber,
    };

    fetch("http://localhost:8080/user/addUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(user),
    })
        .then((res) => res.text())
        .then((result) => {
            console.log(result);
            alert(result);
            var error = "Error username or password";
            if (result == error) {
                window.location = "/";
            } else {
                // window.location="/category"
            }
        });

}


function GetUsers() {
    fetch("http://localhost:8080/user/getUser", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    })
        .then((res) => res.json())
        .then((result) => {
            let placeholder = document.querySelector("#user-list");
            let out = "";

            for (let user of result) {
               // console.log(user.pizzaName);

                out = `
         
         <div class="user-list">
         <table class="table table-hover">
          
           <tr class="user-list"  style="margin-left: 50px">
                    <td style = "width: 150px">${user.firstName}</td>
                    <td style = "width: 150px">${user.lastName}</td>
                    <td style = "width: 150px">
                        ${user.email}
                    </td>
                    <td style = "width: 150px">
                        ${user.contactNumber}
                    </td>
                    <td>
                    <button onClick="deleteUser()">Delete</button>
                    </td>
                    <td>
                    <button onClick="updateUser()">Update</button>
</td>

                </tr>
       
          
       
          
         </table>
       </div>
               

     
                `;
                placeholder.innerHTML += out;
            }

            var error = "Error username or password";
            if (result == error) {
                window.location = "/";
            } else {
            }
        });

}


function deletePizza(id) {
    alert(id)
    fetch("http://localhost:8080/pizza/deletepizza/"+id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    })
        .then((res) => res.text())
        .then((result) => {
            console.log(result);
            var error = "Error username or password";
            if (result == error) {
                window.location = "/";
            } else {
                // window.location="/category"
            }
        });

}

function deleteOrder(id) {
    alert(id)
    fetch("http://localhost:8080/order/"+id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    })
        .then((res) => res.text())
        .then((result) => {
            console.log(result);
            var error = "Error username or password";
            if (result == error) {
                window.location = "/";
            } else {
                // window.location="/category"
            }
        });

}
Window.onload = GetUsers();

