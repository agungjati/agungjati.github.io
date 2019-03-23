(function(){
    $("#explorer").click((e) => {
        $(".explorer").toggle(100)
        if($(e.currentTarget).attr("show") == "true"){  
            $(".editor").attr("style", "width: calc(100% - 50px)")
            $(e.currentTarget).attr("show", "false")
        }else{
            $(".editor").attr("style", "width: calc(100% - 350px)")
            $(e.currentTarget).attr("show", "true")
            
        }
    })
})()