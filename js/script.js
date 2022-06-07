$(document).ready(function(){
    $('.btn-outline').click(function(e){
        e.preventDefault();
        $('.plan-list').find('.btn-outline').removeClass('btn-outline-focus');
        $(this).toggleClass('btn-outline-focus');
    })
    $('.member-1').click(function(){
        $('.plan-member').text("10000");
    })
    $('.member-2').click(function(){
        $('.plan-member').text("15000");
    })
    $('.member-3').click(function(){
        $('.plan-member').text("20000");
    })
    $('.member-4').click(function(){
        $('.plan-member').text("25000");
    })
    $('.member-5').click(function(){
        $('.plan-member').text(">25000");
    })

    $('.problem p').hide();
    $('.problem-list .item').click(function(){
        $(this).find('p').slideToggle();
        $(this).find('h3').toggleClass('strong').toggleClass('primary-color');
        $(this).find('.item-img').toggleClass('item-img-active');
        
        $(this).siblings('.item').find('.item-img').removeClass('item-img-active');
        $(this).siblings('.item').find('h3').removeClass('strong').removeClass('primary-color');
        $(this).siblings('.item').find('p').slideUp();
    })
})