window.addEventListener('load', function () {
    api.device.getAllDevices()
        .then((data) => {
            for (var i = 0; i < data.devices.length; i++) {
                if (data.devices[i].meta == 'fav') {
                    if (data.devices[i].typeId == "go46xmbqeomjrsjr") {
                        console.log(data.devices[i].id);
                        showLights(data.devices[i].id);
                        console.log('lamp');
                    } else if (data.devices[i].typeId == "im77xxyulpegfmv8") {
                        showOven(data.devices[i].id);
                        console.log('oven');
                    } else if (data.devices[i].typeId == 'eu0v2xgprrhhg41g') {
                        showBlinds(data.devices[i].id);
                        console.log('blinds');
                    } else if (data.devices[i].typeId == 'lsf78ly0eqrjbz91') {
                        showDoor(data.devices[i].id);
                        console.log('doors');
                    } else if (data.devices[i].typeId == 'li6cbv5sdlatti0j') {
                        showAC(data.devices[i].id);
                        console.log('AC');
                    } else if (data.devices[i].typeId == 'rnizejqr2di0okho') {
                        showFridge(data.devices[i].id);
                        console.log('fridge');
                    }
                } else {
                    continue;
                }
            }
        })
        .catch((error) => {
            console.log('error en retriving favourite');
        });
}, false);

