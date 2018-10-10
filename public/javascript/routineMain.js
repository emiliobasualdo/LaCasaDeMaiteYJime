window.addEventListener('load', function () {

    var routineId = localStorage.getItem('currentRoutineId');
    var routineName;
    var header = $('#header1-3p');
    header.html("");
    api.routine.get(routineId)
        .then((data) => {
            routineName = JSON.stringify(data.routine.name, null, 2);
            routineName = routineName.substring(1, routineName.length-1);
            header.append('\
                <div class="container">\
                    <div class="row justify-content-md-center">\
                        <div class="mbr-white col-md-10">\
                            <h1 class="mbr-section-title align-center mbr-bold pb-3 mbr-fonts-style display-1">' + routineName + '</h1>\
                        </div>\
                    </div>\
                </div>');
        })
        .catch((error) => {
            window.alert(error);
        });
    api.routine.get(routineId)
        .then((data) => {
            var actions = JSON.stringify(data.routine.actions, null, 2);
            console.log(actions);
        })
        .catch((error) => {
            window.alert(error);
        });
}, false);
