$(".clickable").on("click", function(event){
    $(this).parent().siblings().removeClass("selected can_move from to can_kill");
    var $coin=$(this).attr('id')
    var $box=$(this).parent().attr('id')
    
    $("#"+$box).addClass("selected");
    if($coin.includes("bp")){
      if($box.includes("7")){
        
        if($("#"+$box.charAt(0)+($box.charAt(1)-1)).hasClass("available"))
          $("#"+$box.charAt(0)+($box.charAt(1)-1)).addClass("can_move");
        if($("#"+$box.charAt(0)+($box.charAt(1)-1)).hasClass("available"))
          $("#"+$box.charAt(0)+($box.charAt(1)-2)).addClass("can_move");

        if(!($("#"+String.fromCharCode($box.charCodeAt(0)+1)+($box.charAt(1)-1)).hasClass("available")))
          $("#"+String.fromCharCode($box.charCodeAt(0)+1)+($box.charAt(1)-1)).addClass("can_kill");
        if(String.fromCharCode($box.charCodeAt(0)-1)!="`" && !($("#"+String.fromCharCode($box.charCodeAt(0)-1)+($box.charAt(1)-1)).hasClass("available")))
          $("#"+String.fromCharCode($box.charCodeAt(0)-1)+($box.charAt(1)-1)).addClass("can_kill");

        $(".can_move").on("click", function(event){
            
            $("#"+$coin).parent().removeClass("selected");
            $("#"+$coin).parent().addClass("from");
            $(".can_move").removeClass("can_move");
            $(this).addClass("to");
            $("#"+$coin).detach().appendTo(this);
            
            if($("#"+String.fromCharCode($(this).attr('id').charCodeAt(0)+1)+($(this).attr('id').charAt(1)-1)).children().attr('id')=="wk")
            $("#"+String.fromCharCode($(this).attr('id').charCodeAt(0)+1)+($(this).attr('id').charAt(1)-1)).addClass("check");
            $coin=null;
            event.stopPropagation();
            return;
        });
      }else{

        if($("#"+$box.charAt(0)+($box.charAt(1)-1)).hasClass("available"))
          $("#"+$box.charAt(0)+($box.charAt(1)-1)).addClass("can_move");

        if(!($("#"+String.fromCharCode($box.charCodeAt(0)+1)+($box.charAt(1)-1)).hasClass("available")))
          $("#"+String.fromCharCode($box.charCodeAt(0)+1)+($box.charAt(1)-1)).addClass("can_kill");
        if(String.fromCharCode($box.charCodeAt(0)-1)!="`" && !($("#"+String.fromCharCode($box.charCodeAt(0)-1)+($box.charAt(1)-1)).hasClass("available")))
          $("#"+String.fromCharCode($box.charCodeAt(0)-1)+($box.charAt(1)-1)).addClass("can_kill");
          
        $(".can_move").on("click", function(event){
            $("#"+$coin).parent().removeClass("selected");
            $("#"+$coin).parent().addClass("from");
            $(".can_move").removeClass("can_move");
            $(this).addClass("to");
            $("#"+$coin).detach().appendTo(this);

            if($("#"+String.fromCharCode($(this).attr('id').charCodeAt(0)+1)+($(this).attr('id').charAt(1)-1)).children().attr('id')=="wk")
            $("#"+String.fromCharCode($(this).attr('id').charCodeAt(0)+1)+($(this).attr('id').charAt(1)-1)).addClass("check");
            $coin=null;
            event.stopPropagation();
            return;
        });

        $(".can_kill").on("click", function(event){
            $("#"+$coin).parent().removeClass("selected");
            $("#"+$coin).parent().addClass("from");
            $(".can_kill").removeClass("can_kill");
            $(this).addClass("to");
            $("#"+$(this).children().attr('id')).detach();
            $("#"+$coin).detach().appendTo(this);

            if($("#"+String.fromCharCode($(this).attr('id').charCodeAt(0)+1)+($(this).attr('id').charAt(1)-1)).children().attr('id')=="wk")
            $("#"+String.fromCharCode($(this).attr('id').charCodeAt(0)+1)+($(this).attr('id').charAt(1)-1)).addClass("check");
            $coin=null;
            event.stopPropagation();
            return;
        });
      }
  }
  event.stopPropagation();
});