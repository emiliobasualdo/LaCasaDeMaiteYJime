function showOven(ovenID, deviceName, fav) {
    var contenido = $('#myDevices');
    api.device.action(ovenID,'getState')
        .then((data) => {
            var temperature = data.result.temperature;
            var status = data.result.status;


            var onOffStatus;
            var favStatus;

            if (status === "off") {
                onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7"  id="'+ ovenID +'on" onclick="trigger(\'' + ovenID + '\',\'turnOn\' ,\'oven\')">ON</a>\
                                <a class= "btn btn-md btn-black display-7" id="'+ ovenID +'off" onclick="trigger(\'' + ovenID + '\',\'turnOff\' ,\'oven\' )">OFF</a>\
                            </div>';
            } else {
                onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ ovenID +'on" onclick="trigger(\'' + ovenID + '\',\'turnOn\' ,\'oven\')">ON</a>\
                                <a class="btn btn-md btn-black-outline display-7" id="'+ ovenID +'off" onclick="trigger(\'' + ovenID + '\',\'turnOff\' ,\'oven\')">OFF</a></div>\
                            </div>';
            }

            if (fav) {
                favStatus = '<a class="btn btn-md btn-success-outline display-4" id="' + ovenID + 'fav" onclick="deleteFavourite(\'' + ovenID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a>';
            } else {
                favStatus = '<a class="btn btn-md btn-success-outline display-4" id="' + ovenID + 'fav" onclick="addTofavourites(\'' + ovenID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>ADD TO FAVOURITES</a>';
            }

            contenido.append('<section class="header3 cid-r5JWcBA5eR" id="' + ovenID + 'delete1">\
                <div class="container">\
                    <div class="media-container-row">\
                        <div class="mbr-figure" style="width: 35%;">\
                            <img src="assets/images/mbr-1200x704.jpg" alt="Mobirise" title="">\
                        </div>\
                <div class="media-content">\
                    <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p>' + deviceName + '</p>\
                    </h1>\
                <div class="mbr-section-text mbr-white pb-3 ">\
                </div>\
                <h7>TEMPERATURE(ºC):  </h7><input type="text" value="' + temperature + '" id="'+ ovenID +'temp"><button type="button" onclick="trigger(\'' + ovenID + '\',\'setTemperature\', \'oven\')" >Set!</button>' + onOffStatus + '\
                </div>\
                </div>\
                </section>\
                <section class="header11 cid-r5JVGBoliw" id="' + ovenID + 'delete2">\
                <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + ovenID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                ' + favStatus + '</div>\
                </div>\
                </div>\
                </section>');
        })
        .catch((error) => {
            console.log('error');
        });

}

function showDoor(doorID,  deviceName, fav) {
    var contenido = $('#myDevices');
    api.device.action(doorID, 'getState')
        .then((data) => {
        var status = data.result.lock;
        var lockedUnlockedStatus;
        var favStatus;

        if(status == "unlocked"){
            lockedUnlockedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" id="'+ doorID +'lock" onclick="trigger(\'' + doorID + '\',\'lock\', \'door\')">LOCK</a>\
                            <a class= "btn btn-md btn-black display-7" id="'+ doorID +'unlock" onclick="trigger(\'' + doorID + '\',\'unlock\', \'door\')">UNLOCK</a>\
                        </div>';
        } else {
            lockedUnlockedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ doorID +'lock" onclick="trigger(\'' + doorID + '\',\'lock\', \'door\')">LOCK</a>\
                            <a class="btn btn-md btn-black-outline display-7" id="'+ doorID +'unlock" onclick="trigger(\'' + doorID + '\',\'unlock\', \'door\')">UNLOCK</a></div>\
                        </div>';
        }

        if (fav) {
            favStatus = '<a class="btn btn-md btn-success-outline display-4" id="' + doorID + 'fav" onclick="deleteFavourite(\'' + doorID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a>';
        } else {
            favStatus = '<a class="btn btn-md btn-success-outline display-4" id="' + doorID + 'fav" onclick="addTofavourites(\'' + doorID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>ADD TO FAVOURITES</a>';
        }

        contenido.append('<section class="header3 cid-r5K0VsSp7w" id="' + doorID + 'delete1"">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-1-1200x803.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p>' + deviceName + ' </p></h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>' + lockedUnlockedStatus + '\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section class="header11 cid-r5JVKsyeI9" id="' + doorID + 'delete2">\
            <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                    <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + doorID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                     ' + favStatus + '</div>\
                </div>\
            </div>\
        </section>');
        })
        .catch((error) => {
            console.log('error');
        });
}



function showAC(acID,  deviceName, fav) {
    var contenido = $('#myDevices');
    api.device.action(acID,'getState').then((data) => {
        var temperature = data.result.temperature;
        var status = data.result.status;
        var onOffStatus;
        var favStatus;

        if(status == "off"){
            onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" id="'+ acID +'on" onclick="trigger(\'' + acID + '\',\'turnOn\', \'ac\')">ON</a>\
                                <a class= "btn btn-md btn-black display-7" id="'+ acID +'off" onclick="trigger(\'' + acID + '\',\'turnOff\', \'ac\')">OFF</a>\
                            </div>';
        } else {
            onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ acID +'on" onclick="trigger(\'' + acID + '\',\'turnOn\', \'ac\')">ON</a>\
                                <a class="btn btn-md btn-black-outline display-7" id="'+ acID +'off" onclick="trigger(\'' + acID + '\',\'turnOff\', \'ac\')">OFF</a></div>\
                            </div>';
        }

        if (fav) {
            favStatus = '<a class="btn btn-md btn-success-outline display-4" id="' + acID + 'fav" onclick="deleteFavourite(\'' + acID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a>';
        } else {
            favStatus = '<a class="btn btn-md btn-success-outline display-4"id="' + acID + 'fav" onclick="addTofavourites(\'' + acID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>ADD TO FAVOURITES</a>';
        }

        contenido.append('<section class="header3 cid-r5JWdFEF1r" id="' + acID + 'delete1">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-1-720x480.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p>' + deviceName + '</p></h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>\
                        <h7>TEMPERATURE(ºC):  </h7><input type="text" value="' + temperature + '" id="'+ acID +'temp"><button type="button" onclick="trigger(\'' + acID + '\',\'setTemperature\', \'ac\')" >Set!</button>' + onOffStatus + '\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section class="header11 cid-r5JVJxh7r9" id="' + acID + 'delete2">\
            <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                    <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + acID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                      ' + favStatus +'</div>\
                </div>\
            </div>\
        </section>');
    }).catch((error) => {
            console.log('error');
    });
}


function showFridge(fridgeID,  deviceName, fav) {
    var contenido = $('#myDevices');
    api.device.action(fridgeID,'getState').then((data) => {
    var temperature = data.result.temperature;

        var favStatus;
        if (fav) {
            favStatus = '<a class="btn btn-md btn-success-outline display-4" id="' + fridgeID + 'fav"onclick="deleteFavourite(\'' + fridgeID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a>';
        } else {
            favStatus = '<a class="btn btn-md btn-success-outline display-4"id="' + fridgeID + 'fav" onclick="addTofavourites(\'' + fridgeID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>ADD TO FAVOURITES</a>';
        }

        contenido.append('<section class="header3 cid-r5JWd5XdmE" id="' + fridgeID + 'delete1">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-1200x690.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p> ' + deviceName + ' </p></h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>\
                        <h7>TEMPERATURE(ºC):  </h7><input type="text" value="' + temperature + '" id="'+ fridgeID +'temp"><button type="button" onclick="trigger(\'' + fridgeID + '\',\'setTemperature\', \'fridge\')" >Set!</button>\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section class="header11 cid-r5JVIrRlI9" id="' + fridgeID + 'delete2">\
            <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                    <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + fridgeID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                        ' + favStatus + '</div>\
                </div>\
            </div>\
        </section>');
    }).catch((error) => {
            console.log('error');
    });
}


function showBlinds(blindsID,  deviceName, fav) {
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
        var favStatus;
        if (fav) {
            favStatus = '<a class="btn btn-md btn-success-outline display-4" id="' + blindsID + 'fav"onclick="deleteFavourite(\'' + blindsID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a>';
        } else {
            favStatus = '<a class="btn btn-md btn-success-outline display-4" id="' + blindsID + 'fav"onclick="addTofavourites(\'' + blindsID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>ADD TO FAVOURITES</a>';
        }
        contenido.append('<section class="header3 cid-r5K0Vz6aVk" id="' + blindsID + 'delete1">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-14-1200x800.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p> ' + deviceName + ' </p></h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>' + openCLosedStatus + '\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section class="header11 cid-r5JVLDfCxK" id="' + blindsID + 'delete2">\
            <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                    <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + blindsID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                       '+ favStatus + '</div>\
                </div>\
            </div>\
        </section>\
        ');
    })
        .catch((error) => {
            console.log('error');
    });
}


function showLights(lightsID, deviceName, fav) {
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
        var favStatus;
        if (fav) {
            favStatus = '<a class="btn btn-md btn-success-outline display-4" id="' + lightsID + 'fav"onclick="deleteFavourite(\'' + lightsID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a>';
        } else {
            favStatus = '<a class="btn btn-md btn-success-outline display-4" id="' + lightsID + 'fav"onclick="addTofavourites(\'' + lightsID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>ADD TO FAVOURITES</a>';
        }

        contenido.append('<section class="header3 cid-r5JWc4Jvbq" id="' + lightsID + 'delete1">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-5-1200x675.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p>' + deviceName + ' </p></h1>\
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
        <section class="header11 cid-r5Fx2fBS3m" id="' + lightsID + 'delete2">\
            <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                    <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + lightsID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                       '+ favStatus +'</div>\
                </div>\
            </div>\
        </section>');
    }).catch((error) => {
            console.log('error');
    });
}


