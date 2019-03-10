$(document).ready(function(){

  var players = {}, teams, countries;

  $.getJSON( "js/2018-mlb-allplayers.json", function(data) {

    data.forEach(function(player, index) {
      if (!players[player.Tm]) players[player.Tm] = [];
      players[player.Tm].push(player);
    })

    showRoster('BOS');
  });


  $('#team-select').change(function(){
    showRoster($('#team-select').val());
  });

  function showRoster(team) {

    $('#roster').empty();

    players[team].forEach(function(player, index) {
      console.log(player)

      var $pl = $('<a class="player">').attr('data-tooltip', '').attr('href', player.url).attr('title', player.Name + ' (' + abbrToName(player.COUNTRY) + ') played ' + player.G + ' games with ' + player.WAR + ' WAR').append($('<img>').attr('src', 'img/flags/'+player.COUNTRY.toLowerCase()+'.png'));


      $('#roster').append($pl);
    });

    $('#roster').foundation();

  }


  function abbrToName(abbr) {
    abbrUp = abbr.toUpperCase();
    switch (abbrUp)
    {
      case "BOS": return "Boston Red Sox";
      case "NYY": return "New York Yankees";
      case "TBR": return "Tampa Bay Rays";
      case "TOR": return "Toronto Blue Jays";
      case "BAL": return "Baltimore Orioles";

      case "CLE": return "Cleveland Indians";
      case "MIN": return "Minnesota Twins";
      case "DET": return "Detroit Tigers";
      case "CHW": return "Chicago White Sox";
      case "KCR": return "Kansas City Royals";

      case "HOU": return "Houston Astros";
      case "OAK": return "Oakland Athletics";
      case "SEA": return "Seattle Mariners";
      case "LAA": return "Los Angeles Angels";
      case "TEX": return "Texas Rangers";

      case "ATL": return "Atlanta Braves";
      case "WSN": return "Washington Nationals";
      case "PHI": return "Philadelphia Phillies";
      case "NYM": return "New York Mets";
      case "MIA": return "Miami Marlins";

      case "MIL": return "Milwaukee Brewers";
      case "CHC": return "Chicago Cubs";
      case "STL": return "St. Louis Cardinals";
      case "PIT": return "Pittsburgh Pirates";
      case "CIN": return "Cincinnati Reds";

      case "LAD": return "Los Angeles Dodgers";
      case "COL": return "Colorado Rockies";
      case "ARI": return "Arizona Diamondbacks";
      case "SFG": return "San Francisco Giants";
      case "SDP": return "San Diego Padres";
      /* countries */
      case "US": return "United States";
      case "DO": return "Dominican Republic";
      case "VE": return "Venezuela";
      case "CU": return "Cuba";
      case "PR": return "Puerto Rico";
      case "CW": return "Curacao";
      case "MX": return "Mexico";
      case "CA": return "Canada";
      case "KR": return "South Korea";
      case "JP": return "Japan";
      case "CO": return "Colombia";
      case "DE": return "Germany";
      case "PA": return "Panama";
      case "BR": return "Brazil";
      case "AW": return "Aruba ";
      case "NL": return "Netherlands";
      case "AU": return "Australia";
      case "TW": return "Taiwan";
      case "SA": return "Saudi Arabia";
      case "NI": return "Nicaragua";
      case "HK": return "Hong Kong";
      case "VI": return "U. S. Virgin Islands";
      case "LT": return "Lithuania ";
      case "ZA": return "South Africa";
      case "GU": return "Guam";
      case "GB": return "United Kingdom";

      default: return null;
    }
  }


  // Pivot Table view

  $('#team-table').DataTable({
    paging: false,
    searching: false
  });


});


$(document).foundation();
