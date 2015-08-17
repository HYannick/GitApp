$(function(){
    $(window).load(function(){

        //Tween de depart
        var tween = new TimelineMax ();

            tween.to(
                    '.preload',
                    1,
                    {
                        top: -1000,
                        opacity: 0,
                        ease: Circ.easeOut
                    }
                );
            tween.fromTo(".search", 1, {opacity:0, top: 500}, {opacity:1,top: 0, ease: Circ.easeOut});
        tween.to(
            'body',
            1,
            {
               overflow: 'auto'
            }
        );


    });
    //Scrollbar Custom, bug de la scrollbar qui ne s'affiche pas
    //$('.list-wrapper').perfectScrollbar();

});