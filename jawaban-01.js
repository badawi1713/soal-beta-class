// Fungsi untuk menampilkan data profil diri
function profilKu() {
  return {
    nama: "Dzaky Ahmad Badawi",
    umur: 22,
    hobi: ["Berenang", "Menggambar", "Mendengarkan Musik"],
    keahlian: [{
        namaKeahlian: "Pemrograman Web",
        tingkat: "Menengah"
      },
      {
        namaKeahlian: "Desain Grafis",
        tingkat: "Menengah"
      },
      {
        namaKeahlian: "Desain UI/UX",
        tingkat: "Dasar"
      }
    ]
  };
};

console.log("Profil: ", profilKu());