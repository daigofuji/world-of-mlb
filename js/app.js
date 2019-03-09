$(document).ready(function(){
  $(document).foundation();

  $.getJSON('js/2018-mlb-allplayers.json', function(players) {
    console.log(players);
  });


  $('#team-table').DataTable({
    paging: false,
    searching: false
  });

});
