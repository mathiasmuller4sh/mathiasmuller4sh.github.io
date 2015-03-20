var isMobile = {
    Android: function() {
        return /Android/i.test(navigator.userAgent);
    },
    BlackBerry: function() {
        return /BlackBerry/i.test(navigator.userAgent);
    },
    iOS: function() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    },
    Windows: function() {
        return /IEMobile/i.test(navigator.userAgent);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
};

function getOSContent() {
    var button = '';
    var instructions = null;
    var getDI = document.getElementById('downloadInstructions');
    var getDIContainer = document.getElementById('downloadInstructionsContainer');
    var getButtonContainer = document.getElementById('downloadButtonContainer');

    if(isMobile.iOS()) {
        button = //'<a href="./app/C21_mobile_in_house_app.mobileprovision"> Fichier de sécurité</a> ' +
                 '<a href="itms-services://?action=download-manifest&amp;url=https://centurynetrecette.naxos.fr/CnetMobile/app/Info.plist"> ' +
                 '<img src="./img/apple.svg" width="16" height="16"/>' +
                 'Installer l\'application' +
                 '</a> ';
        instructions = 'Pour l\'installation iOS veuillez accepter la notification de sécurité qui apparait lors du lancement de l\'application.'
    } else if(isMobile.Android()) {
//        button = '<a class="android" href="https://play.google.com/store/apps/details?id=fr.naxos.c21mobile">'+
//                 '<img alt="Télécharger depuis Google Play" '+
//                 ' src="https://developer.android.com/images/brand/fr_generic_rgb_wo_45.png" />'+
//                 '</a>'

        button = '<a href="./app/C21mobile.apk">' +
                 '<img src="./img/android.svg" width="16" height="16"/>' +
                 'Installer l\'application' +
                 '</a> '
    } else if(isMobile.Windows()) {
        button = '<a href="./app/NAXOS.aetx">Fichier de sécurité</a> ' +
                 '<a href="./app/C21mobile.xap"> ' +
                 '<img src="./img/windows.svg" width="16" height="16"/>' +
                 'Installer l\'application' +
                 '</a> '
        instructions = 'Pour l\'installation sur un mobile windows phone, veuillez d\'abord télécharger et installer le fichier de sécurité. (une seule installation suffit.)'

    } else {
        button = '<i>Veuillez-vous connecter avec votre mobile.</i>';
    }

    getButtonContainer.innerHTML = button;

    if(instructions != null) {
        getDIContainer.innerHTML = instructions;
        //getDI.className = getDI.className + " show";
    }
}
