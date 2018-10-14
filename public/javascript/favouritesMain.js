window.addEventListener('load', function () {
    api.device.getAllDevices()
        .then((data) => {
            for (var i = 0; i < data.devices.length; i++) {
                console.log(data.devices[i]);
                var m = JSON.parse(data.devices[i].meta);
                if (m.fav == 'fav') {
                    var deviceName = data.devices[i].name;
                    deviceName = deviceName.substr(0, deviceName.indexOf('_'));
                    if (data.devices[i].typeId == "go46xmbqeomjrsjr") {
                        console.log(data.devices[i].id);
                        showLights1(data.devices[i].id, deviceName);
                        console.log('lamp');
                    } else if (data.devices[i].typeId == "im77xxyulpegfmv8") {
                        showOven1(data.devices[i].id, deviceName);
                        console.log('oven');
                    } else if (data.devices[i].typeId == 'eu0v2xgprrhhg41g') {
                        showBlinds1(data.devices[i].id, deviceName);
                        console.log('blinds');
                    } else if (data.devices[i].typeId == 'lsf78ly0eqrjbz91') {
                        showDoor1(data.devices[i].id, deviceName);
                        console.log('doors');
                    } else if (data.devices[i].typeId == 'li6cbv5sdlatti0j') {
                        showAC1(data.devices[i].id, deviceName);
                        console.log('AC');
                    } else if (data.devices[i].typeId == 'rnizejqr2di0okho') {
                        showFridge1(data.devices[i].id, deviceName);
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

// function showOven1(ovenID, deviceName) {
//     var contenido = $('#devicesFav');
//     api.device.action(ovenID,'getState')
//         .then((data) => {
//             var temperature = data.result.temperature;
//             var status = data.result.status;
//             var onOffStatus;
//
//             if (status === "off") {
//                 onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7"  id="'+ ovenID +'on" onclick="trigger(\'' + ovenID + '\',\'turnOn\' ,\'oven\')">ON</a>\
//                                 <a class= "btn btn-md btn-black display-7" id="'+ ovenID +'off" onclick="trigger(\'' + ovenID + '\',\'turnOff\' ,\'oven\' )">OFF</a>\
//                             </div>';
//             } else {
//                 onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ ovenID +'on" onclick="trigger(\'' + ovenID + '\',\'turnOn\' ,\'oven\')">ON</a>\
//                                 <a class="btn btn-md btn-black-outline display-7" id="'+ ovenID +'off" onclick="trigger(\'' + ovenID + '\',\'turnOff\' ,\'oven\')">OFF</a></div>\
//                             </div>';
//             }
//             contenido.append('<section class="header3 cid-r5JWcBA5eR" id="' + ovenID + 'delete1">\
//                 <div class="container">\
//                     <div class="media-container-row">\
//                         <div class="mbr-figure" style="width: 35%;">\
//                             <img src="assets/images/mbr-1200x704.jpg" alt="Mobirise" title="">\
//                         </div>\
//                 <div class="media-content">\
//                     <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
//                         <p>' + deviceName + '</p>\
//                     </h1>\
//                 <div class="mbr-section-text mbr-white pb-3 ">\
//                 </div>\
//                 <h7>TEMPERATURE(ºC):  </h7><input type="text" value="' + temperature + '" id="'+ ovenID +'temp"><button type="button" onclick="trigger(\'' + ovenID + '\',\'setTemperature\', \'oven\')" >Set!</button>' + onOffStatus + '\
//                 </div>\
//                 </div>\
//                 </section>\
//                 <section class="header11 cid-r5JVGBoliw" id="' + ovenID + 'delete2">\
//                 <div class="container align-left">\
//                 <div class="media-container-column mbr-white col-md-12">\
//                 <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + ovenID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
//                 <a class="btn btn-md btn-success-outline display-4" id="\' + ovenID + \'fav" onclick="deleteFavourite1(\'' + ovenID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a></div>\
//                 </div>\
//                 </div>\
//                 </section>');
//         })
//         .catch((error) => {
//             console.log('error');
//         });
//
// }
//
// function showDoor1(doorID,  deviceName) {
//     var contenido = $('#devicesFav');
//     api.device.action(doorID, 'getState')
//         .then((data) => {
//             var lock = data.result.lock;
//             var status = data.result.status;
//             var lockedUnlockedStatus;
//             var openCLosedStatus;
//
//             if(status == "closed"){
//                 openCLosedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" id="'+ doorID +'open" onclick="trigger(\'' + doorID + '\',\'open\',\'door\')">OPEN</a>\
//                             <a class= "btn btn-md btn-black display-7" id="'+ doorID +'close" onclick="trigger(\'' + doorID + '\',\'close\',\'door\')">CLOSE</a>\
//                         </div>';
//             } else {
//                 openCLosedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ doorID +'open" onclick="trigger(\'' + doorID + '\',\'open\',\'door\')">OPEN</a>\
//                             <a class="btn btn-md btn-black-outline display-7" id="'+ doorID +'close" onclick="trigger(\'' + doorID + '\',\'close\',\'door\')">CLOSE</a></div>\
//                         </div>';
//             }
//
//             if(lock == "unlocked"){
//                 lockedUnlockedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" id="'+ doorID +'lock" onclick="trigger(\'' + doorID + '\',\'lock\', \'door\')">LOCK</a>\
//                             <a class= "btn btn-md btn-black display-7" id="'+ doorID +'unlock" onclick="trigger(\'' + doorID + '\',\'unlock\', \'door\')">UNLOCK</a>\
//                         </div>';
//             } else {
//                 lockedUnlockedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ doorID +'lock" onclick="trigger(\'' + doorID + '\',\'lock\', \'door\')">LOCK</a>\
//                             <a class="btn btn-md btn-black-outline display-7" id="'+ doorID +'unlock" onclick="trigger(\'' + doorID + '\',\'unlock\', \'door\')">UNLOCK</a></div>\
//                         </div>';
//             }
//
//             contenido.append('<section class="header3 cid-r5K0VsSp7w" id="' + doorID + 'delete1"">\
//             <div class="container">\
//                 <div class="media-container-row">\
//                     <div class="mbr-figure" style="width: 35%;">\
//                         <img src="assets/images/mbr-1-1200x803.jpg" alt="Mobirise" title="">\
//                     </div>\
//                     <div class="media-content">\
//                         <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
//                         <p>' + deviceName + ' </p></h1>\
//                         <div class="mbr-section-text mbr-white pb-3 ">\
//                         </div>' + lockedUnlockedStatus + openCLosedStatus+ '\
//                     </div>\
//                 </div>\
//             </div>\
//         </section>\
//         <section class="header11 cid-r5JVKsyeI9" id="' + doorID + 'delete2">\
//             <div class="container align-left">\
//                 <div class="media-container-column mbr-white col-md-12">\
//                     <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + doorID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
//                      <a class="btn btn-md btn-success-outline display-4" id="\' + doorID + \'fav" onclick="deleteFavourite1(\'' + doorID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a></div>\
//                 </div>\
//             </div>\
//         </section>');
//         })
//         .catch((error) => {
//             console.log('error');
//         });
// }
//
//
//
// function showAC1(acID,  deviceName) {
//     var contenido = $('#devicesFav');
//     api.device.action(acID,'getState').then((data) => {
//         var temperature = data.result.temperature;
//         var status = data.result.status;
//         var onOffStatus;
//
//         if(status == "off"){
//             onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" id="'+ acID +'on" onclick="trigger(\'' + acID + '\',\'turnOn\', \'ac\')">ON</a>\
//                                 <a class= "btn btn-md btn-black display-7" id="'+ acID +'off" onclick="trigger(\'' + acID + '\',\'turnOff\', \'ac\')">OFF</a>\
//                             </div>';
//         } else {
//             onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ acID +'on" onclick="trigger(\'' + acID + '\',\'turnOn\', \'ac\')">ON</a>\
//                                 <a class="btn btn-md btn-black-outline display-7" id="'+ acID +'off" onclick="trigger(\'' + acID + '\',\'turnOff\', \'ac\')">OFF</a></div>\
//                             </div>';
//         }
//
//         contenido.append('<section class="header3 cid-r5JWdFEF1r" id="' + acID + 'delete1">\
//             <div class="container">\
//                 <div class="media-container-row">\
//                     <div class="mbr-figure" style="width: 35%;">\
//                         <img src="assets/images/mbr-1-720x480.jpg" alt="Mobirise" title="">\
//                     </div>\
//                     <div class="media-content">\
//                         <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
//                         <p>' + deviceName + '</p></h1>\
//                         <div class="mbr-section-text mbr-white pb-3 ">\
//                         </div>\
//                         <h7>TEMPERATURE(ºC):  </h7><input type="text" value="' + temperature + '" id="'+ acID +'temp"><button type="button" class="btn btn-warning" onclick="trigger(\'' + acID + '\',\'setTemperature\', \'ac\')" >Set!</button>' + onOffStatus + '\
//                     </div>\
//                 </div>\
//             </div>\
//         </section>\
//         <section class="header11 cid-r5JVJxh7r9" id="' + acID + 'delete2">\
//             <div class="container align-left">\
//                 <div class="media-container-column mbr-white col-md-12">\
//                     <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + acID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
//                     <a class="btn btn-md btn-success-outline display-4" id="\' + acID + \'fav" onclick="deleteFavourite1(\'' + acID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a></div>\
//                 </div>\
//             </div>\
//         </section>');
//     }).catch((error) => {
//         console.log('error');
//     });
// }
//
//
// function showFridge1(fridgeID,  deviceName) {
//     var contenido = $('#devicesFav');
//     api.device.action(fridgeID,'getState').then((data) => {
//         var temperature = data.result.temperature;
//
//         contenido.append('<section class="header3 cid-r5JWd5XdmE" id="' + fridgeID + 'delete1">\
//             <div class="container">\
//                 <div class="media-container-row">\
//                     <div class="mbr-figure" style="width: 35%;">\
//                         <img src="assets/images/mbr-1200x690.jpg" alt="Mobirise" title="">\
//                     </div>\
//                     <div class="media-content">\
//                         <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
//                         <p> ' + deviceName + ' </p></h1>\
//                         <div class="mbr-section-text mbr-white pb-3 ">\
//                         </div>\
//                         <h7>TEMPERATURE(ºC):  </h7><input type="text" value="' + temperature + '" id="'+ fridgeID +'temp"><button type="button" class="btn btn-warning" onclick="trigger(\'' + fridgeID + '\',\'setTemperature\', \'fridge\')" >Set!</button>\
//                     </div>\
//                 </div>\
//             </div>\
//         </section>\
//         <section class="header11 cid-r5JVIrRlI9" id="' + fridgeID + 'delete2">\
//             <div class="container align-left">\
//                 <div class="media-container-column mbr-white col-md-12">\
//                     <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + fridgeID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
//                     <a class="btn btn-md btn-success-outline display-4" id="\' + acID + \'fav" onclick="deleteFavourite1(\'' + fridgeID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a></div>\
//                 </div>\
//             </div>\
//         </section>');
//     }).catch((error) => {
//         console.log('error');
//     });
// }
//
//
// function showBlinds1(blindsID,  deviceName) {
//     var contenido = $('#devicesFav');
//     api.device.action(blindsID,'getState').then((data) => {
//
//         var status = data.result.status;
//
//         var openCLosedStatus;
//
//         if(status == "closed" || status == "closing"){
//             openCLosedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" id="'+ blindsID +'open" onclick="trigger(\'' + blindsID + '\',\'up\',\'blinds\')">OPEN</a>\
//                                 <a class= "btn btn-md btn-black display-7" id="'+ blindsID +'close" onclick="trigger(\'' + blindsID + '\',\'down\',\'blinds\')">CLOSE</a>\
//                             </div>';
//         } else {
//             openCLosedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ blindsID +'open" onclick="trigger(\'' + blindsID + '\',\'up\',\'blinds\')">OPEN</a>\
//                                 <a class="btn btn-md btn-black-outline display-7" id="'+ blindsID +'close" onclick="trigger(\'' + blindsID + '\',\'down\',\'blinds\')">CLOSE</a></div>\
//                             </div>';
//         }
//         contenido.append('<section class="header3 cid-r5K0Vz6aVk" id="' + blindsID + 'delete1">\
//             <div class="container">\
//                 <div class="media-container-row">\
//                     <div class="mbr-figure" style="width: 35%;">\
//                         <img src="assets/images/mbr-14-1200x800.jpg" alt="Mobirise" title="">\
//                     </div>\
//                     <div class="media-content">\
//                         <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
//                         <p> ' + deviceName + ' </p></h1>\
//                         <div class="mbr-section-text mbr-white pb-3 ">\
//                         </div>' + openCLosedStatus + '\
//                     </div>\
//                 </div>\
//             </div>\
//         </section>\
//         <section class="header11 cid-r5JVLDfCxK" id="' + blindsID + 'delete2">\
//             <div class="container align-left">\
//                 <div class="media-container-column mbr-white col-md-12">\
//                     <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + blindsID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
//                        <a class="btn btn-md btn-success-outline display-4" id="\' + blindsID + \'fav"onclick="deleteFavourite1(\'' + blindsID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a></div>\
//                 </div>\
//             </div>\
//         </section>\
//         ');
//     })
//         .catch((error) => {
//             console.log('error');
//         });
// }
//
//
// function showLights1(lightsID, deviceName) {
//     var contenido = $('#devicesFav');
//     api.device.action(lightsID,'getState').then((data) => {
//
//         var brightness = data.result.brightness;
//         var status = data.result.status;
//
//
//         var onOffStatus;
//
//         if (status === "off") {
//             onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7"  id="'+ lightsID +'on" onclick="trigger(\'' + lightsID + '\',\'turnOn\' ,\'lights\')">ON</a>\
//                                 <a class= "btn btn-md btn-black display-7" id="'+ lightsID +'off" onclick="trigger(\'' + lightsID + '\',\'turnOff\' ,\'lights\' )">OFF</a>\
//                             </div>';
//         } else {
//             onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ lightsID +'on" onclick="trigger(\'' + lightsID + '\',\'turnOn\' ,\'lights\')">ON</a>\
//                                 <a class="btn btn-md btn-black-outline display-7" id="'+ lightsID +'off" onclick="trigger(\'' + lightsID + '\',\'turnOff\' ,\'lights\')">OFF</a></div>\
//                             </div>';
//         }
//
//         contenido.append('<section class="header3 cid-r5JWc4Jvbq" id="' + lightsID + 'delete1">\
//             <div class="container">\
//                 <div class="media-container-row">\
//                     <div class="mbr-figure" style="width: 35%;">\
//                         <img src="assets/images/mbr-5-1200x675.jpg" alt="Mobirise" title="">\
//                     </div>\
//                     <div class="media-content">\
//                         <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
//                         <p>' + deviceName + ' </p></h1>\
//                         <div class="mbr-section-text mbr-white pb-3 ">\
//                         </div>\
//                         <div class="slidecontainer">\
//                             <h7>BRIGHTNESS:  </h7> <input type="range" min="1" max="100" value="' + brightness + '" class="slider" id="'+ lightsID +'slider" onchange="trigger(\'' + lightsID + '\',\'setBrightness\', \'lights\')">\
//                             ' + onOffStatus + '\
//                         </div>\
//                     </div>\
//                 </div>\
//             </div>\
//         </section>\
//         <section class="header11 cid-r5Fx2fBS3m" id="' + lightsID + 'delete2">\
//             <div class="container align-left">\
//                 <div class="media-container-column mbr-white col-md-12">\
//                     <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + lightsID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
//                     <a class="btn btn-md btn-success-outline display-4" id="\' + lightsID + \'fav"onclick="deleteFavourite1(\'' + lightsID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a></div>\
//                 </div>\
//             </div>\
//         </section>');
//     }).catch((error) => {
//         console.log('error');
//     });
// }



function showOven1(ovenID, deviceName) {
    var contenido = $('#devicesFav');
    api.device.action(ovenID,'getState')
        .then((data) => {
            var temperature = data.result.temperature;
            var status = data.result.status;
            var onOffStatus;
            if (status === "off") {
                onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7"  id="'+ ovenID +'on" onclick="trigger(\'' + ovenID + '\',\'turnOn\' ,\'oven\')">TURN ON</a>\
                                <a class= "btn btn-md btn-black display-7" id="'+ ovenID +'off" onclick="trigger(\'' + ovenID + '\',\'turnOff\' ,\'oven\' )">TURN OFF</a>\
                            </div>';
            } else {
                onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ ovenID +'on" onclick="trigger(\'' + ovenID + '\',\'turnOn\' ,\'oven\')">TURN ON</a>\
                                <a class="btn btn-md btn-black-outline display-7" id="'+ ovenID +'off" onclick="trigger(\'' + ovenID + '\',\'turnOff\' ,\'oven\')">TURN OFF</a></div>\
                            </div>';
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
                    <h1  class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-7">\
                        Current State: \
                        <span id="'+ovenID+'state"></span>\
                    </h1>\
                <div class="mbr-section-text mbr-white pb-3 ">\
                </div>\
                <div id="'+ovenID+'cont"><h7>Temperature(ºC):  </h7><input type="number" value="' + temperature + '" id="'+ ovenID +'temp">\
                <button id="'+ovenID+'set" type="button" class="btn-warning btn-xs" onclick="trigger(\'' + ovenID + '\',\'setTemperature\', \'oven\')" >Set</button>\
                </div>\
                <div>' + onOffStatus + '\
                </div>\
                </section>\
                <section class="header11 cid-r5JVGBoliw" id="' + ovenID + 'delete2">\
                <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
        <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + ovenID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
        <a class="btn btn-md btn-success-outline display-4" id="' + ovenID + 'fav" onclick="deleteFavourite1(\'' + ovenID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a></div>\
        </div>\
        </div>\
        </section>');
            updateStates(ovenID, "oven");
        })
        .catch((error) => {
            console.log('error');
        });

}

function showDoor1(doorID,  deviceName) {
    var contenido = $('#devicesFav');
    api.device.action(doorID, 'getState')
        .then((data) => {
            var lock = data.result.lock;
            var status = data.result.status;
            var lockedUnlockedStatus;
            var openCLosedStatus;

            if(status == "closed"){
                openCLosedStatus = '<div class="mbr-section-btn">\
                                       <a class="btn btn-md btn-black-outline display-7" id="'+ doorID +'open" onclick="trigger(\'' + doorID + '\',\'open\',\'door\')">OPEN</a>\
                                <a class= "btn btn-md btn-black display-7" id="'+ doorID +'close" onclick="trigger(\'' + doorID + '\',\'close\',\'door\')">CLOSE</a>\
                            </div>';
            } else {
                openCLosedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ doorID +'open" onclick="trigger(\'' + doorID + '\',\'open\',\'door\')">OPEN</a>\
                                <a class="btn btn-md btn-black-outline display-7" id="'+ doorID +'close" onclick="trigger(\'' + doorID + '\',\'close\',\'door\')">CLOSE</a></div>\
                            </div>';
            }

            if(lock == "unlocked"){
                lockedUnlockedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" id="'+ doorID +'lock" onclick="trigger(\'' + doorID + '\',\'lock\', \'door\')">LOCK</a>\
                                <a class= "btn btn-md btn-black display-7" id="'+ doorID +'unlock" onclick="trigger(\'' + doorID + '\',\'unlock\', \'door\')">UNLOCK</a>\
                            </div>';
            } else {
                lockedUnlockedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ doorID +'lock" onclick="trigger(\'' + doorID + '\',\'lock\', \'door\')">LOCK</a>\
                                <a class="btn btn-md btn-black-outline display-7" id="'+ doorID +'unlock" onclick="trigger(\'' + doorID + '\',\'unlock\', \'door\')">UNLOCK</a></div>\
                            </div>';
            }

            contenido.append('<section class="header3 cid-r5K0VsSp7w" id="' + doorID + 'delete1"">\
                <div class="container">\
                    <div class="media-container-row">\
                        <div class="mbr-figure" style="width: 35%;">\
                            <img src="assets/images/mbr-1-1200x803.jpg" alt="Mobirise" title="">\
                        </div>\
                        <div class="media-content">\
                            <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                                <p>' + deviceName + ' </p>\
                            </h1>\
                            <h1  class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-7">\
                                Current State: \
                                <span id="'+doorID+'state"></span>\
                            </h1>\
                            <div class="mbr-section-text mbr-black pb-3 "> '+ lockedUnlockedStatus + '</div>\
                            <div class="mbr-section-text mbr-black pb-3 "> '+ openCLosedStatus + '</div>\
                    </div>\
                </div>\
            </section>\
            <section class="header11 cid-r5JVKsyeI9" id="' + doorID + 'delete2">\
                <div class="container align-left">\
                    <div class="media-container-column mbr-white col-md-12">\
                        <div class="mbr-section-btn py-4">\
                            <a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + doorID + '\')">\
                                <span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                         <a class="btn btn-md btn-success-outline display-4" id="' + doorID + 'fav" onclick="deleteFavourite1(\'' + doorID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a></div>\
                    </div>\
                </div>\
            </section>');

            updateStates(doorID, "door");
        })

        .catch((error) => {
            console.log(error);
        });
}

function showAC1(acID,  deviceName) {
    var contenido = $('#devicesFav');
    api.device.action(acID,'getState').then((data) => {
        var temperature = data.result.temperature;
        var status = data.result.status;
        var onOffStatus;

        if(status == "off"){
            onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" id="'+ acID +'on" onclick="trigger(\'' + acID + '\',\'turnOn\', \'ac\')">TURN ON</a>\
                                <a class= "btn btn-md btn-black display-7" id="'+ acID +'off" onclick="trigger(\'' + acID + '\',\'turnOff\', \'ac\')">TURN OFF</a>\
                            </div>';
        } else {
            onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ acID +'on" onclick="trigger(\'' + acID + '\',\'turnOn\', \'ac\')">TURN ON</a>\
                                <a class="btn btn-md btn-black-outline display-7" id="'+ acID +'off" onclick="trigger(\'' + acID + '\',\'turnOff\', \'ac\')">TURN OFF</a></div>\
                            </div>';
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
                        <h1  class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-7">\
                            Current State: \
                            <span id="'+acID+'state"></span>\
                        </h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>\
                        <div id="'+acID+'cont"><h7>Temperature(ºC):  </h7><input type="number" value="' + temperature + '" id="'+ acID +'temp">\
                        <button type="button" id="'+acID+'set" class="btn-warning btn-xs" onclick="trigger(\'' + acID + '\',\'setTemperature\', \'ac\') " >Set</button>\
                        </div>\
                        <div>' + onOffStatus + '\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section class="header11 cid-r5JVJxh7r9" id="' + acID + 'delete2">\
            <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                    <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + acID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                      <a class="btn btn-md btn-success-outline display-4" id="' + acID + 'fav" onclick="deleteFavourite1(\'' + acID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a></div>\
                </div>\
            </div>\
        </section>');
        updateStates(acID, "ac");
    }).catch((error) => {
        console.log('error');
    });
}

function showFridge1(fridgeID,  deviceName) {
    var contenido = $('#devicesFav');
    api.device.action(fridgeID,'getState').then((data) => {
        var temperature = data.result.temperature;
        var fTemperature = data.result.freezerTemperature;

        contenido.append('<section class="header3 cid-r5JWd5XdmE" id="' + fridgeID + 'delete1">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-1200x690.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p> ' + deviceName + ' </p></h1>\
                        <h1  class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-7">\
                            Current State: \
                            <span id="'+fridgeID+'state"></span>\
                        </h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>\
                        <div id="'+fridgeID+'cont">\
                            <h7>Temperature(ºC):  </h7>\
                                <input type="number" value="' + temperature + '" id="'+ fridgeID +'temp">\
                                <button type="button" id="'+fridgeID+'set" class="btn-warning btn-xs" onclick="trigger(\'' + fridgeID + '\',\'setTemperature\', \'fridge\')" >Set</button>\
                            <br/>\
                            <h7>Freezer Temperature(ºC):  </h7>\
                                <input type="number" value="' + fTemperature + '" id="'+ fridgeID +'fTemp">\
                                <button type="button" id="'+fridgeID+'fSet" class="btn-warning btn-xs" onclick="trigger(\'' + fridgeID + '\',\'setFreezerTemperature\', \'fridge\')" >Set</button>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section class="header11 cid-r5JVIrRlI9" id="' + fridgeID + 'delete2">\
            <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                    <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + fridgeID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                        <a class="btn btn-md btn-success-outline display-4" id="' + fridgeID + 'fav" onclick="deleteFavourite1(\'' + fridgeID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a></div>\
                </div>\
            </div>\
        </section>');
        //updateStates(fridgeID, "fridge");

    }).catch((error) => {
        console.log('error');
    });
}

function showBlinds1(blindsID,  deviceName) {
    var contenido = $('#devicesFav');
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
        contenido.append('<section class="header3 cid-r5K0Vz6aVk" id="' + blindsID + 'delete1">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-14-1200x800.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p> ' + deviceName + ' </p></h1>\
                        <h1  class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-7">\
                            Current State: \
                            <span id="'+blindsID+'state"></span>\
                        </h1>\
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
                       <a class="btn btn-md btn-success-outline display-4" id="' + blindsID + 'fav" onclick="deleteFavourite1(\'' + blindsID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a></div>\
                </div>\
            </div>\
        </section>\
        ');
        updateStates(blindsID, "blinds");
    })
        .catch((error) => {
            console.log('error');
        });
}

function showLights1(lightsID, deviceName) {
    var contenido = $('#devicesFav');
    api.device.action(lightsID,'getState').then((data) => {

        var brightness = data.result.brightness;
        var status = data.result.status;


        var onOffStatus;

        if (status === "off") {
            onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7"  id="'+ lightsID +'on" onclick="trigger(\'' + lightsID + '\',\'turnOn\' ,\'lights\')">TURN ON</a>\
                                <a class= "btn btn-md btn-black display-7" id="'+ lightsID +'off" onclick="trigger(\'' + lightsID + '\',\'turnOff\' ,\'lights\' )">TURN OFF</a>\
                            </div>';
        } else {
            onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" id="'+ lightsID +'on" onclick="trigger(\'' + lightsID + '\',\'turnOn\' ,\'lights\')">TURN ON</a>\
                                <a class="btn btn-md btn-black-outline display-7" id="'+ lightsID +'off" onclick="trigger(\'' + lightsID + '\',\'turnOff\' ,\'lights\')">TURN OFF</a></div>\
                            </div>';
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
                        <h1  class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-7">\
                            Current State: \
                            <span id="'+lightsID+'state"></span>\
                            <span><button id="'+lightsID+'colorState" class="btn-xs" type="button" disabled>ON</button></span>\
                        </h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>\
                        <div id="'+lightsID+'cont">\
                            <div class="slidecontainer" >\
                                <h7>Brightness:  </h7> <input type="range" min="1" max="100" value="' + brightness + '" class="slider" id="'+ lightsID +'slider" onchange="trigger(\'' + lightsID + '\',\'setBrightness\', \'lights\')">\
                            </div>\
                            <button id="'+lightsID+'colorbtn" class="btn-xs" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">\
                                Pick a color\
                            </button>\
                            <div class="collapse" id="collapseExample" >\
                                <div class="card card-body">\
                                    <div id="color-picker-container"></div>\
                                </div>\
                            </div>\
                        </div>\
                        ' + onOffStatus + '\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section class="header11 cid-r5Fx2fBS3m" id="' + lightsID + 'delete2">\
            <div class="container align-left">\
                <div class="media-container-column mbr-white col-md-12">\
                    <div class="mbr-section-btn py-4"><a class="btn btn-md btn-secondary-outline display-4" onclick="deleteDeviceFromRoom(\'' + lightsID + '\')"><span class="mbri-trash mbr-iconfont mbr-iconfont-btn"></span>DELETE</a>\
                       <a class="btn btn-md btn-success-outline display-4" id="' + lightsID + 'fav" onclick="deleteFavourite1(\'' + lightsID + '\')"><span class="mbri-star mbr-iconfont mbr-iconfont-btn"></span>DELETE FROM FAVOURITES</a></div>\
                </div>\
            </div>\
        </section>');

        updateStates(lightsID, "lights");

        var demoColorPicker = new iro.ColorPicker(document.getElementById("color-picker-container"), {
            // Set the size of the color picker UI
            width: 300,
            height: 300,
            // Set the initial color to red
            color: "#ffffff"
        });

        demoColorPicker.on("color:change", function(color, changes) {
            // Log the color's hex RGB value to the dev console
            trigger(lightsID,"setColor", "lights",JSON.stringify([color.hexString.substring(1,color.hexString.length)]));
        });

    }).catch((error) => {
        console.log(error);
    });
}
