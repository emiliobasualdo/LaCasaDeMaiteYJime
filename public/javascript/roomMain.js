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
            window.alert('error');
        });
    api.roomDevice.get(roomId)
        .then((data) => {
            for(var i = 0; i < data.devices.length; i++) {
                var deviceType = JSON.stringify(data.devices[i].typeId, null, 2);
                deviceType = deviceType.substring(1, deviceType.length-1);
                var deviceId = JSON.stringify(data.devices[i].id, null, 2);
                deviceId = deviceId.substring(1, deviceId.length-1);
                var deviceName = data.devices[i].name;
                var fav = (data.devices[i].meta == 'fav') ? 'fav' : null;
                deviceName = deviceName.substr(0, deviceName.indexOf('_'));
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
            window.alert('error');
        });
}, false);
