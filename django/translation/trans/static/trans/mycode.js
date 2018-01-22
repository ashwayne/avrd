

$(function(){

//    $("button").on("click",function(){
//        var url="https://raw.githubusercontent.com/imtiazahmad007/resources/master/some_random_text.txt";
//        url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/samle_table.html"
//
//        var root = 'https://jsonplaceholder.typicode.com/comments';
//
//        $.ajax(root, {
//        dataType:"json",
//        method:"GET",
//        success:function(response){
//            var user = response[1].id;
//            var title = response[1].email;
//            var $info = $("<p></p>");
//            $info.text("id : " + user + " email : " + title )
//            $("div.main").append($info);
//            console.log(response)
//        },
//        error:function(request, errorType,errorMsg){
//            alert("error" + errorMsg);
//        },
//        data:{"postId":1},
//        complete: function(response){
//            $("div.main").append("Hola");
//        },
//        beforeSend: function(response){
//            $("div.main").append("Vamos");
//        },
//
//        });
//
//    })
        var root = "{% url 'a' %}";
    $("#btn1").on("click",function(){

        $.ajax(root, {
                dataType:"json",
                method:"POST",
                data:{action: "a"},
                success:function(response){
                    console.log(response)
                },
        });

    });


    $("#btn2").on("click",function(){

        $.ajax(root, {
                dataType:"json",
                method:"POST",
                data:{action: "b"},
                success:function(response){
                    console.log(response)
                },
        });

    });

});
