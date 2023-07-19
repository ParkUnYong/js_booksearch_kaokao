$(document).ready(function(){
    $("#search").keydown(function(event) {
        if(event.keyCode=='13'){              
            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: {  query : $("#bookName").val() },
                headers :{Authorization: "KakaoAK 3e458aa03a05316eff8481d507dec7a9"}
              })
                .done(function( msg ) {
                  console.log(msg.documents[0].title);
                  console.log(msg.documents[0].thumbnail);
                  $( "p" ).append( "<strong>"+msg.documents[0].title+"</strong><br>" );
                  $( "p" ).append( "<img src='"+msg.documents[0].thumbnail+"''/>" );
                });
        }
    });
});