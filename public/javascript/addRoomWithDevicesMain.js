window.addEventListener('load', function () {
    var roomId = localStorage.getItem('currentRoomId');
    var roomName;
    var contenido = $('#roomName');
    contenido.html("");
    api.room.get(roomId)
        .then((data) => {
            roomName = JSON.stringify(data.room.name, null, 2);
            roomName = roomName.substring(1, roomName.length-1);
            contenido.append(roomName);
        })
        .catch((error) => {
            console.log('error');
        });
    api.roomDevice.get(roomId)
        .then((data) => {
            for(var i = 0; i < data.devices.length; i++) {
                var deviceType = JSON.stringify(data.devices[i].typeId, null, 2);
                deviceType = deviceType.substring(1, deviceType.length-1);
                var deviceId = JSON.stringify(data.devices[i].id, null, 2);
                deviceId = deviceId.substring(1, deviceId.length-1);
                var deviceName = data.devices[i].name;
                console.log(deviceName);
                deviceName = deviceName.substr(0, deviceName.indexOf('roomId'));
                console.log(deviceName);
                console.log(deviceId);
                if (deviceType == "go46xmbqeomjrsjr") {
                    showLightsImg(deviceName);
                    console.log('lamp');
                } else if (deviceType == "im77xxyulpegfmv8") {
                    showOvenImg(deviceName);
                    console.log('oven');
                } else if (deviceType == 'eu0v2xgprrhhg41g') {
                    showBlindsImg(deviceName);
                    console.log('blinds');
                } else if (deviceType == 'lsf78ly0eqrjbz91') {
                    showDoorImg(deviceName);
                    console.log('doors');
                } else if (deviceType == 'li6cbv5sdlatti0j') {
                    showAcImg(deviceName);
                    console.log('AC');
                } else if (deviceType == 'rnizejqr2di0okho') {
                    showFridgeImg(deviceName);
                    console.log('fridge');
                }
            }
        })
        .catch((error) => {
            console.log('error');
        });
}, false);
