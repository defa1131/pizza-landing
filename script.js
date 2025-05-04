let productInput = $('#product__input');
productInput.attr('placeholder', "Имя");

$(document).ready(function () {
    const currentYear = new Date().getFullYear();
    $('.footer__rights').each(function () {
        let text = $(this).text();
        let newText = text.replace(/\d{4}/, currentYear);
        $(this).text(newText);
    });
});

$('#create__order').click(function () {
    let hasError = false;
    let addressInput = $('#address__input');
    let phoneInput = $('#phone__input');

    $('.order__base-input').css('border-color', 'rgb(119, 94, 49)');
    if (!productInput.val().match(/^[А-Я][а-я]+\s*$/)) {
        productInput.css('border-color', 'red');
        hasError = true;
    }

    if (!addressInput.val().match(/^[а-яА-Я0-9,\.\s]+$/)) {
        addressInput.css('border-color', 'red');
        hasError = true;
    }

    if (!phoneInput.val().match(/^\+7\s\(9\d{2}\)\s\d{3}-\d{2}-\d{2}/)) {
        phoneInput.css('border-color', 'red');
        hasError = true;
    }

    if (!hasError) {
        alert('Спасибо за заказ');

        productInput.val('');
        addressInput.val('');
        phoneInput.val('');

        $('.order__base-input').css('border-color', 'rgb(119, 94, 49)');
    }
})

$(document).ready(function () {
    $('#burger').on('click', function () {
        $('#menu').addClass('open');
    });

    $('#menu *').on('click', function () {
        $('#menu').removeClass('open');
    });
});