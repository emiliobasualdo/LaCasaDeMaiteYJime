function showOven(ovenID) {
    var contenido = $('#myDevices');
    api.device.action(ovenID,'getState')
        .then((data) => {
            var temperature = data.result.temperature;
            var status = data.result.status;


            var onOffStatus;

            if (status === "off") {
                onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7"  id="'+ ovenID +'on" onclick="trigger(\'' + ovenID + '\',\'turnOn\' ,\'oven\')">ON</a>\
                                <a class= "btn btn-md btn-black display-7" id="'+ ovenID +'off" onclick="trigger(\'' + ovenID + '\',\'turnOff\' ,\'oven\' )">OFF</a>\
                            </div>';
            } else {
                onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ ovenID +'on" onclick="trigger(\'' + ovenID + '\',\'turnOn\' ,\'oven\')">ON</a>\
                                <a class="btn btn-md btn-black-outline display-7" id="'+ ovenID +'off" onclick="trigger(\'' + ovenID + '\',\'turnOff\' ,\'oven\')">OFF</a></div>\
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
                <h7>TEMPERATURE(ºC):  </h7><input type="text" value="' + temperature + '" id="'+ ovenID +'temp"><button type="button" onclick="trigger(\'' + ovenID + '\',\'setTemperature\', \'oven\')" >Set!</button>' + onOffStatus + '\
                </div>\
                </div>\
                </section>\
                <section class="header11 cid-r5JVGBoliw" id="header11-53">\
                <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + ovenID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                <a class="btn btn-md btn-success-outline display-4" href="https://mobirise.co"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>ADD TO FAVOURITES</a></div>\
                </div>\
                </div>\
                </section>\
                \
            ');
        })
        .catch((error) => {
            console.log('error');
        });

}

function showDoor(doorID) {
    var contenido = $('#myDevices');
    api.device.action(doorID, 'getState')
        .then((data) => {
        var status = data.result.lock;
        var lockedUnlockedStatus;

        if(status == "unlocked"){
            lockedUnlockedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" id="'+ doorID +'lock" onclick="trigger(\'' + doorID + '\',\'lock\', \'door\')">LOCK</a>\
                            <a class= "btn btn-md btn-black display-7" id="'+ doorID +'unlock" onclick="trigger(\'' + doorID + '\',\'unlock\', \'door\')">UNLOCK</a>\
                        </div>';
        } else {
            lockedUnlockedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ doorID +'lock" onclick="trigger(\'' + doorID + '\',\'lock\', \'door\')">LOCK</a>\
                            <a class="btn btn-md btn-black-outline display-7" id="'+ doorID +'unlock" onclick="trigger(\'' + doorID + '\',\'unlock\', \'door\')">UNLOCK</a></div>\
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
                        </div>' + lockedUnlockedStatus + '\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section class="header11 cid-r5JVKsyeI9" id="header11-59">\
            <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                    <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + doorID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                        <a class="btn btn-md btn-success-outline display-4" href="https://mobirise.co"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>ADD TO FAVOURITES</a></div>\
                </div>\
            </div>\
        </section>');
        })
        .catch((error) => {
            console.log('error');
        });
}

function showAC(acID) {
    var contenido = $('#myDevices');
    api.device.action(acID,'getState').then((data) => {
        var temperature = data.result.temperature;
        var status = data.result.status;
        var onOffStatus;
        if(status == "off"){
            onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" id="'+ acID +'on" onclick="trigger(\'' + acID + '\',\'turnOn\', \'ac\')">ON</a>\
                                <a class= "btn btn-md btn-black display-7" id="'+ acID +'off" onclick="trigger(\'' + acID + '\',\'turnOff\', \'ac\')">OFF</a>\
                            </div>';
        } else {
            onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ acID +'on" onclick="trigger(\'' + acID + '\',\'turnOn\', \'ac\')">ON</a>\
                                <a class="btn btn-md btn-black-outline display-7" id="'+ acID +'off" onclick="trigger(\'' + acID + '\',\'turnOff\', \'ac\')">OFF</a></div>\
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
                        <h7>TEMPERATURE(ºC):  </h7><input type="text" value="' + temperature + '" id="'+ acID +'temp"><button type="button" onclick="trigger(\'' + acID + '\',\'setTemperature\', \'ac\')" >Set!</button>' + onOffStatus + '\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section class="header11 cid-r5JVJxh7r9" id="header11-57">\
            <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                    <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + acID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                        <a class="btn btn-md btn-success-outline display-4" href="https://mobirise.co"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>ADD TO FAVOURITES</a></div>\
                </div>\
            </div>\
        </section>');
    }).catch((error) => {
            console.log('error');
    });
}

function showFridge(fridgeID) {
    var contenido = $('#myDevices');
    api.device.action(fridgeID,'getState').then((data) => {
    var temperature = data.result.temperature;


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
                        <h7>TEMPERATURE(ºC):  </h7><input type="text" value="' + temperature + '" id="'+ fridgeID +'temp"><button type="button" onclick="trigger(\'' + fridgeID + '\',\'setTemperature\', \'fridge\')" >Set!</button>\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section class="header11 cid-r5JVIrRlI9" id="header11-55">\
            <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                    <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + fridgeID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                        <a class="btn btn-md btn-success-outline display-4" href="https://mobirise.co"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>ADD TO FAVOURITES</a></div>\
                </div>\
            </div>\
        </section>');
    }).catch((error) => {
            console.log('error');
    });
}

function showBlinds(blindsID) {
    var contenido = $('#myDevices');
    api.device.action(blindsID,'getState').then((data) => {

        var status = data.result.status;

        var openCLosedStatus;

        if(status == "closed" || status == "closing"){
            openCLosedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" id="'+ blindsID +'open" onclick="trigger(\'' + blindsID + '\',\'up\',\'blinds\')">OPEN</a>\
                                <a class= "btn btn-md btn-black display-7" id="'+ blindsID +'close" onclick="trigger(\'' + blindsID + '\',\'down\',\'blinds\')">CLOSE</a>\
                            </div>';
        } else {
            openCLosedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ blindsID +'open" onclick="trigger(\'' + blindsID + '\',\'up\',\'blinds\')">OPEN</a>\
                                <a class="btn btn-md btn-black-outline display-7" id="'+ blindsID +'close" onclick="trigger(\'' + blindsID + '\',\'down\',\'blinds\')">CLOSE</a></div>\
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
                        <a class="btn btn-md btn-success-outline display-4" href="https://mobirise.co"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>ADD TO FAVOURITES</a></div>\
                </div>\
            </div>\
        </section>\
        ');
    })
        .catch((error) => {
            console.log('error');
    });
}

function showLights(lightsID) {
    var contenido = $('#myDevices');
    api.device.action(lightsID,'getState').then((data) => {

        var brightness = data.result.brightness;
        var status = data.result.status;


        var onOffStatus;

        if (status === "off") {
            onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7"  id="'+ lightsID +'on" onclick="trigger(\'' + lightsID + '\',\'turnOn\' ,\'lights\')">ON</a>\
                                <a class= "btn btn-md btn-black display-7" id="'+ lightsID +'off" onclick="trigger(\'' + lightsID + '\',\'turnOff\' ,\'lights\' )">OFF</a>\
                            </div>';
        } else {
            onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ lightsID +'on" onclick="trigger(\'' + lightsID + '\',\'turnOn\' ,\'lights\')">ON</a>\
                                <a class="btn btn-md btn-black-outline display-7" id="'+ lightsID +'off" onclick="trigger(\'' + lightsID + '\',\'turnOff\' ,\'lights\')">OFF</a></div>\
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
                            <h7>BRIGHTNESS:  </h7> <input type="range" min="1" max="100" value="' + brightness + '" class="slider" id="'+ lightsID +'slider" onchange="trigger(\'' + lightsID + '\',\'setBrightness\', \'lights\')">\
                            ' + onOffStatus + '\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section class="header11 cid-r5Fx2fBS3m" id="header11-4u">\
            <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                    <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + lightsID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                        <a class="btn btn-md btn-success-outline display-4" href="https://mobirise.co"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>ADD TO FAVOURITES</a></div>\
                </div>\
            </div>\
        </section>');
    }).catch((error) => {
            console.log('error');
    });
}



function showLightsImg() {
    var contenido = $('#addedDevices');
    contenido.append('\
    <section class="features13 cid-r5yZWJv2j1" id="features13-2c">\
        <div class="container">\
        <div class="media-container-row container">\
        <div class="card col-12 col-md-6 p-5 m-3 align-center">\
        <div class="card-img">\
        <img src="assets/images/mbr-5-1200x675.jpg" alt="Mobirise" title="">\
        </div>\
        <h4 class="card-title py-2 mbr-fonts-style display-5">Lights</h4>\
        </div>\
        </div>\
        </div>\
        </section>\
    ');
}

function showAcImg() {
    var contenido = $('#addedDevices');
    contenido.append('\
    <section class="features13 cid-r5yZWJv2j1" id="features13-2c">\
        <div class="container">\
        <div class="media-container-row container">\
        <div class="card col-12 col-md-6 p-5 m-3 align-center">\
        <div class="card-img">\
        <img src="assets/images/mbr-1-720x480.jpg" alt="Mobirise" title="">\
        </div>\
        <h4 class="card-title py-2 mbr-fonts-style display-5">AC</h4>\
        </div>\
        </div>\
        </div>\
        </section>\
    ');
}

function showDoorImg() {
    var contenido = $('#addedDevices');
    contenido.append('\
    <section class="features13 cid-r5yZWJv2j1" id="features13-2c">\
        <div class="container">\
        <div class="media-container-row container">\
        <div class="card col-12 col-md-6 p-5 m-3 align-center">\
        <div class="card-img">\
        <img src="assets/images/mbr-1-1200x803.jpg" alt="Mobirise" title="">\
        </div>\
        <h4 class="card-title py-2 mbr-fonts-style display-5">Door</h4>\
        </div>\
        </div>\
        </div>\
        </section>\
    ');
}

function showBlindsImg() {
    var contenido = $('#addedDevices');
    contenido.append('\
    <section class="features13 cid-r5yZWJv2j1" id="features13-2c">\
        <div class="container">\
        <div class="media-container-row container">\
        <div class="card col-12 col-md-6 p-5 m-3 align-center">\
        <div class="card-img">\
        <img src="assets/images/mbr-14-1200x800.jpg" alt="Mobirise" title="">\
        </div>\
        <h4 class="card-title py-2 mbr-fonts-style display-5">Blinds</h4>\
        </div>\
        </div>\
        </div>\
        </section>\
    ');
}

function showFridgeImg() {
    var contenido = $('#addedDevices');
    contenido.append('\
    <section class="features13 cid-r5yZWJv2j1" id="features13-2c">\
        <div class="container">\
        <div class="media-container-row container">\
        <div class="card col-12 col-md-6 p-5 m-3 align-center">\
        <div class="card-img">\
        <img src="assets/images/mbr-1200x690.jpg" alt="Mobirise" title="">\
        </div>\
        <h4 class="card-title py-2 mbr-fonts-style display-5">Fridge</h4>\
        </div>\
        </div>\
        </div>\
        </section>\
    ');
}

function showOvenImg() {
    var contenido = $('#addedDevices');
    if (contenido) {
        console.log('enonctre');
    }
    contenido.append('\
    <section class="features13 cid-r5yZWJv2j1" id="features13-2c">\
        <div class="container">\
        <div class="media-container-row container">\
        <div class="card col-12 col-md-6 p-5 m-3 align-center">\
        <div class="card-img">\
        <img src="assets/images/mbr-1200x704.jpg" alt="Mobirise" title="">\
        </div>\
        <h4 class="card-title py-2 mbr-fonts-style display-5">Oven</h4>\
        </div>\
        </div>\
        </div>\
        </section>\
    ');
}
