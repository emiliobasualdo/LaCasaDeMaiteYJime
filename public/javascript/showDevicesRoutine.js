function showOven(ovenID, deviceName, actions){
    var contenido = $('#myDevices');
    var status = "off";
    var temperature;

    for(var i =0; i< actions.length ; i++){
        if(actions[i].actionName == "turnOn"){
            status = "on";
            console.log("action turnOn");
            console.log(status);
        }
        else if(actions[i].actionName == "turnOff"){
            status = "off";
            console.log("action turnOff");
            console.log(status);
        }
        else if(actions[i].actionName == "setTemperature"){
            temperature = actions[i].params[0];
            console.log("action temperature");
            console.log("tempereature = " + temperature);
        }
    }


    if (status == "off") {
        onOffStatus = '<div class="mbr-section-btn">\
        <a class= "btn btn-md btn-black display-7" id="'+ ovenID +'off">OFF</a>\
        </div>';
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
        <div>' + onOffStatus + '\
        </div>\
        </section>');

    } else {
        onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ ovenID +'on"s>ON</a>\
        </div>';

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
        <div id="'+ovenID+'cont"><h7>TEMPERATURE(ºC):   ' + temperature + '</h7>\
        </div>\
        <div>' + onOffStatus + '\
        </div>\
        </section>');
    }
}

