window.addEventListener('load', function () {

    var contenido = $('#myRoutines');
    contenido.html("");
    api.routine.getAll()
        .then((data) => {
            var routineName;
            var routineId;
            for (var i=0; i<data.routines.length; i++){
                routineName = JSON.stringify(data.routines[i].name, null, 2);
                routineName = routineName.substring(1, routineName.length-1);
                routineId = JSON.stringify(data.routines[i].id, null, 2);
                routineId = routineId.substring(1, routineId.length-1);
                contenido.append('<section class="mbr-section info1 cid-r5ziqKy8Dr" id="info1-37">\
                    <div class="container">\
                    <div class="row justify-content-center content-row">\
                    <div class="media-container-column title col-12 col-lg-7 col-md-6">\
                    <h2 class="align-left mbr-bold mbr-fonts-style display-5"><a onclick="goToRoutine(\'' + routineId + '\')" class="text-black">' + routineName + '</a></h2>\
                </div>\
                <div class="media-container-column col-12 col-lg-3 col-md-4">\
                    <div class="mbr-section-btn align-right py-4"><a class="btn btn-primary display-4" onclick="executeRoutine(\'' + routineId + '\')"><span class="mbri-play mbr-iconfont mbr-iconfont-btn"></span></a></div>\
                </div>\
                </div>\
                </div>\
                </section>\
                <section class="cid-r5z94be3Ns" id="footer5-2q">');
            }
        })

}, false);

function executeRoutine(routineId) {
    api.routine.execute(routineId);
}