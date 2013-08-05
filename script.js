$('.panel-tab').on('click', function(event){
    // $('.panel').css({
    
    // background: '#e00',
    // height: '400px'
    
    // });

    event.preventDefault();
    $('.panel-stage').slideToggle('slow', function(event){
        if($(this).is(':visible')){
            $('.panel-tab').html('Close ▲');
        } 
        else {
            $('.panel-tab').html('Open ▼');
        }
    });
});
