$('.panel-tab').on('click', function(event){
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
