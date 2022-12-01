// nomor 1

/*
  1. search() 
  method yang digunakan untuk mencari atau mengecek apakah mengandung kata atau karakter yang dicari pada string 
  berdasarkan keyword yang ditentukan dengan mengembalikan nilai berupa index dari kata atau karakter yang dicari, 
  jika kata atau karakter yang dicari tidak ada akan mengembalikan nilai -1
*/
// let str = "hello world";
// console.log("search : ", str.search("lo"));

/*
  2. substr()
  method yang digunakan untuk mengekstrak atau mengambil karakter dari sebuah string dengan nilai balik string.
  untuk parameter ke-1 (required) sebagai index awal karakter yang akan diambil dan 
  paramater ke-2 (optional) sebagai banyak karakter yang diambil ( dimulai berdasarkan index parameter ke-1 )
  jika paramter ke-2 kosong, maka dianggap sampai karakter terakhir dari string
*/
// console.log("substr : ", str.substr(1, 3));
// console.log("substr tanpa param ke 2 : ", str.substr(1, 3));

/*
  3. substring()
  method yang digunakan untuk mengekstrak atau mengambil karakter dari sebuah string dengan nilai balik string
  untuk parameter ke-1 (required) sebagai index awal karakter yang akan diambil
  dan parameter ke-2 (optional) sebagai urutan terakhir karakter yang diambil ( berdasarkan urutan karakter pada string tersebut )
  jika parameter ke-2 kosong, maka dianggap sampai karakter terakhir dari string
*/
// console.log("substring : ", str.substring(1, 3));
// console.log("substring tanpa param ke 2 : ", str.substring(1));

/*
  4. Object.keys() : 
  method yang bisa digunakan pada array, string dan object dengan mengembalikan sebuah array yang isinya adalah key dari sebuah array 
  atau index dari sebuah string atau properti dari sebuah object
*/

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// console.log("Object.keys() : ", Object.keys(person));

/*
  5. map() : method yang digunakan untuk mengambil elemen-elemen pada array dengan parameternya adalah callback 
  lalu mengembalikan sebuah array yang hanya setiap elemennya bernilai true 
*/
// let tempArr = [5, 4, 3, 2, 6, 7, 8];
// const map = tempArr.map((item, key) => {
//   result = 0;
//   if (item > 2) {
//     return item;
//   }
//   return result;
// });

// console.log("map : ", map);

/*
6. filter() : method yang digunakan untuk mengambil elemen-elemen pada array dengan parameternya adalah callback 
lalu mengembalikannya dalam bentuk array tanpa harus melakukan push array terlebih dahulu 
*/
// const filter = tempArr.filter((item, key) => {
//   return item > 2;
// });

// console.log("filter : ", filter);

/*
7. include() : method yang digunakan untuk mencari data didalam array dengan parameter pertama sebagai data yang dicari 
dan parameter kedua sebagai index dimulainya pencarian
*/
// const arrTempName = ["John", "Budi", "Adit", "Reina"];

// // include tanpa index mulai
// const include1 = arrTempName.includes("John");
// // includes dengan ketentuan index pencarian dimulai dari index-1
// const include2 = arrTempName.includes("John", 1);
// // include tanpa index mulai dengan case sensitive
// const include3 = arrTempName.includes("john");

// console.log("include tanpa start index : ", include1);
// console.log("include dengan start index : ", include2);
// console.log("include case sensitive: ", include3);

/*
8. find() : method yang digunakan untuk mencari data didalam array dengan parameternya adalah callback 
dan mengembalikan data yang dicari jika data ditemukan ( jika data sudah ditemukan, perulangan berhenti dan tidak mengecek ke elemen selanjutnya) 
dan undefined jika data tidak ditemukan
*/
// const find = arrTempName.find((item) => item === "Adit");
// const findNotExist = arrTempName.find((item) => item === "Roy");

// console.log("find : ", find);
// console.log("find value doesnt exist : ", findNotExist);

/*
9. findIndex() : mencari data didalam array dengan parameter pertama adalah callback 
dan mengembalikan nilai berupa index dari data jika data ditemukan, dan mengembalikan nilai -1 jika data tidak ditemukan
*/
// const findArrayIndex = arrTempName.findIndex((item) => item === "Budi");
// const findArrayIndexNotExist = arrTempName.findIndex((item) => item === "Roy");

// console.log("findIndex : ", findArrayIndex);
// console.log("findIndex Not Exist Value : ", findArrayIndexNotExist);

/*
10. indexOf() : mencari data didalam array dengan parameter pertama adalah data yang ingin dicari 
dan mengembalikan nilai berupa index dari data jika data ditemukan, dan mengembalikan nilai -1 jika data tidak ditemukan
*/
// // indexOf tanpa index mulai
// const arrayIndexOf = arrTempName.indexOf("Budi");
// // indexOf dengan index mulai
// const arrayIndexOf2 = arrTempName.indexOf("Budi", 2);

// console.log("indexOf : ", arrayIndexOf);
// console.log("indexOf dengan start index : ", arrayIndexOf2);

// nomor 2
const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

const searchNameByKeyword = (keyword) =>
  name.filter((resName) => resName.toLowerCase().search(keyword) !== -1);

const searchName = (keyword, number, callback) => {
  //validasi input number
  let isNumber = typeof number === "number";
  let isNegative = number < 1;
  if (!isNumber) {
    console.log("Parameter kedua harus berupa angka!");
    return "Parameter kedua harus berupa angka!";
  }

  if (isNegative) {
    console.log("Parameter kedua harus berupa angka positif!");
    return "Parameter kedua harus berupa angka positif!";
  }
  // change keyword to lower case
  const keyLowerCase = keyword.toLowerCase();
  // slice result of callback by number
  const result = callback(keyLowerCase).slice(0, number);
  console.log(result);
};

searchName("da", 4, searchNameByKeyword);

// nomor 3
const selectionScore = (firstScore, lastScore, scores) => {
  // input validation
  const isNumber =
    typeof firstScore === "number" && typeof lastScore === "number"
      ? true
      : false;

  const isNan = isNaN(firstScore) || isNaN(lastScore) ? true : false;
  const isNegative = firstScore < 0 || lastScore < 0;

  // input type is not number ?
  if (!isNumber) {
    return "Nilai Awal dan Nilai Akhir harus berupa angka!";
  }
  // input is Nan ?
  if (isNan) {
    return "Nilai Awal dan Nilai Akhir tidak boleh NaN!";
  }
  // input negative number ?
  if (isNegative) {
    return "Nilai Awal dan Nilai Akhir tidak boleh bilangan negatif!";
  }
  // firstScore > lastScore ?
  if (firstScore > lastScore) {
    return "Nilai Awal tidak boleh lebih dari atau sama dengan Nilai Akhir!";
  }
  // scores is not array ?
  if (!Array.isArray(scores)) {
    return "Data Nilai harus berupa Array!";
  }
  // length of scores < 5 ?
  if (scores.length < 6) {
    return "Banyak Data Nilai harus lebih dari 5!";
  }

  const arrayTemp = scores.filter(
    (score) => score >= firstScore && score <= lastScore
  );

  if (arrayTemp.length < 1) {
    console.log("Nilai tidak ditemukan!");
  } else {
    const result = arrayTemp.sort((a, b) => a - b);
    console.log(result);
  }
};

selectionScore(1, 5, [6, 4, 5, 1, 12, 9, 8]);
