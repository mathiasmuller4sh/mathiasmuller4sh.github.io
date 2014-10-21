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

    if(isMobile.iOS() == false) {
        button = '<a href="https://dl.dropboxusercontent.com/s/p1e8au32dp8ylcx/iOS_Team_Provisioning_Profile.mobileprovision"> Fichier de sécurité</a> ' +
                 '<a href="itms-services://?action=download-manifest&amp;url=https://dl.dropboxusercontent.com/s/psxwvnswjlnwrkf/Info.plist"> ' +
                 '<img src="img/apple.svg" width="16" height="16"/>' +
                 'Installer l\'application' +
                 '</a> ';
        instructions = 'Pour l\'installation iOS veuillez d\'abord télécharger le fichier de sécurité.'
    } else if(isMobile.Android()) {
        button = '<a href=""> ' +
                 '<img src="img/android.svg" width="16" height="16"/>' +
                 'Installer l\'application' +
                 '</a> '
    } else if(isMobile.Windows()) {
        button = '<a href=""> ' +
                 '<img src="img/windows.svg" width="16" height="16"/>' +
                 'Installer l\'application' +
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