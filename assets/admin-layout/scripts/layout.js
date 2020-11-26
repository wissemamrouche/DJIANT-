
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

var modal = document.getElementById('mymodal');
	
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}  

$('button').on('click', function(){
$('button').removeClass('selected');
$(this).addClass('selected');
});






type="text/javascript">
function HandleBrowseClick(input_image)
{
    var fileinput = document.getElementById(input_image);
    fileinput.click();
}  


  