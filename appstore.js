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
        button = '<a href="https://mathiasmuller4sh.github.io/app/XC_Ad_Hoc_.mobileprovision"> Fichier de sécurité</a> ' +
                 '<a href="itms-services://?action=download-manifest&amp;url=https://mathiasmuller4sh.github.io/app/Info.plist"> ' +
                 '<img src="img/apple.svg" width="16" height="16"/>' +
                 'Installer l\'application' +
                 '</a> ';
        instructions = 'Pour l\'installation iOS veuillez d\'abord télécharger et installer le fichier de sécurité.'
    } else if(isMobile.Android()) {
        button = '<a href="https://dl.dropboxusercontent.com/s/13o85bwwywx6qss/C21mobile.apk?dl=0"> ' +
                 '<img src="img/android.svg" width="16" height="16"/>' +
                 'Installer l\'application' +
                 '</button> '
    } else if(isMobile.Windows()) {
        button = '<a href=""> ' +
                 '<img src="img/windows.svg" width="16" height="16"/>' +
                 'Installer l\'application (disponible bientôt)' +
                 '</a> '
    } else {
        button = '<i>Veuillez-vous connecter avec votre mobile.</i>';
    }

    getButtonContainer.innerHTML = button;

    if(instructions != null) {
        getDIContainer.innerHTML = instructions;
        getDI.className = getDI.className + " show";
    }
}
