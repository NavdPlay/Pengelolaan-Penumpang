var open = true;
var penumpang = [];
while (open) {
    var kondisi1 = true;
    var kondisi2 = true;
    var kondisi3 = true;
    var kondisiOpen = true;

    while (kondisi1) {
        var opsi = prompt('Pilihan: \n1. Tambah penumpang \n2. Hapus penumpang');
        if (opsi === '1') {
            while (kondisi2) {
                var nama = prompt('Masukkan nama penumpang');
                if (nama === "" || nama === null || nama === " ") {
                    alert('nama tidak boleh kosong!');
                } else {
                    kondisi2 = false;
                }   
            }
            kondisi1 = false;
        } else if (opsi === '2'){
            while (kondisi3) {
                var nama = prompt('Masukkan nama penumpang');
                if (nama === "" || nama === null || nama === " ") {
                    alert('nama tidak boleh kosong!');
                } else {
                    kondisi3 = false;
                }   
            }
            kondisi1 = false;
        } else {
            alert('pilihan harus antara 1 dan 2, dan tidak boleh kosong');
        }
    }
    
    function tambahPenumpang(namaPenumpang) {
        if (penumpang.length === 0) {
            penumpang.push(namaPenumpang);
            return penumpang;
        } else {
            for (var i = 0; i < penumpang.length; i++) {
                if (penumpang[i] === undefined) {
                    penumpang[i] = namaPenumpang;
                    return penumpang;
                }
            }
            if (penumpang[i] !== namaPenumpang) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }

    function hapusPenumpang(namaPenumpang) {
        if (penumpang.length === 0) {
            alert('Angkot masih kosong!');
        } else {
            for (var i = 0; i < penumpang.length; i++) {
                if (penumpang[i] === namaPenumpang) {
                    penumpang[i] = undefined;
                    return penumpang;
                } else if (i === penumpang.length -1) {
                    alert(namaPenumpang + ' tidak ada di dalam angkot!')
                }
            }
        }
    }

    if (opsi === '1') {
        tambahPenumpang(nama);
    } else if (opsi === '2') {
        hapusPenumpang(nama);
    }

    alert('Penumpang saat ini: ' + penumpang);
    
    while (kondisiOpen) {
        var konfirmasi = prompt('Apakah anda ingin keluar? \n1. Lanjut \n2. Keluar');
        if (konfirmasi === '1') {
            kondisiOpen = false;
        } else if (konfirmasi === '2'){
            kondisiOpen = false;
            open = false;
        } else {
            alert('pilihan harus antara 1 dan 2, dan tidak boleh kosong');
        }
    }
}