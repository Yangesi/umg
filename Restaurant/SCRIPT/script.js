/*----------CARRITO DE COMPRAS--------*/

const ClickButton = document.querySelectorAll('.button') /*seleccionando los botones de add car*/
let carrito = [] /*usado para almacenar los item*/
const tbody = document.querySelector('.tbody')

ClickButton.forEach(btn => { btn.addEventListener('click', addCarItem)/*dandole el evento listener al boton*/
})

function addCarItem(e){ /*funcion definida para capturar la info de los div*/
  const button = e.target
  const item = button.closest('.product')
  const itemTitle = item.querySelector('.title').textContent;
  const itemPrice = item.querySelector('.price').textContent;
  const itemImg = item.querySelector('.imgp').src;
  
  const newItem ={ /*definiendo un objeto de la info*/
    title: itemTitle,
    price: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  addItemCarrito(newItem)
}

function addItemCarrito(newItem){/*definiendo la funcion encargada de agregarme los item*/
  const inputElement = tbody.getElementsByClassName('input-element')
  for(let i=0; i<carrito.length; i++){
    if(carrito[i].title.trim() === newItem.title.trim()){ /* se verifica si el producto ya esta en el carrito,
      si es asi, entonces ese producto nuevo ya no es agregado si no que solo se le aumenta la cantidad*/
      carrito[i].cantidad ++
      const inputValue = inputElement[i] /*haciendo que se sume el input number*/
      inputValue.value ++
      carritoTotal()
      return null
    }
  }

  carrito.push(newItem)
  renderCarrito()
}

function renderCarrito(){/*funcion para jalar los datos a la tabla*/
  tbody.innerHTML = ''
  carrito.map(item =>{
    const tr = document.createElement('tr')
    tr.classList.add('itemCarrito')
    const content = `
                    <th scope="row">1</th>
                    <td class="table-productos">
                        <img src=${item.img}>
                        <h4 class="title">${item.title}</h4>
                    </td>
                    <td class="table-precio">
                        <h4>${item.price}</h4>
                    </td>
                    <td class="table-cantidad">
                        <input type="number" min="1" value=${item.cantidad} class="input-element">
                        <button class="delete">X</button>
                    </td>`
    tr.innerHTML = content /*agrego el content dentro de las etiquetas tr*/
    tbody.append(tr) /*inserta el tr adentro de la etiqueta tbody*/

    tr.querySelector(".delete").addEventListener('click', removeItemCar) /*haciendo que el boton delete actue*/
    tr.querySelector(".input-element").addEventListener('change', sumaCantidad) /*haciendo que el input number actue cuando se aumenta*/
  })
  carritoTotal()
}

function carritoTotal(){/*funcion utilizada para calcular el total*/
  let total = 0
  const itemTotal = document.querySelector('.itemTotal')
  carrito.forEach((item) => {
    const precio = Number(item.price.replace("Q",'')) /* agarro el precio que esta como string y lo cambio a number quitandole la Q*/
    total = total + precio * item.cantidad
  })
  itemTotal.innerHTML = `Total Q${total}`/*imprimimos el valor*/
}

function removeItemCar(e){/*funcion que elimina un item usando el boton delete*/
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".itemCarrito")
  const title = tr.querySelector('.title').textContent;
  for(let i=0; i<carrito.length; i++){
    if(carrito[i].title.trim() === title.trim()){
      carrito.splice(i, 1)/*eliminando un elemento dentro del carrito segun la posicion*/
    }
  }
  tr.remove()
  carritoTotal()
}

function sumaCantidad(e){/*funcion utilizada para sumar con el boton input*/
  const sumaInput = e.target
  const tr = sumaInput.closest(".itemCarrito")
  const title = tr.querySelector('.title').textContent;
  carrito.forEach(item => {
    if(item.title.trim() === title){
      sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value; /*validando que no de error si el input toma un valor menor a 1*/
      item.cantidad = sumaInput.value
      carritoTotal()
    }
  })
}

/*--------------VALIDACION DEL LOGIN--------------*/

function validar()
		{
			let usuario = document.getElementById("user").value;/*obteniendo los valores de los input*/
			let Contraseña = document.getElementById("pass").value;	
/*validando datos de los input*/
			if(usuario == "admin" && Contraseña == "12345")
			{
        document.location.href="control_invent.html";
			}
			else
			{
				alert("Usuario y/o contraseña no validos");
			}
		}

/*--------------FORMULARIO DE COMPRAS----------------*/

