   $(window).on('scroll',function(){
      if($(window).scrollTop()){
          $('nav').addClass('nav-color');
          $('.logo-b').css({'visibility':'hidden'});
          $('.logo').css({'color':'#fff','margin-bottom':'0rem','font-size':'2rem'});
          $('.container').css({'padding-top':'0','transition':'1s'});
          $('.b').css({'opacity':'1','transition':'.5s'});
          $('.nav-link').removeClass('nav-wo-s');
          $('.nav-item').addClass('hvr-w-s');

    }

      else{
        $('nav').removeClass('nav-color');
        $('.logo-b').css({'visibility':'visible'});
          $('.logo').css({'color':'#FF9900','font-size':'3.7rem'});
          $('.container').css('padding-top','3rem');
          $('.b').css({'opacity':'0','transition':'0s'});
          $('.nav-link').addClass('nav-wo-s');
          $('.nav-item').removeClass('hvr-w-s');
      }
    });

  
