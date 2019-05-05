$(document).ready(function(){
    $("#butt").click(function() {
        $.get("https://jsonplaceholder.typicode.com/photos", function(data){
            data.forEach(function(elem){
                let url = [$("a[id='url']").attr({
                    href:elem.url
                }), $("a[id='second']").attr({
                    href:elem.thumbnailUrl
                })];
            }); 
        });
    });
    $("#rapido").click(function(){
        $.get("https://jsonplaceholder.typicode.com/photos",function(data){
            data.forEach(function(elem){
               
            })
        })
    })
});


