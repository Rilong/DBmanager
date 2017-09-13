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

    $(".input-check > input").iCheck({
        checkboxClass: 'icheckbox_styling',
        radioClass: 'iradio_styling'
    });
});