function showAC(devID, deviceName, actions){
    var contenido = $('#myDevices');
    var status = "off";
    var temperature;

    for(var i =0; i< actions.length ; i++){
        if(actions[i].actionName == "turnOn"){
            status = "on";
        }
        else if(actions[i].actionName == "turnOff"){
            status = "off";
        }
        else if(actions[i].actionName == "setTemperature"){
            temperature = actions[i].params[0];
        }
    }


    if (status == "off") {
        onOffStatus = '<div class="mbr-section-btn">\
        <a class= "btn btn-md btn-black display-7" id="'+ devID +'off">OFF</a>\
        </div>';
        contenido.append('<section class="header3 cid-r5JWcBA5eR" id="' + devID + 'delete1">\
        <div class="container">\
        <div class="media-container-row">\
        <div class="mbr-figure" style="width: 35%;">\
        <img src="assets/images/mbr-1-720x480.jpg" alt="Mobirise" title="">\
        </div>\
        <div class="media-content">\
        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
        <p>' + deviceName + '</p>\
        </h1>\
        <div class="mbr-section-text mbr-white pb-3 ">\
        </div>\
        <div>' + onOffStatus + '\
        </div>\
        </section>');

    } else {
        onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ devID +'on"s>ON</a>\
        </div>';

        contenido.append('<section class="header3 cid-r5JWcBA5eR" id="' + devID + 'delete1">\
        <div class="container">\
        <div class="media-container-row">\
        <div class="mbr-figure" style="width: 35%;">\
        <img src="assets/images/mbr-1-720x480.jpg" alt="Mobirise" title="">\
        </div>\
        <div class="media-content">\
        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
        <p>' + deviceName + '</p>\
        </h1>\
        <div class="mbr-section-text mbr-white pb-3 ">\
        </div>\
        <div id="'+devID+'cont"><h7>TEMPERATURE(ºC):   ' + temperature + '</h7>\
        </div>\
        <div>' + onOffStatus + '\
        </div>\
        </section>');
    }
}

function showFridge(devID, deviceName, actions) {
    var contenido = $('#myDevices');
    var temperature;

    for(var i =0; i< actions.length ; i++){
        if(actions[i].actionName == "setTemperature"){
            temperature = actions[i].params[0];
        }
    }

    contenido.append('<section class="header3 cid-r5JWcBA5eR" id="' + devID + 'delete1">\
    <div class="container">\
    <div class="media-container-row">\
    <div class="mbr-figure" style="width: 35%;">\
    <img src="assets/images/mbr-1200x690.jpg" alt="Mobirise" title="">\
    </div>\
    <div class="media-content">\
    <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
    <p>' + deviceName + '</p>\
    </h1>\
    <div class="mbr-section-text mbr-white pb-3 ">\
    </div>\
    <div id="'+devID+'cont"><h7>TEMPERATURE(ºC):   ' + temperature + '</h7>\
    </div>\
    </section>');
}

function showLights(devID, deviceName, actions){
    var contenido = $('#myDevices');
    var status = "off";
    var brightness;

    for(var i =0; i< actions.length ; i++){
        if(actions[i].actionName == "turnOn"){
            status = "on";
        }
        else if(actions[i].actionName == "turnOff"){
            status = "off";
        }
        else if(actions[i].actionName == "brightness"){
            brightness = actions[i].params[0];
        }
    }


    if (status == "off") {
        onOffStatus = '<div class="mbr-section-btn">\
        <a class= "btn btn-md btn-black display-7" id="'+ devID +'off">OFF</a>\
        </div>';
        contenido.append('<section class="header3 cid-r5JWcBA5eR" id="' + devID + 'delete1">\
        <div class="container">\
        <div class="media-container-row">\
        <div class="mbr-figure" style="width: 35%;">\
        <img src="assets/images/mbr-5-1200x675.jpg" alt="Mobirise" title="">\
        </div>\
        <div class="media-content">\
        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
        <p>' + deviceName + '</p>\
        </h1>\
        <div class="mbr-section-text mbr-white pb-3 ">\
        </div>\
        <div>' + onOffStatus + '\
        </div>\
        </section>');

    } else {
        onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ devID +'on"s>ON</a>\
        </div>';

        contenido.append('<section class="header3 cid-r5JWcBA5eR" id="' + devID + 'delete1">\
        <div class="container">\
        <div class="media-container-row">\
        <div class="mbr-figure" style="width: 35%;">\
        <img src="assets/images/mbr-5-1200x675.jpg" alt="Mobirise" title="">\
        </div>\
        <div class="media-content">\
        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
        <p>' + deviceName + '</p>\
        </h1>\
        <div class="mbr-section-text mbr-white pb-3 ">\
        </div>\
        <div id="'+devID+'cont">\
        <div class="slidecontainer" id="'+lightsID+'cont">\
            <h7>BRIGHTNESS:  </h7> <input type="range" min="1" max="100" value="' + brightness + '" class="slider" id="'+ lightsID +'slider">\
        </div>\
        </div>\
        <div>' + onOffStatus + '\
        </div>\
        </section>');
    }
}

function showDoor(devID, deviceName, actions){
    var contenido = $('#myDevices');
    var status = "locked";

    for(var i =0; i< actions.length ; i++){
        if(actions[i].actionName == "unlocked"){
            status = "unlocked";
        }
        else if(actions[i].actionName == "locked"){
            status = "locked";
        }
    }


    if (status == "unlocked") {
        unlockedLockedStatus = '<div class="mbr-section-btn">\
        <a class= "btn btn-md btn-black display-7" id="'+ devID +'off">UNLOCKED</a>\
        </div>';

    } else {
        unlockedLockedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ devID +'on">LOCKED</a>\
        </div>';
    }

    contenido.append('<section class="header3 cid-r5JWcBA5eR" id="' + devID + 'delete1">\
        <div class="container">\
        <div class="media-container-row">\
        <div class="mbr-figure" style="width: 35%;">\
        <img src="assets/images/mbr-1-1200x803.jpg" alt="Mobirise" title="">\
        </div>\
        <div class="media-content">\
        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
        <p>' + deviceName + '</p>\
        </h1>\
        <div class="mbr-section-text mbr-white pb-3 ">\
        </div>\
        <div>' + unlockedLockedStatus + '\
        </div>\
        </section>');
}

function showBlinds(devID, deviceName, actions){
    var contenido = $('#myDevices');
    var status = "down";

    for(var i =0; i< actions.length ; i++){
        if(actions[i].actionName == "down"){
            status = "down";
        }
        else if(actions[i].actionName == "up"){
            status = "up";
        }
    }


    if (status == "down") {
        upDownStatus = '<div class="mbr-section-btn">\
        <a class= "btn btn-md btn-black display-7" id="'+ devID +'off">DOWN</a>\
        </div>';

    } else {
        upDownStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ devID +'on">UP</a>\
        </div>';
    }

    contenido.append('<section class="header3 cid-r5JWcBA5eR" id="' + devID + 'delete1">\
        <div class="container">\
        <div class="media-container-row">\
        <div class="mbr-figure" style="width: 35%;">\
        <img src="assets/images/mbr-14-1200x800.jpg" alt="Mobirise" title="">\
        </div>\
        <div class="media-content">\
        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
        <p>' + deviceName + '</p>\
        </h1>\
        <div class="mbr-section-text mbr-white pb-3 ">\
        </div>\
        <div>' + upDownStatus + '\
        </div>\
        </section>');
}
/*
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
}*/
/*
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
*/