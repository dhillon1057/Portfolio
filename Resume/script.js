$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
           $('.navbar').addClass("sticky"); 
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });
    var typed=new Typed(".typing",{
        strings:["Student.", "Programmer.", "Front-end Developer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop:true
    });
    var typed=new Typed(".typing-2",{
        strings:["Student.", "Programmer.", "Front-end Developer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop:true
    });
})