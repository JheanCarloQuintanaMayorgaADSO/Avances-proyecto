const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');

const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners() {
  elementos1.addEventListener('click', comprarElemento);
  carrito.addEventListener('click', eliminarElemento);
  vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
  e.preventdefault();
  if (e.target.classlist.contains('agregar.carrito')) {
    const elemento = e.target.parentElement.parentElement;
    leerDatosElemento(elemento) 
  }
}

function leerDatosElemento(elemento) {
  const infoelement = {
    imagen: elemento.querySelector('img').src,
    titulo: elemento.querySelector('h3').textContent,
    precio: elemento.querySelector('precio').textContent,
    id: elemento.querySelector('a').getAttribute('data-id')
  }
  insertarcarrito(infoelemento);
}

function insertarcarrito(elemento) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>
        <img src="${elemento.imagen}" width=100 >
    </td>
    <td>
        ${elemento.titulo}
    </td>
    <td>
        ${elemento.precio}
    </td>
    <td>
      <a href="#" class="borrar" data-id="${elemnto.id}">X </a> 
  `;

  lista.appendChild(row);
}

function eliminarElemento(e) {
  e.preventdefault();
  let elemento,
    elementoid;
  if (e.target.classlist.contains('borrar')) {
    e.target.parentElement.parentElement.remove();
    elemnto = e.target.parentElement.parentElement;
    elemntoid = elemento.querySelector('a').getAttribute('data-id')
  }
}

function vaciarCarrito() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
  return false;
}