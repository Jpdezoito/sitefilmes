// Adiciona um evento de clique suave para os links do índice
document.querySelectorAll('#indice a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Seleciona todos os elementos de lista dentro da div #lista-filmes
  const listaFilmes = document.getElementById('lista-filmes');
  const elementosLista = listaFilmes.querySelectorAll('ul');
  
  // Itera sobre cada elemento da lista
  elementosLista.forEach(lista => {
    // Obtém todos os itens da lista
    const itensLista = Array.from(lista.querySelectorAll('li'));
  
    // Ordena os itens da lista em ordem alfabética pelo texto do link
    itensLista.sort((a, b) => {
      const textoA = a.querySelector('a').textContent.toLowerCase();
      const textoB = b.querySelector('a').textContent.toLowerCase();
      return textoA.localeCompare(textoB);
    });
  
    // Remove os itens da lista original
    lista.innerHTML = '';
  
    // Adiciona os itens ordenados de volta à lista
    itensLista.forEach(item => lista.appendChild(item));
  });
  
  // Função para filtrar os filmes pela barra de pesquisa
  function filtrarFilmes() {
    const termoPesquisa = document.getElementById('barra-pesquisa').value.toLowerCase();
    const listaFilmes = document.getElementById('lista-filmes');
    const elementosLista = listaFilmes.querySelectorAll('li');
    elementosLista.forEach(item => {
      const tituloFilme = item.querySelector('a').textContent.toLowerCase();
      if (tituloFilme.includes(termoPesquisa)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  // Adiciona o evento de input à barra de pesquisa
  document.getElementById('barra-pesquisa').addEventListener('input', filtrarFilmes);
  
  // Função para criar o índice de A a Z
  function criarIndice() {
    const indiceContainer = document.getElementById('indice');
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    letras.forEach(letra => {
      const link = document.createElement('a');
      link.href = '#' + letra;
      link.textContent = letra;
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.getElementById(letra);
        target.scrollIntoView({ behavior: 'smooth' });
      });
      indiceContainer.appendChild(link);
    });
  }
  
  // Chama as funções para criar o índice e ordenar os filmes
  criarIndice();
  ordenarFilmes();