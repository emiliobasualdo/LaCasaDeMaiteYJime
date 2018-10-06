var currentRoomId;

function addRoom() {
        var newRoom;
        //var index = Math.floor(Math.random() * (999 - 1) + 1);
        var roomName = document.getElementById("name-header13-1x").value;
        newRoom = new api.model.room(null, roomName, '{}');

        api.room.add(newRoom)
            .then((data) => {
                newRoom.id = data.room.id; 
                location.href = 'rooms.html';
                //loadRooms();
                // cambiar a rooms asi se actualiza la pagina y se actualice todo
            })
            .catch((error) => {
                //resultTextArea.innerHTML = 'Request failed: ' + error;
            });
}

function goToRoom(roomId) {
    console.log(roomId);
    //location.href = 'room.html';
}

   











// function loadRooms() {
// //     var contenido = document.getElementById("myRooms");
// //     if(contenido) {
// //         var newRoom;
// //         var index = Math.floor(Math.random() * (999 - 1) + 1);
// //         newRoom = new api.model.room(null, 'QUE2' + index, '{}');

// //         api.room.add(newRoom)
// //             .then((data) => {
// //                 newRoom.id = data.room.id; 
// //             })
// //             .catch((error) => {
// //                 //resultTextArea.innerHTML = 'Request failed: ' + error;
// //             });
// //     } else {
// //         var newRoom;
// //         var index = Math.floor(Math.random() * (999 - 1) + 1);
// //         newRoom = new api.model.room(null, 'QUE3' + index, '{}');

// //         api.room.add(newRoom)
// //             .then((data) => {
// //                 newRoom.id = data.room.id; 
// //             })
// //             .catch((error) => {
// //                 //resultTextArea.innerHTML = 'Request failed: ' + error;
// //             });
// //     }
// //     //contenido.html("");
// //     //contenido.append('<section class="features13 cid-r5zf8QJWvr" id="features13-2w"><div class="container"><div class="media-container-row container"><div class="card col-12 col-md-6 p-5 m-3 align-center"><div class="card-img"><a href="room.html"><img src="assets/images/mbr-1-1200x798.jpg" alt="Mobirise" title=""></a></div><h4 class="card-title py-2 mbr-fonts-style display-2"><a href="room.html" class="text-black">Kitchen</a></h4></div></div></div></section>');      
// //     //$('#myRooms').html('<section class="features13 cid-r5zf8QJWvr" id="features13-2w"><div class="container"><div class="media-container-row container"><div class="card col-12 col-md-6 p-5 m-3 align-center"><div class="card-img"><a href="room.html"><img src="assets/images/mbr-1-1200x798.jpg" alt="Mobirise" title=""></a></div><h4 class="card-title py-2 mbr-fonts-style display-2"><a href="room.html" class="text-black">Kitchen</a></h4></div></div></div></section>');
// //      //document.location.href = 'rooms.html';
// //      // api.room.getAll()
// //      //        .then((data) => {
// //      //            for(var i = 0; i < data.rooms.length; i++) {
// //      //                var roomName = JSON.stringify(data.rooms[i].name, null, 2);
// //      //                roomName = roomName.substring(1, roomName.length-1);
// //      //                var roomId = JSON.stringify(data.rooms[i].id, null, 2);


// //      //            }
// //      //            resultTextArea.innerHTML = JSON.stringify(data, null, 2);
// //      //            console.log(data);
// //      //            reload(data);
// //      //        })
// //      //        .catch((error) => {
// //      //            resultTextArea.innerHTML = 'Request failed: ' + error;
// //      //        });