function showLightsImg(deviceName) {
    var contenido = $('#addedDevices');
    contenido.append('\
    <section class="features13 cid-r5yZWJv2j1" id="features13-2c">\
        <div class="container">\
        <div class="media-container-row container">\
        <div class="card col-12 col-md-6 p-5 m-3 align-center">\
        <div class="card-img">\
        <img src="assets/images/mbr-5-1200x675.jpg" alt="Mobirise" title="">\
        </div>\
        <h4 class="card-title py-2 mbr-fonts-style display-5"> ' + deviceName + ' </h4>\
        </div>\
        </div>\
        </div>\
        </section>\
    ');
}

function showAcImg(deviceName) {
    var contenido = $('#addedDevices');
    contenido.append('\
    <section class="features13 cid-r5yZWJv2j1" id="features13-2c">\
        <div class="container">\
        <div class="media-container-row container">\
        <div class="card col-12 col-md-6 p-5 m-3 align-center">\
        <div class="card-img">\
        <img src="assets/images/mbr-1-720x480.jpg" alt="Mobirise" title="">\
        </div>\
        <h4 class="card-title py-2 mbr-fonts-style display-5"> ' + deviceName + '</h4>\
        </div>\
        </div>\
        </div>\
        </section>\
    ');
}

function showDoorImg(deviceName) {
    var contenido = $('#addedDevices');
    contenido.append('\
    <section class="features13 cid-r5yZWJv2j1" id="features13-2c">\
        <div class="container">\
        <div class="media-container-row container">\
        <div class="card col-12 col-md-6 p-5 m-3 align-center">\
        <div class="card-img">\
        <img src="assets/images/mbr-1-1200x803.jpg" alt="Mobirise" title="">\
        </div>\
        <h4 class="card-title py-2 mbr-fonts-style display-5">' + deviceName + ' </h4>\
        </div>\
        </div>\
        </div>\
        </section>\
    ');
}

