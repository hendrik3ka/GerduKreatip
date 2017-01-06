    $(function () {
        
        var filterList = {
        
            init: function () {
            
                // MixItUp plugin
                // http://mixitup.io
                $('#portfoliolist').mixitup({
                    targetSelector: '.project',
                    filterSelector: '.filter',
                    effects: ['fade'],
                    easing: 'snap'
                });                
            
            }
        };
        
        // Run the show!
        filterList.init();
        
    });        