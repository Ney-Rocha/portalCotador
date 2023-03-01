$(document).ready(function(){

    $('#Download_PDF').on("click", function(){
        $('#Download_PDF').html("<span class='mr-2'><i class='fa fa-spinner fa-pulse'></i></span > carregando")
        // var activeNav = $('.sidebar-nav-item.active').find('a')
        // $('#resultContainer').children().removeClass('hide')
        var user = "Marcos";
        var date = new Date().toLocaleDateString();
        $('#resultContainer').print({
            addGlobalStyles : false,
            mediaPrint: {
                // Defina as propriedades de cabeçalho e rodapé
                    '@page': {
                    margin: "30mm",
                    size: "auto",
                    // Adicione o cabeçalho e o rodapé em cada página
                    'top': {
                        content: '<div class="cabecalho">Cabeçalho da página</div>'
                    },
                    'bottom': {
                        content: '<div class="rodape">Rodapé da página</div>'
                    }
                }
            },
            stylesheet : 'Assets/css/print.css',
            rejectWindow : false,
            noPrintSelector : ".no-print",
            iframe : true,                   
            prepend :"<div class='text-print'><div class='content-brand-print'><div class='brand-print'><img src='Assets/img/brand/Logo-Alba-Cabecalho-Site-768x360.png' class='responsive_img'></div></div><div class='mb-4'><span class='mr-1 '><i class='fas fa-exclamation-circle'></i></span> Este documento foi gerado pelo usuário <strong>" + user +"</strong> em <strong>" + date +"</strong> através da ferramenta <strong>Alba&copy;</strong> e só poderá ser utilizada para as devidas atividades de acordo com termo de aceitação de uso e termo de proteção e privacidade de dados, deixando este usuário com total responsabilidade sobre as devidas precauções de proteção, sob as penas previstas no CONTRATO e nas legislações aplicáveis.</div></div></div> ",
            append :"<div class='text-print'><div class='mb-4 mt-4'><span class='mr-1 '><i class='fas fa-exclamation-circle'></i></span> Este documento foi gerado pelo usuário <strong>" + user +"</strong> em <strong>" + date +"</strong> através da ferramenta <strong>Alba&copy;</strong> e só poderá ser utilizada para as devidas atividades de acordo com termo de aceitação de uso e termo de proteção e privacidade de dados, deixando este usuário com total responsabilidade sobre as devidas precauções de proteção, sob as penas previstas no CONTRATO e nas legislações aplicáveis.<div class='content-brand-print'><div class='brand-print'><img src='Assets/img/brand/Logo-Alba-Cabecalho-Site-768x360.png' class='responsive_img'></div></div> ",
        });
        $('#Download_PDF').html("<span class='mr-2'><i class='fa fa-file-download'aria-hidden='true'></i></span > Baixar PDF")
    })

       
        $('.cpf').mask('000.000.000-00');
        $('.cnpj').mask('00.000.000/0000-00');
        $('.percent').mask('##0%', {reverse: true});

        $('.celphones').mask(CelMaskBehavior, spOptions);
}); 
    
var CelMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
spOptions = {
    onKeyPress: function (val, e, field, options) {
        field.mask(CelMaskBehavior.apply({}, arguments), options);
    }
}