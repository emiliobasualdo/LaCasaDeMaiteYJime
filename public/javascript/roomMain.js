window.addEventListener('load', function () {
    var roomId = localStorage.getItem('currentRoomId');
    var roomName;
    var header = $('#header1-33');
    header.html("");
    api.room.get(roomId)
        .then((data) => {
            roomName = JSON.stringify(data.room.name, null, 2);
            roomName = roomName.substring(1, roomName.length-1);
            header.append('<div class="container"><div class="row justify-content-md-center"><div class="mbr-white col-md-10"><h1 class="mbr-section-title align-center mbr-bold pb-3 mbr-fonts-style display-1">' + roomName + '</h1></div></div></div>');
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
                if (deviceType == "go46xmbqeomjrsjr") {
                    showLights(deviceId);
                    console.log('lamp');
                } else if (deviceType == "im77xxyulpegfmv8") {
                    showOven(deviceId)
                    console.log('oven');
                } else if (deviceType == 'eu0v2xgprrhhg41g') {
                    showBlinds(deviceId);
                    console.log('blinds');
                } else if (deviceType == 'lsf78ly0eqrjbz91') {
                    showDoor(deviceId);
                    console.log('doors');
                } else if (deviceType == 'li6cbv5sdlatti0j') {
                    showAC(deviceId);
                    console.log('AC');
                } else if (deviceType == 'rnizejqr2di0okho') {
                    showFridge(deviceId);
                    console.log('fridge');
                }
            }
        })
        .catch((error) => {

        });
}, false);
