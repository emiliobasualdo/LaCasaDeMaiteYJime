window.addEventListener('load', function () {
    api.device.getAllDevices()
        .then((data) => {
            var found = false;
            for(var i = 0; i < data.devices.length; i++) {
                var m = JSON.parse(data.devices[i].meta);
                if (m.room != null) {
                    continue;
                } else if (!found && m.room == null) {
                    var contenido = $('#existingDevices');
                    contenido.append('<section class="header13 cid-r6eFDpqfDf">\
                        <div class="container">\
                        <h1 class="mbr-section-title align-center pb-3 mbr-black mbr-bold mbr-fonts-style display-6">\
                        OR CHOOSE FROM EXISTING</h1>\
                        </div>\
                        </section>');
                        found  = true;
                }
                var deviceType = data.devices[i].typeId;
                var deviceName = data.devices[i].name;
                var deviceId = data.devices[i].id;
                console.log(deviceId);
                console.log(deviceName);
                deviceName = deviceName.substr(0, deviceName.indexOf('_'));
                console.log(deviceName);
                if (deviceType == "go46xmbqeomjrsjr") {
                    showLightsImg(deviceName, deviceId);
                    console.log('lamp');
                } else if (deviceType == "im77xxyulpegfmv8") {
                    showOvenImg(deviceName, deviceId);
                    console.log('oven');
                } else if (deviceType == 'eu0v2xgprrhhg41g') {
                    showBlindsImg(deviceName, deviceId);
                    console.log('blinds');
                } else if (deviceType == 'lsf78ly0eqrjbz91') {
                    showDoorImg(deviceName, deviceId);
                    console.log('doors');
                } else if (deviceType == 'li6cbv5sdlatti0j') {
                    showAcImg(deviceName, deviceId);
                    console.log('AC');
                } else if (deviceType == 'rnizejqr2di0okho') {
                    showFridgeImg(deviceName, deviceId);
                    console.log('fridge');
                }
            }
        })
        .catch((error) => {
            console.log('error');
        });
}, false);