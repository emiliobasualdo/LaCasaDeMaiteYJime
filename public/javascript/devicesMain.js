window.addEventListener('load', function () {
    var conteindo =  $('#myDevices');
    conteindo.html("");
    api.device.getAllDevices()
        .then((data) => {
            for (var i = 0; i < data.devices.length; i++) {
                var deviceType = data.devices[i].typeId;
                var deviceId = data.devices[i].id;
                var deviceName = data.devices[i].name;
                deviceName = deviceName.substr(0, deviceName.indexOf('_'));
                var m = JSON.parse(data.devices[i].meta);
                var fav = (m.fav == 'fav') ? 'fav' : null;
                if (deviceType == "go46xmbqeomjrsjr") {
                    showLights(deviceId, deviceName, fav);
                } else if (deviceType == "im77xxyulpegfmv8") {
                    showOven(deviceId, deviceName, fav)
                } else if (deviceType == 'eu0v2xgprrhhg41g') {
                    showBlinds(deviceId, deviceName, fav);
                } else if (deviceType == 'lsf78ly0eqrjbz91') {
                    showDoor(deviceId, deviceName, fav);
                } else if (deviceType == 'li6cbv5sdlatti0j') {
                    showAC(deviceId, deviceName, fav);
                } else if (deviceType == 'rnizejqr2di0okho') {
                    showFridge(deviceId, deviceName, fav);
                }
            }
        })
        .catch((error) => {
            console.log('error');
        });
}, false);
