document.addEventListener('DOMContentLoaded', function () {
    particlesJS.load('particles-js', 'javascripts/particles-config.json', function () {
        return console.log('Particles.js configuracion lista');
    });
    consoleHello();
});

/* Chequea la consola :)
*  Mostrar creditos en consola
**/
function consoleHello() {
    var userAgent = navigator.userAgent.toLowerCase();
    var supported = /(chrome|firefox)/;

    if (supported.test(userAgent.toLowerCase())) {
        var dark = ['padding: 18px 5px 16px', 'background-color: #171718', 'color: #e74c3c'].join(';');

        if (userAgent.indexOf('chrome') > -1) {
            dark += ';';
            dark += ['padding: 18px 5px 16px 40px', 'background-image: url(https://lh3.googleusercontent.com/-4a-pj9qfSxw/W6GUo5Uz6pI/AAAAAAAAAUY/5nnWikFU7r0DOV8epLwHv7-ul770niYFwCEwYBhgLKs4DAL1OcqzWo64aSDcj1D6FhFJylY5k05apLjlX0fnl4dxKEdbXA-_MZtwnNmxPAKKh0ogFfT2ZCf2h5EOyaQh1h6437ZkBK-IZt53sk9iWTcbDI93sn2aQS9YVvNRv7uhgeMCkQ0I7YdebjH1ZI73-XB0upoKo8J6pEGYaHF_eCsjsDtfK9dVMtARMbcwM4zWAUh5B_vCZhHd-lCwEpBqYhFk-nxRm3H69Y6odBxrhHPdfzneGYqHJ3-cyPA_2eP4Q4IXngnEPhrzhsgXtUMfEdHN6CYtXfKuEPqM2x1lXR7vgNuoQT3mCKqUVHJLRS8uwc-IGXuGgNbx00SU2BF9kxqEMt-LO0zezVj48qKGQPa2AziyT0fvphIe5cqxgvgMMflmDM_xiRv0Lg9qBWMN1KvTGyWtoLb_DxHdflkzyPxKByyoJzi6K2XTcCBE_JdqNcaeIJNgzLjXNRruDxeRnfzx6PgPEzAQCZYCOds9ua5GNJynYaa2jxkDgg8SDmaOvrDkdto9turCKAJoSsv1jh8-AiNgqXQQIREaIc7Y7VFrOhC3o8_8MRPn1oQS9RiTkNP4MyfB4GGd_YaVR-mIANDQjPneB5ufMNOqM8K8ZMOOn2PYF/w139-h140-p/WhatsApp%2BImage%2B2018-09-11%2Bat%2B21.28.10.jpeg)', 'background-position: 10px 9px', 'background-repeat: no-repeat', 'background-size: 30px 30px'].join(';');
        }

        var red = ['padding: 18px 5px 16px', 'background-color: #e74c3c', 'color: #ffffff'].join(';');

        var spacer = ['background-color: transparent'].join(';');

        var msg = '%c Creado por 🤠 GNR %c https://www.gonzalorocca.com %c';

        console.log(msg, dark, red, spacer);
    } else if (window.console) console.log('creado por gnr amiguito - https://www.gonzalorocca.com');
}