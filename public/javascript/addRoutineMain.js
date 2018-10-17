window.addEventListener('load', function () {

    var contenido = $('#myDevices');
    contenido.html("");
    api.device.getAllDevices()
        .then((data) => {
            //console.log(data.devices);
            for (var i=0; i<data.devices.length; i++) {
                var deviceType = JSON.stringify(data.devices[i].typeId, null, 2);
                deviceType = deviceType.substring(1, deviceType.length-1);
                var deviceId = JSON.stringify(data.devices[i].id, null, 2);
                deviceId = deviceId.substring(1, deviceId.length-1);
                if (deviceType == "go46xmbqeomjrsjr") {
                    showLights(deviceId);
                } else if (deviceType == "im77xxyulpegfmv8") {
                    showOven(deviceId)
                } else if (deviceType == 'eu0v2xgprrhhg41g') {
                    showBlinds(deviceId);
                } else if (deviceType == 'lsf78ly0eqrjbz91') {
                    showDoor(deviceId);
                } else if (deviceType == 'li6cbv5sdlatti0j') {
                    showAC(deviceId);
                } else if (deviceType == 'rnizejqr2di0okho') {
                    showFridge(deviceId);
                }
            }
        })
        .catch((error) => {
            swal({
           title: "House devices couldn't be loaded",
           text: "Please contact a technician",
           type: "error",
           closeOnConfirm: false
           });
        });
}, false);
