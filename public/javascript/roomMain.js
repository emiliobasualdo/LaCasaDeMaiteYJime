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
            console.log("error");
        });
    api.roomDevice.get(roomId)
        .then((data) => {
            for(var i = 0; i < data.devices.length; i++) {
                var deviceType = data.devices[i].typeId;
                var deviceId = data.devices[i].id;
                var deviceName = data.devices[i].name;
                deviceName = deviceName.substr(0, deviceName.indexOf('_'));
                var m = JSON.parse(data.devices[i].meta);
                var fav = (m.fav == 'fav') ? 'fav' : null;
                if (deviceType == "go46xmbqeomjrsjr") {
                    showLights(deviceId, deviceName, fav, 1);
                } else if (deviceType == "im77xxyulpegfmv8") {
                    showOven(deviceId, deviceName, fav, 1)
                } else if (deviceType == 'eu0v2xgprrhhg41g') {
                    showBlinds(deviceId, deviceName, fav, 1);
                } else if (deviceType == 'lsf78ly0eqrjbz91') {
                    showDoor(deviceId, deviceName, fav, 1);
                } else if (deviceType == 'li6cbv5sdlatti0j') {
                    showAC(deviceId, deviceName, fav, 1);
                } else if (deviceType == 'rnizejqr2di0okho') {
                    showFridge(deviceId, deviceName, fav, 1);
                }
            }
        })
        .catch((error) => {
            console.log("error");
        });
}, false);
