window.addEventListener('load', function () {

    var deviceId = localStorage.getItem('currentLoadedDeviceId');
    var deviceType = localStorage.getItem('currentLoadedDeviceType');

    if (deviceType == "go46xmbqeomjrsjr") {             // lights
        showLights(deviceId);
    } else if (deviceType == "im77xxyulpegfmv8") {      // oven
        showOven(deviceId);
    } else if (deviceType == 'eu0v2xgprrhhg41g') {      // blinds
        showBlinds(deviceId);
    } else if (deviceType == 'lsf78ly0eqrjbz91') {      // door
        showDoor(deviceId);
    } else if (deviceType == 'li6cbv5sdlatti0j') {      // ac
        showAC(deviceId);
    } else if (deviceType == 'rnizejqr2di0okho') {      // fridge
        showFridge(deviceId);
    }

}, false);