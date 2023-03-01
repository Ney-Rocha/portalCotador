
$(document).ready(function(){
    
    // exibir/ esconder parte do form limpando campos
    $('input[type="radio"][name="cadEdit"]').on('change', function(){
        var editCadastro = $('input[name="cadEdit"]:checked').val();
        if(editCadastro == 'data-yes'){
            $('#add-data').removeClass('animate__fadeInUp')
            $('#add-data').addClass('hide')                     
            $('#add-data .form-control').each(function (index){
                ($(this).val(" "))
            })
        } else if (editCadastro == 'data-no'){  
            $('#add-data').removeClass('hide')
            $('#add-data').addClass('animate__fadeInUp')
        } 
    })

       // mask
       $('.cpf').mask('000.000.000-00');
       $('.cnpj').mask('00.000.000/0000-00');
       $('.percent').mask('##0%', {reverse: true});
       $('.celphones').mask(CelMaskBehavior, spOptions);
       $('.cep').mask('00000-000');
       $('.date').mask('00/00/0000');
       $('.money2').mask("#.##0,00", {reverse: true});
       $('.day').mask('00');


        // Remove disabled Dados Cotação
       $(".js-edit").on('click', function(){          
            $(this).parents().eq(2).find('input').prop('disabled', false)
            $(this).prop('hidden', true)
            $(this).siblings('button').prop('hidden', false)
       })

         // Cancela Operação mantém valor anterior
        $(".js-cancel").on('click', function(e){
            $(this).prop('hidden', true)
            $(this).siblings('button.js-save').prop('hidden', true)
            $(this).siblings('button.js-edit').prop('hidden', false)
            $(this).parents().eq(2).find('input').prop('disabled', true)
            
       })

        // Salvar Operação novo valor
        $(".js-save").on('click', function(){
            $(this).parents().eq(2).find('input').prop('disabled', true)
            $(this).prop('hidden', true)
            $(this).siblings('button.js-cancel').prop('hidden', true)
            $(this).siblings('button.js-edit').prop('hidden', false)
            swal.fire({
                title: '<h3 class="text-danger text-uppercase">Atenção!</h3>',
                html: '<p>Ao alterar esta informação você irá subscrever suas preferências anteriores. <br/> Deseja continuar?</p>',
                imageUrl: '../Assets/img/icons/Error.png',
                allowOutsideClick: false,
                allowEscapeKey: false,
                showCancelButton: true,
                confirmButtonColor: '#2B2869',
                cancelButtonColor: '#eb3223',
                confirmButtonText: 'Sim!',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Editado!',
                        'Informação alterada com sucesso.',
                        'success'
                    )
                } else if (result.dismiss === Swal.DismissReason.cancel){
                    Swal.fire(
                        'Cancelado',
                        'Alteração cancelada:',
                        'error'
                    )
                    $(this).siblings('button.js-cancel').click()
                }

            })
       })
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