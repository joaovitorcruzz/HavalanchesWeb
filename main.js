const formPedido = document.getElementById('formPedido');
const pedidosContainer = document.getElementById('pedidos');
let pedidos = [];

formPedido.addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const hamburguer = document.getElementById('hamburguer').value;
  const quantidade = document.getElementById('quantidade').value;
  const adicional = document.getElementById('adicional').value;

  const pedido = {
    id: Date.now(),
    nome,
    hamburguer,
    quantidade,
    adicional
  };

  pedidos.push(pedido);
  renderPedidos();
  formPedido.reset();
});
 
function renderPedidos() {
  pedidosContainer.innerHTML = '';
  pedidos.forEach(pedido => {
    const pedidoElemento = document.createElement('div');
    pedidoElemento.classList.add('pedido');
    pedidoElemento.innerHTML = `
      <h3>${pedido.nome}</h3>
      <p>Hamburguer: ${pedido.hamburguer}</p>
      <p>Quantidade: ${pedido.quantidade}</p>
      <p>Adicional: ${pedido.adicional}</p>
      <button class="editar-btn" onclick="editarPedido(${pedido.id})">Editar Pedido</button>
      <button onclick="excluirPedido(${pedido.id})">Finalizar Pedido</button>
    `;
    pedidosContainer.appendChild(pedidoElemento);
  });
}

function excluirPedido(id) {
  pedidos = pedidos.filter(pedido => pedido.id !== id);
  renderPedidos();
}

function editarPedido(id) {
  const pedidoParaEditar = pedidos.find(pedido => pedido.id === id);
  if (!pedidoParaEditar) return;

  const novoNome = prompt('Digite o novo nome:', pedidoParaEditar.nome);
  const novoHamburguer = prompt('Digite o novo hamburguer:', pedidoParaEditar.hamburguer);
  const novaQuantidade = prompt('Digite a nova quantidade:', pedidoParaEditar.quantidade);
  const novaAdicional = prompt('Digite um novo adicional:', pedidoParaEditar.adicional);

  if (novoNome && novoHamburguer && novaQuantidade && novaAdicional) {
    pedidoParaEditar.nome = novoNome;
    pedidoParaEditar.hamburguer = novoHamburguer;
    pedidoParaEditar.quantidade = novaQuantidade;
    pedidoParaEditar.adicional = novaAdicional;
    renderPedidos();
  }
}
