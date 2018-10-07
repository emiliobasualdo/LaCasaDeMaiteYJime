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
                    //showLamp(deviceId);
                    console.log('lamp');
                } else if (deviceType == "im77xxyulpegfmv8") {
                    showOven(deviceId)
                    console.log('oven');
                } else if (deviceType == 'eu0v2xgprrhhg41g') {
                    //showBlinds(deviceId);
                    console.log('blinds');
                } else if (deviceType == 'lsf78ly0eqrjbz91') {
                    //showDoors(deviceId);
                    console.log('doors');
                } else if (deviceType == 'li6cbv5sdlatti0j') {
                    //showAC(deviceId);
                    console.log('AC');
                } else if (deviceType == 'rnizejqr2di0okho') {
                    //showFridge(deviceId);
                    console.log('fridge');
                }
            }
        })
        .catch((error) => {

        });
}, false);


function showOven(ovenID) {
    var contenido = $('#myDevices');


    api.device.action(ovenID,'getState').then((data) => {
        var temperature = JSON.stringify(data.result.temperature,null, 2);
        var status = JSON.stringify(data.result.status,null,2);
        status = status.substring(1,status.length-1);


        var onOffStatus;

        if(status == "off"){
            onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" href="roomI.html">ON</a>\
                                <a class= "btn btn-md btn-black display-7" href="room.html">OFF</a>\
                            </div>';
        } else {
            onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" href="roomI.html">ON</a>\
                                <a class="btn btn-md btn-black-outline display-7" href="room.html">OFF</a></div>\
                            </div>';
        }

        contenido.append('<section class="header3 cid-r5JWcBA5eR" id="header3-5d">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-1200x704.jpg" alt="Mobirise" title="">\
                    </div>\
            <div class="media-content">\
                <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                    <p>\OVEN</p>\
                </h1>\
            <div class="mbr-section-text mbr-white pb-3 ">\
            </div>\
    <h7>TEMPERATURE(ºC):  </h7><input type="text" value="'+temperature+'" id="tempOven">' + onOffStatus + '\
    </div>\
    </div>\
    </section>\
    <section class="header11 cid-r5JVGBoliw" id="header11-53">\
    <div class="container align-left">\
    <div class="media-container-column mbr-white col-md-12">\
    <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" href="https://mobirise.co"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
    <a class="btn btn-md btn-success-outline display-4" href="https://mobirise.co"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>ADD TO FAVOURITES</a></div>\
    </div>\
    </div>\
    </section>');
    }).catch((error) => {
            console.log('error');
    });

}