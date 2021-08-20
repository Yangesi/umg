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
    tr.innerHTML = content /*agrego el content dentro de las etiquetastr*/
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