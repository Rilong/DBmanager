$(function () {
    $('.error-open').magnificPopup({
        items: {
            src: '#error-popup',
            closeBtnInside:true,
            type: 'inline'
        },

        closeMarkup: "<button title=\"Close (Esc)\" type=\"button\" class=\"mfp-close icon\"></button>",
        removalDelay: 300,
        mainClass: 'mfp-fade'

    });

    $('.table-remove').magnificPopup({
        items: {
            src: '#alert-popup',
            closeBtnInside:true,
            type: 'inline'
        },

        closeMarkup: "<button title=\"Close (Esc)\" type=\"button\" class=\"mfp-close icon\"></button>",
        removalDelay: 800,
        mainClass: 'mfp-scale'

    });


    $(".input-check > input").iCheck({
        checkboxClass: 'icheckbox_styling',
        radioClass: 'iradio_styling'
    });
});