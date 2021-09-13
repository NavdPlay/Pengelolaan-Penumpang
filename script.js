var penumpang = [];
var pengenal = '';

function naikinPenumpang() {

    var nama = document.getElementById('nama').value.toUpperCase();;

    if (penumpang.length < 10) {
        for (var i = 0; i < 10; i++) {
            if (penumpang[i] == nama) {
                document.getElementById('status').innerHTML = nama + ' sudah ada di dalam angkot!';
                document.getElementById('status').style.color = 'red';
                return nama;
            }
        }
        document.getElementById('status').innerHTML = '';
        penumpang.push(nama);
    } else {
        document.getElementById('status').innerHTML = 'Angkot sudah penuh!';
        document.getElementById('status').style.color = 'red';
    }

    for (var i = 0; i < penumpang.length; i++) {
        pengenal = i + 1;
        document.getElementById(pengenal.toString()).innerHTML = penumpang[i];
    }

    checkIfEmpty();
}
function turuninPenumpang() {

    if (penumpang.length == 0) {
        document.getElementById('status').innerHTML = 'Angkot masih kosong!';
        document.getElementById('status').style.color = 'red';
    } else {
        var nama = document.getElementById('nama').value.toUpperCase();;
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] === nama) {
                penumpang.splice(i, 1);
                document.getElementById('status').innerHTML = '';
            } else if (i === penumpang.length - 1) {
                document.getElementById('status').innerHTML = nama + ' tidak ada di dalam angkot!';
                document.getElementById('status').style.color = 'red';
            }
        }
    }

    for (var i = 0; i <= penumpang.length; i++) {
        pengenal = i + 1;
        if (penumpang[i] === undefined) {
            document.getElementById(pengenal.toString()).innerHTML = '';
        } else {
            document.getElementById(pengenal.toString()).innerHTML = penumpang[i];
        }
    }

    checkIfEmpty();
}

function checkIfEmpty() {

    for (var i = 1; i <= 10; i++) {
        var ID = 'div' + i;
        var el = document.getElementById(i);
        var parentDiv = document.getElementById(ID.toString());

        if (el.innerHTML == undefined) {
            parentDiv.style.backgroundColor = '#00cc00';
        } else if (el.innerHTML == '') {
            parentDiv.style.backgroundColor = '#00cc00';
        } else {
            parentDiv.style.backgroundColor = '#ff0000';
        }
    }
}
