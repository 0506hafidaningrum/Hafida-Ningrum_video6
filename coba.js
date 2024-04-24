function cetakNama(nama) {
    return `Hallo, nama saya ${nama}`;
}
function cetakKalimat(kal) {
    return `Ini kalimat yang saya buat ${kal}`;
}

const pi = 3.14;
const mahasiswa = {
    nam: 'Hafida',
    umur: 20,
    cetakMhs() {
        return `Halo, Nama saya ${this.nam} dan saya ${this.umur} tahun.`;
    },
};

class Orang {
    constructor() {
        console.log('Objek orang telah dibuat!!');
    }
}

module.exports = { cetakNama, cetakKalimat, pi, mahasiswa, Orang };