function formatNomorTelepon(nomorTelepon) {
    var cleaned = ('' + nomorTelepon).replace(/\D/g, '')
    var match1 = cleaned.match(/^(0|)?(\d{3})(\d{4})(\d{4})$/); //nomor 12 digit
    var match2 = cleaned.match(/^(0|)?(\d{4})(\d{4})(\d{4})$/); //nomor 13 digit
    if (match1 && nomorTelepon.length == 12) {
        var intlCode = (match1[1] ? '+62 ' : '')
        return [intlCode, match1[2], ' ', match1[3], ' ', match1[4]].join('')
    } else if (match2 && nomorTelepon.length == 13) {
        var intlCode = (match2[1] ? '+62 ' : '')
        return [intlCode, match2[2], ' ', match2[3], ' ', match2[4]].join('')
    }
    return false;
};

//   Hasil implementasi fungsi formatNomorTelepon() khusus untuk kode telepon Indonesa (+62)
console.log(formatNomorTelepon('0812345678900')); // => nomor 13 digit "+62 8123 4567 8900"
console.log(formatNomorTelepon('082227689912')); // => nomor 12 digit "+62 822 2768 9912"
console.log(formatNomorTelepon('01812538711134')); // => nomor yang memiliki selain 12 dan 13 digit angka (false)
console.log(formatNomorTelepon('1812538711134')); // => nomor yang tidak dimulai dengan angka 0 (false)