function showBlindsImg(deviceName) {
    var contenido = $('#addedDevices');
    contenido.append('\
    <section class="features13 cid-r5yZWJv2j1" id="features13-2c">\
        <div class="container">\
        <div class="media-container-row container">\
        <div class="card col-12 col-md-6 p-5 m-3 align-center">\
        <div class="card-img">\
        <img src="assets/images/mbr-14-1200x800.jpg" alt="Mobirise" title="">\
        </div>\
        <h4 class="card-title py-2 mbr-fonts-style display-5">' + deviceName + ' </h4>\
        </div>\
        </div>\
        </div>\
        </section>\
    ');
}

function showFridgeImg(deviceName) {
    var contenido = $('#addedDevices');
    contenido.append('\
    <section class="features13 cid-r5yZWJv2j1" id="features13-2c">\
        <div class="container">\
        <div class="media-container-row container">\
        <div class="card col-12 col-md-6 p-5 m-3 align-center">\
        <div class="card-img">\
        <img src="assets/images/mbr-1200x690.jpg" alt="Mobirise" title="">\
        </div>\
        <h4 class="card-title py-2 mbr-fonts-style display-5"> ' + deviceName + ' </h4>\
        </div>\
        </div>\
        </div>\
        </section>\
    ');
}

function showOvenImg(deviceName) {
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
        <h4 class="card-title py-2 mbr-fonts-style display-5"> ' + deviceName + ' </h4>\
        </div>\
        </div>\
        </div>\
        </section>\
    ');
}
