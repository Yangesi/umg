const ClickButton = document.querySelectorAll('.button')
let carrito = []

ClickButton.forEach(btn => { btn.addEventListener('click', addCarItem)
})

function addCarItem(e){
  const button = e.target
  const item = button.closest('.product')
  const itemTitle = item.querySelector('.title').textContent;
  const itemPrice = item.querySelector('.price').textContent;
  const itemImg = item.querySelector('.imgp').src;
  
  const newItem ={
    title: itemTitle,
    price: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  addItemCarrito(newItem)
}

function addItemCarrito(newItem){
  carrito.push(newItem)
  renderCarrito()
}

function renderCarrito(){
  console.log(carrito)
}