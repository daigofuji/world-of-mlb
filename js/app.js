$(document).ready(function(){

  $.getJSON('js/2018-mlb-allplayers.json', function(players) {
    console.log(players);
  });


  $('#team-table').DataTable({
    paging: false,
    searching: false
  });

});

$(document).foundation();