function showLights(lightsID) {
    var contenido = $('#devicesFav');
    api.device.action(lightsID,'getState').then((data) => {

        var status = JSON.stringify(data.result.status,null,2);
        status = status.substring(1,status.length-1);
        var brightness = JSON.stringify(data.result.brightness,null, 2);

        var onOffStatus;
        if(status == "off"){
            brightness = 0;
            onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" onclick="trigger(\'' + lightsID + '\',\'turnOn\')">ON</a>\
                                <a class= "btn btn-md btn-black display-7" onclick="trigger(\'' + lightsID + '\',\'turnOff\')">OFF</a>\
                            </div>';
        } else {
            onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" onclick="trigger(\'' + lightsID + '\',\'turnOn\')">ON</a>\
                                <a class="btn btn-md btn-black-outline display-7" onclick="trigger(\'' + lightsID + '\',\'turnOff\')">OFF</a></div>\
                            </div>';
        }


        contenido.append('<section class="header3 cid-r5JWc4Jvbq" id="header3-5c">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-5-1200x675.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p>\LIGHTS</p></h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>\
                        <div class="slidecontainer">\
                            <h7>BRIGHTNESS:  </h7> <input type="range" min="1" max="100" value="' + brightness + '" class="slider" id="slideLights">\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section class="header11 cid-r5Fx2fBS3m" id="header11-4u">\
            <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                    <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + lightsID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                        <a class="btn btn-md btn-success-outline display-4" onclick=" deleteFavourite(\'' + lightsID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a></div>\
                </div>\
            </div>\
        </section>');
    }).catch((error) => {
        console.log('error');
    });
}

function showOven(ovenID) {
    var contenido = $('#devicesFav');
    api.device.action(ovenID,'getState')
        .then((data) => {
            var temperature = JSON.stringify(data.result.temperature, null, 2);
            var status = JSON.stringify(data.result.status, null, 2);
            status = status.substring(1, status.length - 1);


            var onOffStatus;

            if (status == "off") {
                onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7"  onclick="trigger(\'' + ovenID + '\',\'turnOn\')">ON</a>\
                                <a class= "btn btn-md btn-black display-7" onclick="trigger(\'' + ovenID + '\',\'turnOff\')">OFF</a>\
                            </div>';
            } else {
                onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" onclick="trigger(\'' + ovenID + '\',\'turnOn\')">ON</a>\
                                <a class="btn btn-md btn-black-outline display-7" onclick="trigger(\'' + ovenID + '\',\'turnOff\')">OFF</a></div>\
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
                <h7>TEMPERATURE(ºC):  </h7><input type="text" value="' + temperature + '" id="tempOven">' + onOffStatus + '\
                </div>\
                </div>\
                </section>\
                <section class="header11 cid-r5JVGBoliw" id="header11-53">\
                <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + ovenID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                <a class="btn btn-md btn-success-outline display-4" onclick=" deleteFavourite(\'' + ovenID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a></div>\
                </div>\
                </div>\
                </section>\
            ');
        })
        .catch((error) => {
            console.log('error');
        });

}

function showDoor(doorID) {
    var contenido = $('#devicesFav');
    api.device.action(doorID, 'getState')
        .then((data) => {
            var status = JSON.stringify(data.result.status, null, 2);
            status = status.substring(1, status.length-1);
            var openClosedStatus;

            if(status == "closed"){
                openClosedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" onclick="trigger(\'' + doorID + '\',\'open\')">UNLOCK</a>\
                                <a class= "btn btn-md btn-black display-7" onclick="trigger(\'' + doorID + '\',\'close\')">LOCK</a>\
                            </div>';
            } else {
                openClosedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" onclick="trigger(\'' + doorID + '\',\'open\')">UNLOCK</a>\
                                <a class="btn btn-md btn-black-outline display-7"onclick="trigger(\'' + doorID + '\',\'close\')">LOCK</a></div>\
                            </div>';
            }

            contenido.append('<section class="header3 cid-r5K0VsSp7w" id="header3-5i">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-1-1200x803.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p>\DOOR</p></h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>' + openClosedStatus + '\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section class="header11 cid-r5JVKsyeI9" id="header11-59">\
            <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                    <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + doorID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                        <a class="btn btn-md btn-success-outline display-4" onclick=" deleteFavourite(\'' + doorID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a></div>\
                </div>\
            </div>\
        </section>');
        })
        .catch((error) => {
            console.log('error');
        });
}



function showAC(acID) {
    var contenido = $('#devicesFav');
    api.device.action(acID,'getState').then((data) => {
        var temperature = JSON.stringify(data.result.temperature,null, 2);
        var status = JSON.stringify(data.result.status,null,2);
        status = status.substring(1,status.length-1);
        var onOffStatus;
        if(status == "off"){
            onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" onclick="trigger(\'' + acID + '\',\'turnOn\')">ON</a>\
                                <a class= "btn btn-md btn-black display-7" onclick="trigger(\'' + acID + '\',\'turnOff\')">OFF</a>\
                            </div>';
        } else {
            onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" onclick="trigger(\'' + acID + '\',\'turnOn\')">ON</a>\
                                <a class="btn btn-md btn-black-outline display-7" onclick="trigger(\'' + acID + '\',\'turnOff\')">OFF</a></div>\
                            </div>';
        }

        contenido.append('<section class="header3 cid-r5JWdFEF1r" id="header3-5f">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-1-720x480.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p>\AIR CONDITIONER</p></h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>\
                        <h7>TEMPERATURE(ºC):  </h7><input type="text" value="' + temperature + '" id="tempAir">' + onOffStatus + '\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section class="header11 cid-r5JVJxh7r9" id="header11-57">\
            <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                    <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + acID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                        <a class="btn btn-md btn-success-outline display-4" onclick=" deleteFavourite(\'' + acID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a></div>\
                </div>\
            </div>\
        </section>');
    }).catch((error) => {
        console.log('error');
    });
}


function showFridge(fridgeID) {
    var contenido = $('#devicesFav');
    api.device.action(fridgeID,'getState').then((data) => {
        var temperature = JSON.stringify(data.result.temperature,null, 2);


        contenido.append('<section class="header3 cid-r5JWd5XdmE" id="header3-5e">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-1200x690.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p>\FRIDGE</p></h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>\
                        <h7>TEMPERATURE(ºC):  </h7><input type="text" value="' + temperature + '" id="tempFridge">\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section class="header11 cid-r5JVIrRlI9" id="header11-55">\
            <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                    <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + fridgeID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                        <a class="btn btn-md btn-success-outline display-4" onclick=" deleteFavourite(\'' + fridgeID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a></div>\
                </div>\
            </div>\
        </section>');
    }).catch((error) => {
        console.log('error');
    });
}


function showBlinds(blindsID) {
    var contenido = $('#devicesFav');
    api.device.action(blindsID,'getState').then((data) => {

        var status = JSON.stringify(data.result.status,null,2);
        status = status.substring(1,status.length-1);

        var openCLosedStatus;
        // if(status == "opening") status="opened";
        //         // if(status == "closing") status="closed";

        if(status == "closed"){
            openCLosedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" onclick="trigger(\'' + blindsID + '\',\'up\')">OPEN</a>\
                                <a class= "btn btn-md btn-black display-7" onclick="trigger(\'' + blindsID + '\',\'down\')">CLOSE</a>\
                            </div>';
        } else {
            openCLosedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" onclick="trigger(\'' + blindsID + '\',\'up\')">OPEN</a>\
                                <a class="btn btn-md btn-black-outline display-7"onclick="trigger(\'' + blindsID + '\',\'down\')">CLOSE</a></div>\
                            </div>';
        }


        contenido.append('<section class="header3 cid-r5K0Vz6aVk" id="header3-5j">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-14-1200x800.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p>\BLINDS</p></h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>' + openCLosedStatus + '\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section class="header11 cid-r5JVLDfCxK" id="header11-5b">\
            <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                    <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + blindsID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                        <a class="btn btn-md btn-success-outline display-4" onclick=" deleteFavourite(\'' + blindsID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a></div>\
                </div>\
            </div>\
        </section>\
        ');
    })
        .catch((error) => {
            console.log('error');
        });
}


