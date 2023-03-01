
$(document).ready(function(){
    $(document).ready(function() {
           
        Swal.fire({
            title: '<h3 class="text-danger text-uppercase">Atenção!</h3>',
            html: '<p> O subestipulante de número <span> 2 </span>, <strong> CNPJ <span>41.618.079/0001-04</span> </strong> está com restrição. Para continuar, exclua o estipulante ou mude o CNPJ.</p>',
            imageUrl: 'Assets/img/icons/Error.png',
            imageHeight:80,
            imageWidth:80,
            imageAlt: 'Exclamação de alerta!',
            allowOutsideClick: false,
            allowEscapeKey: false
        })
       
    });

    // on / off select congenere
    $('input[type="radio"][name="typesecurity"]').on('change', function(){
        var typeSecurity = $('input[name="typesecurity"]:checked').val()
        if ( typeSecurity == 'newCongenere'){
            $('#selectCongenere').removeClass('hide')
            $('#selectCongenere').addClass('animate__fadeInRight')
        } else {
            $('#selectCongenere').addClass('hide')
            $('#selectCongenere').removeClass('animate__fadeInRight')
        }
    })
     
     //  chosen plugin
     $(".chosen-select").chosen({
            disable_search_threshold: 2,
            width: "95%"

    });

      // mask
    $('.cpf').mask('000.000.000-00');
    $('.cnpj').mask('00.000.000/0000-00');
    $('.percent').mask('##0%', {reverse: true});
    $('.celphones').mask(CelMaskBehavior, spOptions);
    $('.cep').mask('00000-000');
    $('.date').mask('00/00/0000');

});

//   MASk
var CelMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
spOptions = {
    onKeyPress: function (val, e, field, options) {
        field.mask(CelMaskBehavior.apply({}, arguments), options);
    }

};