window.addEventListener('load', function () {

    var deviceId = localStorage.getItem('currentLoadedDeviceId');
    var deviceType = localStorage.getItem('currentLoadedDeviceType');

    if (deviceType == "go46xmbqeomjrsjr") {             // lights
        console.log("SHOWING LIGHTS");
        showLights(deviceId);
    } else if (deviceType == "im77xxyulpegfmv8") {      // oven
        console.log("SHOWING OVEN");
        showOven(deviceId);
    } else if (deviceType == 'eu0v2xgprrhhg41g') {      // blinds
        console.log("SHOWING BLINDS");
        showBlinds(deviceId);
    } else if (deviceType == 'lsf78ly0eqrjbz91') {      // door
        console.log("SHOWING DOOR");
        showDoor(deviceId);
    } else if (deviceType == 'li6cbv5sdlatti0j') {      // ac
        console.log("SHOWING AC");
        showAC(deviceId);
    } else if (deviceType == 'rnizejqr2di0okho') {      // fridge
        console.log("SHOWING FRIDGE");
        showFridge(deviceId);
    }

}, false);