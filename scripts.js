$(function(){
   var menuBtn= $('.menu-icon'),
       menu= $('.frente nav ul');

 menuBtn.click(function() {
    
 if(menu.hasClass('show'))
 {
    menu.removeClass('show');
 }
 else{
    menu.addClass('show');
 }

 });

});