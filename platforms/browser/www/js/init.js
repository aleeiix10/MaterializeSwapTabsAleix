(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tabs').tabs({"swipeable":true});
    $("#listNoticies").click(function() {
      $.ajax({
        method: "GET",
        url: "https://api.spaceflightnewsapi.net/v3/articles?_limit=9",
        dataType: "json",   // necessitem això pq ens retorni un objecte JSON
        
      }).done(function (msg) {
        for(let item in msg) {
          let elem = $("<a href='#!' class='collection-item'>"+msg[item].title+"</a>");
          $(".collection").append(elem);
          $(elem).click(function () {
            $('.tabs').tabs('select','test-swipe-2');
            console.log(msg[item]);
            $('#test-swipe-2').empty();
            $('#test-swipe-2').append("<h1>"+msg[item].title+"</h1><br><p>"+msg[item].summary+"</p><img src="+"'"+msg[item].imageUrl+"'"+"><br>");
            let readMore = $("<a href='#!'>Read more...</a>");
            $('#test-swipe-2').append(readMore);
            $(readMore).click(function(){
              window.open(msg[item].url,'_system'); return false;
            });
          });
          $('.row').append("<div class='col s12 m6 l4'><h1>"+msg[item].title+"</h1><br><p>"+msg[item].summary+"</p><img src="+"'"+msg[item].imageUrl+"'"+"><br><a href='#!'>Read more...</a></div>");
            let readMore2 = $("<a href='#!'>Read more...</a>");
            $(readMore2).click(function(){
              window.open(msg[item].url,'_system'); return false;
            });
        };
      }).fail(function () {
        alert("ERROR");
      });
    })
  }); // end of document ready
})(jQuery); // end of jQuery name space
document.addEventListener('deviceready', onDeviceReady, false);
 
function onDeviceReady() {
    // Cordova is now initialized. Have fun!
 
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
}




