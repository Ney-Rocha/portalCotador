
$(document).ready(function(){
    $(document).ready(function() {
           
        

        let numSubestipulantes =  1;

            $('#addEst').on("click", function(){
                
            let subestipulante = '<div class="substruct mt-3" id="'+ numSubestipulantes +' ">' +
                    '<form action="#">' +
                    '<div class="card-title">' +
                    '<h4>Subestipulante' + ' '+ numSubestipulantes + '</h4>' +
                    '</div><!--card-title-->' +
                    '<div class="estipulante-add mt-3">' +
                    '<div class="row">' +
                    '<div class="col-lg-3">' +
                    '<div class="form-grou">' +
                    '<label for="cnpjEstipulante"  class="control-label label-strong label-primary">CNPJ</label>' +
                    '<input type="text" value="4161807900104" id="cnpjEstipulante" class="form-control cnpj" required>' +
                    '</div><!--form-group-->' +
                    '</div><!--col-->' +
                    '<div class="col-lg-3">' +
                    '<div class="form-group">' +
                    '<label for="razaoSocialEstipulante" class="control-label label-strong label-primary"> Razão Social:</label>' +
                    '<input type="text"  value="XPTO LTDA" disabled id="razaoSocialEstipulante" class="form-control " required>' +
                    '</div><!--form-group-->' +
                    '</div><!--col-->' +
                    '<div class="col-lg-6">' +
                    '<div class="form-group">' +
                    '<label for="segAtividadeEstipulante" class="control-label label-strong label-primary">Segmento:</label>' +
                    '<input type="text"  value="INDÚSTRIA" disabled id="segAtividadeEstipulante" class="form-control" required>' +
                    '</div><!--form-group-->' +
                    '</div><!--col-->' +
                    '<div class="col-md-12">' +
                    '<div class="card-title-button mt-2 mr-2">' +
                    '<button type="reset">' +
                    '<div class="text-warning mr-2">' +
                    '<i class="fas fa-eraser"></i>' +
                    '</div>' +
                    'Limpar' +
                    '</button>' +
                    '<button type="button" class="deleteButton">' +
                    '<div class="text-danger mr-2">' +
                    '<i class="fas fa-trash-alt"></i>' +
                    '</div>' +
                    'excluir' +
                    '</button>' +
                    '</div><!--car-title-button-->' +
                    '</div><!--col-12-->' +
                    '</div><!--row-->' +
                    '</div><!--estipulante-->' +
                    '</form>' +
                    '</div>';
                    numSubestipulantes++;
                $('#conteudo').append(subestipulante);
                
            })

            // Escuta o evento de clique no botão "Excluir" criado dinamicamente
            $('#conteudo').on('click', '.deleteButton', function() {
                Swal.fire({
                    title: '<h3 class="text-danger text-uppercase">Atenção!</h3>',
                    html: '<p> Você irá deletar o subestipulante de número <span>'+ $(this).closest('.substruct').attr('id') + '</span>, <strong> CNPJ <span>41.618.079/0001-04</span> </strong> Tem certeza que pretende continuar?.</p>',
                    imageUrl: 'Assets/img/icons/Error.png',
                    imageHeight:80,
                    imageWidth:80,
                    imageAlt: 'Exclamação de alerta!',
                    allowOutsideClick: false,
                    allowEscapeKey: false
                })
                $(this).closest('.substruct').remove();
                numSubestipulantes--;
            });
       
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