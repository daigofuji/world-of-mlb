$(document).ready(function(){
  $(document).foundation();

  $.getJSON('js/2018-mlb-allplayers.json', function(players) {
    console.log('test');

    console.log(players);

  });

});