$(document).ready(function(){
    $('.btn-outline').click(function(e){
        e.preventDefault();
        $('.plan-list').find('.btn-outline').removeClass('btn-outline-focus');
        $(this).toggleClass('btn-outline-focus');
    })
    $('.member-1').click(function(){
        $('.plan-member').text("10000");
        $('.basic-fee').text("600")
        $('.standard-fee').text("1600")
    })
    $('.member-2').click(function(){
        $('.plan-member').text("15000");
        $('.basic-fee').text("800")
        $('.standard-fee').text("1800")
    })
    $('.member-3').click(function(){
        $('.plan-member').text("20000");
        $('.basic-fee').text("1000")
        $('.standard-fee').text("2000")
    })
    $('.member-4').click(function(){
        $('.plan-member').text("25000");
        $('.basic-fee').text("1200")
        $('.standard-fee').text("2200")
    })
    $('.member-5').click(function(){
        $('.plan-member').text(">25000");
        $('.basic-fee').text("1500")
        $('.standard-fee').text("3000")
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