window.addEventListener('scroll', function() {
    var conteudos = document.querySelectorAll('.conteudo');
    
    for (var i = 0; i < conteudos.length; i++) {
      var conteudo = conteudos[i];
      var posicaoTop = conteudo.getBoundingClientRect().top;
      var posicaoJanela = window.innerHeight * 0.8; /* Define a posição da janela em que o elemento deve aparecer */
      
      if (posicaoTop < posicaoJanela) {
        conteudo.classList.add('aparecer');
      }
    }
  });

