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

window.onload = function(){
  var li = document.querySelectorAll(".Menu_bar li");
  var card = document.querySelector(".flip-card-inner");
  for (var i = 0; i < li.length; i++) {
    var li = li[i];
    li.addEventListener("mouseover", function() {
      card.classList.add("vira");
    });
  
    li.addEventListener("mouseout", function() {
      card.classList.remove("vira");
    });
  }
}

var avatar = document.querySelector("#avatar");
avatar.addEventListener("click", function(){
  

})

buscando = function(){
  var busca = document.querySelector("#busca input");
  busca.classList.toggle("buscando");


};