function sumar(){/*funcion para calcular el total de un producto especifico*/

  let number1 = document.getElementById("cant").value;
  let number2 = document.getElementById("price").value;
  let result1 = number1 * number2;
  /*document.getElementById("total").value = number1 * number2;*/
  document.getElementById("textt").innerHTML= `Q${result1.toFixed(2)}`;

  let number3 = document.getElementById("cant2").value;
  let number4 = document.getElementById("price2").value;
  let result2 = number3 * number4;
  /*document.getElementById("total").value = number1 * number2;*/
  document.getElementById("textt2").innerHTML= `Q${result2.toFixed(2)}`;

  let number5 = document.getElementById("cant3").value;
  let number6 = document.getElementById("price3").value;
  let result3 = number5 * number6;
  
  /*document.getElementById("total").value = number1 * number2;*/
  document.getElementById("textt3").innerHTML= `Q${result3.toFixed(2)}`;

  let total = result1 + result2 + result3;
  document.getElementById("itemTotal").innerHTML= `Total Q${total.toFixed(2)}`;

}

/*-------VALIDACION DE CAMPOS------------*/

function validateFields2(){


  if (document.getElementById("proveedor").value == "") {
      alert("El campo CLIENTE no debe quedar vacío");
      return false;
  }

  if (document.getElementById("fecha1").value == "") {
      alert("El campo FECHA no debe quedar vacío");
      return false;
  }

  if (document.getElementById("mov").value == "") {
      alert("El campo MOVIMIENTO no debe quedar vacío");
      return false;
  }

}

/*--------------FORMULARIO DE VENTAS----------------*/

function sumar2(){/*funcion para calcular el total de un producto especifico*/

  let number1 = document.getElementById("cant4").value;
  let number2 = document.getElementById("price4").value;
  let result1 = number1 * number2;
  /*document.getElementById("total").value = number1 * number2;*/
  document.getElementById("textt4").innerHTML= `Q${result1.toFixed(2)}`;

  let number3 = document.getElementById("cant5").value;
  let number4 = document.getElementById("price5").value;
  let result2 = number3 * number4;
  /*document.getElementById("total").value = number1 * number2;*/
  document.getElementById("textt5").innerHTML= `Q${result2.toFixed(2)}`;

  let number5 = document.getElementById("cant6").value;
  let number6 = document.getElementById("price6").value;
  let result3 = number5 * number6;
  
  /*document.getElementById("total").value = number1 * number2;*/
  document.getElementById("textt6").innerHTML= `Q${result3.toFixed(2)}`;

  let total = result1 + result2 + result3;
  document.getElementById("itemTotal2").innerHTML= `Total Q${total.toFixed(2)}`;


}

/*-------VALIDACION DE CAMPOS------------*/

function validateFields(){


  if (document.getElementById("cliente").value == "") {
      alert("El campo CLIENTE no debe quedar vacío");
      return false;
  }

  if (document.getElementById("fecha2").value == "") {
      alert("El campo FECHA no debe quedar vacío");
      return false;
  }

  if (document.getElementById("mov").value == "") {
      alert("El campo MOVIMIENTO no debe quedar vacío");
      return false;
  }

}

/*--------------FORMULARIO DE EXISTENCIAS----------------*/

/*almacenando los productos con su existencia actualizada*/
var productos = [];

class Product {
  constructor(nomProduct, fecha, exisActual) {
    this.nomProduct = nomProduct,
      this.fecha = fecha,
      this.exisActual = exisActual
  }
}

function addProductArray(){

    var nomProduct = document.getElementById("nomProduct").value;
    var fecha = document.getElementById("fecha3").value;
    var exisActual = document.getElementById("exisActual").value;

    var product = new Product(nomProduct,fecha,exisActual);

    productos.push(product);

}

function populateTable(){

  

  var scriptTable = "";

  for (let index = 0; index < productos.length; index++) {
      scriptTable += "<tr>";
      scriptTable += "<td>" + productos[index].nomProduct + "</td>" ;
      scriptTable += "<td>" + productos[index].fecha + "</td>" ;
      scriptTable += "<td>" + productos[index].exisActual + "</td>" ;
      scriptTable += "</tr>";
  }

  document.getElementById("tbodyExis").innerHTML = scriptTable

}

function populateTable2(){

  

  var scriptTable = "";

      scriptTable += "<tr>";
      scriptTable += "<td>" + "Papas (paquetes)" + "</td>" ;
      scriptTable += "<td>" + "09/09/2021" + "</td>" ;
      scriptTable += "<td>" + "3" + "</td>" ;
      scriptTable += "</tr>";

  document.getElementById("tbodyExis").innerHTML = scriptTable

}

function addProduct(){

  // Validar campos

  if (validateFields3() == false){
return false;
  }

  // Agregamos el producto a un arreglo

  addProductArray();


  // Poblamos la tabla

  populateTable();


  // Limpiamos los campos
  //cleanControls();


}



/*---------VALIDACION DE CAMPOS------------*/

function validateFields3(){


  if (document.getElementById("nomProduct").value == "") {
      alert("El campo PRODUCTO no debe quedar vacío");
      return false;
  }

  if (document.getElementById("fecha3").value == "") {
      alert("El campo FECHA no debe quedar vacío");
      return false;
  }

  if (document.getElementById("exisActual").value == "") {
      alert("El campo EXISTENCIA ACTUAL no debe quedar vacío");
      return false;
  }

}










