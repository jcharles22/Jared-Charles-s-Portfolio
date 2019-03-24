function windowSize(){
    resizeWindow();
    $(window).resize(function(){     
    resizeWindow();   
    });
}

function resizeWindow(){
    let winWidth = $(window).width();
    // console.log(winWidth);
    if(winWidth < 1265) {
        $('.footer').insertAfter($('.content'));
        } else if (winWidth > 1266) {
            $('.footer').appendTo($('.hero'));
        }
    };

$(windowSize);


