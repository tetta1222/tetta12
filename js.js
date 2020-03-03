      
// $('.fade_in').on('inview', function(event, isInView) {
// if (isInView) {
// element is now visible in the viewport
// $('fade_in').addClass('bounce animated')
// }
// });



$(document).ready(function () {
$(".contact_child").submit(function (event) {
var name = $("#userName").val();
var email = $("#email").val();
var naiyou = $("#naiyou").val();
$.ajax({
url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdV1-Mtt2qJbRGa2hQJb2sJg7YkGTF5UPtGEJBZ6eBc5Crm4w/formResponse?embedded=true",
data: {"entry.485428648": name, "entry.879531967": email, "entry.2037290299":naiyou, },
type: "POST",
dataType: "xml",
statusCode: {
 0: function() {
        window.alert("お問い合わせありがとうございます。");
        window.location.href="index.html"
 },
 200: function() {
     alert("errorMsg")
 }
}
})
event.preventDefault();
});
});


        


$(function(){
    $('section > div').on('inview', function(){
        $(this).addClass('fadein_ani');
    });
});


/*$(function(){
    $('a').smoothScroll({speed:2000, offset:-50});
    
    $('p').on('inview', function(event, isInView) {
    if (isInView) {
    // element is now visible in the viewport
    $(this).addClass('bounce animated')
    }
    });
})*/