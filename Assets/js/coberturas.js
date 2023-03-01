
$(document).ready(function(){
    //troca de tipo de perfil (uniforme/ Escalonável)
    $('ul.type-profile li a').click(function(i){
        $(this).parent().siblings().children().removeClass('active');
        $(this).parent().parent().parent().siblings().children().removeClass('active');
        $(this).addClass('active');
        var id = $(this).data('id');    
        var content = $(this).parent().parent().parent().siblings().children().filter(function() { 
            return $(this).data("id") == id 
        });    
        content.addClass('active');
    });

    

    // Select prêmio
    $(document).ready(function(){
        $('.calc-btn-group li').on('click', function(){
            $(this).siblings().removeClass('active')
            $(this).addClass('active')
        })
    });

     // mask
     $('.cpf').mask('000.000.000-00');
     $('.cnpj').mask('00.000.000/0000-00');
     $('.percent').mask('##0%', {reverse: true});
     $('.celphones').mask(CelMaskBehavior, spOptions);
     $('.cep').mask('00000-000');
     $('.date').mask('00/00/0000');

});

//  SWIRCHERY
var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

elems.forEach(function(html) {
    var switchery = new Switchery(html,  {color: '#00A651' });
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