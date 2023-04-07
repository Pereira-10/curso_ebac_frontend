$(document).ready(function(){
  $('form button').click(function(){
  })

  $('form').on('submit', function(e) {
      e.preventDefault();

      const inptarefa = $('#tarefa').val();
      const novaTarefa = $('<li></li>');
      $(novaTarefa).appendTo("ul");
      $(`<div id="lista-de-tarefas"> ${inptarefa} </div> `).appendTo(novaTarefa);

      $(novaTarefa).click(function() {

          $(this).css('text-decoration', 'line-through');

      })
      
  });    

});


