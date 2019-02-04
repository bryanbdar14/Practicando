$(function () {
    $('#triple').tooltip()
});

$('#triple').on('click',function(){
    $('.sidebar').toggle();
    if($('.cuerpo div').hasClass('arreglado')){
        $('.cuerpo div.descripcion').removeClass('arreglado');
    }
    else{
        $('.cuerpo div.descripcion').addClass('arreglado');
    }
    
});
$('.flecha').on('click',function(){
    if($('.crecer li').hasClass('activado')){
        $('.crecer li.date2').slideDown(0);
        $('.crecer li').removeClass('activado');
        $('.descripcion div div div table.first-table').removeClass('mejorado')
    }
    else{
        $('.crecer li.date2').slideUp(0);
        $('.crecer li.date2').addClass('activado')
        $('.descripcion div div div table.first-table').addClass('mejorado')
    }
});
$('.menu li:has(ul)').on('click',function(e){
    e.preventDefault();
    if($(this).hasClass('activado')){
        $(this).removeClass('activado');
        $(this).children('ul').slideUp();
    }
    else{
        $('.menu li ul').slideUp();
        $('.menu li').removeClass('activado');
        $(this).addClass('activado');
        $(this).children('ul').slideDown();
    }
});
/*
$('.menu li a').on('click',function(){
    if($(this).parents('li').hasClass('activado') ==true){
        $('.menu li').removeClass('activado');
    }else{
        $('.menu li').removeClass('activado');
        $(this).parents('li').addClass('activado');
    }
});*/