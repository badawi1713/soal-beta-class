// Fungsi validasi username
function is_username_valid(username) {

    // Huruf dari a sampai z (huruf kecil)
    var lowerCase = /[a-z]/g;

    // Cek kombinasi username menggunakan huruf kecil dengan panjang 5-9 karakter dan memastikan karater username tanpa ada angka, karakter spesial, dan huruf kapital
    if (username.match(lowerCase).length >= 5 && username.match(lowerCase).length < 10) {
        return true;
    } else {
        return false;
    }

};

// Fungsi validasi password
function is_password_valid(password) {

    // Karakter validasi untuk password dengan panjang minimal 8 karakter
    // Huruf dari a sampai z (huruf kecil)
    var lowerCase = /[a-z]/g;

    // huruf besar A sampai Z (huruf kapital)
    var upperCase = /[A-Z]/g;

    // angka dari 0 sampai 9
    var number = /[0-9]/g;

    // karater spesal
    var specialChar = /[[email protected]#$%]/g;

    // Cek kombinasi password dengan panjang minimal password yaitu 8 karakter
    if (password.match(lowerCase, upperCase, number, specialChar) && password.length >= 8) {
        return true;
    } else {
        return false;
    }

};

// Hasil pengecekah username dengan fungsi "is_username_valid()" dan password dengan fungs "is_password_valid"
console.log(is_username_valid('ninj') ? 'username valid' : 'username tidak valid'); // username tidak valid karena kurang dari 5 karakter
console.log(is_username_valid('ninJa') ? 'username valid' : 'username tidak valid'); // username tidak valid karena terdapat huruf besar
console.log(is_username_valid('ninj4') ? 'username valid' : 'username tidak valid'); // username tidak valid karena terdapat angka
console.log(is_username_valid('ninj*-') ? 'username valid' : 'username tidak valid'); // username tidak valid karena terdapat huruf spesial
console.log(is_username_valid('ninjahatori') ? 'username valid' : 'username tidak valid'); // username tidak valid karena melebihi batas panjang username (5-9) meskipun semuanya merupakan kombinasi huruf kecil
console.log(is_username_valid('ninja') ? 'username valid' : 'username tidak valid'); // username valid karena terdapat kombinasi huruf kecil semua dengan panjang min. 5 
console.log(is_username_valid('ninjawxyZ') ? 'username valid' : 'username tidak valid'); // username valid karena terdapat kombinasi huruf kecil semua dengan panjang min. 5 & maks. 9
console.log(is_password_valid('_*xpka7') ? 'password valid' : 'password tidak valid'); // password tidak valid karena panjang minimal adalah 8
console.log(is_password_valid('_*xpka7~') ? 'password valid' : 'password tidak valid'); // password valid karena panjang minimal 8