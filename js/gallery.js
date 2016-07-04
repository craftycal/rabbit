$(document).ready( function() {
  $.ajax({
    url: 'https://graph.facebook.com/1004199849640909/photos?access_token=1226018700756084|dCtw1DXZVD5R8cOnjttIH7Evzsk&fields=source,name&callback=?',
    type: 'GET',
    dataType: 'jsonp',
    success: function(result) {
      //console.log( result );
      for( i = 0; i < result.data.length; i++ ) {
        var newImage = $('<img />').addClass('gallerypic').attr( 'src', result.data[i].source).attr( 'title', result.data[i].name);
        $('#gallery').append(newImage);

      //  var newTitle = $('<h2 />').addClass('rabbitName').attr( 'src', result.data[i].source).attr( 'title', result.data[i].name);
      }
    },
    error: function(result) {
      //console.log( result );
    },
    timeout: 10000,
  });
});
