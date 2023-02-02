const cetakFunction = (kata) => {
  return `Hallo Nama Saya ${kata}`;
};

console.log(cetakFunction("putri"));

let myFunction = (angka1, angka2) => {
  return angka1 + angka2;
};
console.log(myFunction(20, 7));

let Hello = () => {
  return "Hello";
};
console.log(Hello());

let obj = {
  nama: "john",
  umur: 22,
  bahasa: "indonesia",
};
let output = obj.bahasa;
console.log(output);

let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
let propertyPeserta = ["Nama", "Jenis Kelamin", "Hobi", "Tahun Lahir"];
let objDaftarPeserta = {};
arrayDaftarPeserta.forEach(function (resut, index) {
  objDaftarPeserta[propertyPeserta[index]] = resut;
});
console.log(objDaftarPeserta);

let arrayofBuah = [
  { nama: "Nanas", warna: "kuning", adaBiji: false, harga: 9000 },
  { nama: "Jeruk", warna: "Orange", adaBiji: true, harga: 8000 },
  { nama: "Semangka", warna: "Hijau & Merah", adaBiji: true, harga: 10000 },
  { nama: "Pisang", warna: "kuning", adaBiji: false, harga: 5000 },
];

let hasil = arrayofBuah.filter(function (item) {
  return item.adaBiji == false;
});
console.log(hasil);

let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020,
};
// kode diatas ini jangan di rubah atau di hapus sama sekali

/* 
 Tulis kode jawaban destructuring di sini 
 */
let { name, brand, year } = phone;

// kode di bawah ini jangan dirubah atau dihapus
console.log(name, brand, year);

let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020,
};

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
};

let objOutput = { ...dataBukuTambahan, ...buku };

// kode diatas ini jangan di rubah atau di hapus sama sekali

/* 
      Tulis kode jawabannya di sini 
  */

// kode di bawah ini jangan dirubah atau dihapus
console.log(objOutput);

let mobil = {
  merk: "bmw",
  color: "red",
  year: 2002,
};

const functionObject = (param) => {
  return param;
};
console.log(functionObject(mobil))