$(document).ready(function () {
    $('.portfolio-item a img').on('click', function () {
        console.log('asd');
        $(this).toggleClass('border-active');
    });

    $('#generate').on('click', function () {
        let id = $('#insert-your-id').val();
        quantitySelected = $('.portfolio-item a img.border-active').length;

        switch (true) {
            case id === '':
                Swal.fire({
                    type: "warning",
                    title: "Atención!",
                    html: 'Debes ingresar tu ID para continuar...',
                    showConfirmButton: false,
                    timer: 3000
                });
                break;
            case quantitySelected === 0:
                Swal.fire({
                    type: "warning",
                    title: "Atención!",
                    html: 'Debes seleccionar al menos 1 item...',
                    showConfirmButton: false,
                    timer: 3000
                });
                break;
            default:
                Swal.fire({
                    title: "ID: " + id,
                    html: "Su pedido llegará a su cuenta en: 5 minutos.<br>Cantidad de items: " + quantitySelected + "<br>Donación #: 15019",
                    type: "success",
                    footer: 'Ezequiel',
                    confirmButtonText: "Cerrar"
                });
        }
    })
});