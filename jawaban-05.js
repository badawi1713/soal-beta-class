// Membuat fungsi menghitung angka yang memiliki lubang;
function countLubang(angka) {
    var jumlahLubang = 0;

    var stringAngka = angka.toString();

    for (i = 0; i < angka.toString().length; i++) {
        if (stringAngka[i] === '0' || stringAngka[i] === '4' || stringAngka[i] === '6' || stringAngka[i] === '8' || stringAngka[i] === '9') {
            jumlahLubang++;
        }
    }

    console.log(jumlahLubang);
}
countLubang('12345'); //return 1 angka yang memiliki lubang; 4
countLubang('67890'); //return 4 angka yang memiliki lubang; 6,8,9,0