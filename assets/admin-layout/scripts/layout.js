
	$("#showa").on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    $("#a").show();
    $("#b").hide();
});

$("#showb").on('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    $("#b").show();
    $("#a").hide();
});
$(document).ready(function() {
$(".portlet-body").click(function () {
    $(".portlet-body").removeClass("active");
    $(this).addClass("active");   
});
});


function toggle4(showHideDiv) {
       var ele = document.getElementById(showHideDiv);
       if(ele.style.display == "block") {
              ele.style.display = "none";
       }
       else {
              ele.style.display = "block";
       }
      
}

$('#show').on('click', function () {
    $('.center').show();
    $(this).hide();
})


  