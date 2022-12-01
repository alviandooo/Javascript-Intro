const fetch = require("node-fetch");

// Nomor 1
const checkWorkingDay = (day) => {
  try {
    // menjalankan proses yang jika sukses akan mereturn sebuah promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
        let cek = dataDay.find((item) => {
          return item === day;
        });

        if (cek) {
          resolve(cek);
        } else {
          reject(new Error("Hari ini bukan hari kerja"));
        }
      }, 3000);
    });
  } catch (error) {
    // menangkap error jika terjadi kesalahan saat proses dijalankan
    return error;
  }
};

const cekDay = (day, callback) => {
  let dayLowerCase = day.toLowerCase();
  callback(dayLowerCase)
    .then((res) => {
      // menampilkan hasil jika proses berhasil dijalankan
      console.log("Result :", res);
      return res;
    })
    .catch((err) => {
      // menampilkan error jika terjadi kesalahan pada proses yang dijalankan
      console.log(err);
      return err;
    });
};
// cekDay("Senin", checkWorkingDay);

// const cekDayAsync = async (day, callback) => {
//   let dayLowerCase = day.toLowerCase();
//   let cb = await callback(dayLowerCase);

//   console.log("Result Async :", cb);
// };
// cekDayAsync("Rabu", checkWorkingDay);

// Nomor 2
const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found!"), []);
    }
  }, 4000);
};

const showAllMonth = (error, month) => {
  try {
    // validasi apakah error = null
    if (error === null) {
      // tampilkan semua bulan
      let months = month.map((item) => {
        console.log(item);
        return item;
      });
      return months;
    } else {
      // pesan error
      console.log(error);
      return error;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

// getMonth(showAllMonth);

// Nomor 3
// check independence day function
const checkIndependenceDay = (date) => {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (date === 17) {
          resolve(`Tanggal sekarang ${date}, Hari Kemerdekaan RI`);
        } else {
          reject(
            new Error(`Tanggal sekarang ${date}, Bukan Hari Kemerdekaan RI`)
          );
        }
      }, 3000);
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

const checkDate = (date, checkIndependenceDay) => {
  if (typeof date !== "number") {
    console.log("Tanggal harus berupa angka!");
    return "Tanggal harus berupa angka!";
  }

  checkIndependenceDay(date)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

// checkDate(17, checkIndependenceDay);

const users = [
  {
    id: 1,
    name: "John",
    Nationality: "Malaysia",
  },
  {
    id: 2,
    name: "Budi",
    Nationality: "Indonesia",
  },
  {
    id: 3,
    name: "Reina",
    Nationality: "Germany",
  },
  {
    id: 4,
    name: "Michael",
    Nationality: "Polandia",
  },
  {
    id: 5,
    name: "Dody",
    Nationality: "Indonesia",
  },
];
// check data user function
const checkDataUser = (id) => {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let check = users.find((user) => user.id === id);
        if (check) {
          resolve({ status: 1, text: "Data berhasil ditemukan!", data: check });
        } else {
          reject({ status: 0, text: "Data tidak ditemukan!", data: {} });
        }
      }, 3000);
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getUser = (id, callback) => {
  if (typeof id !== "number") {
    console.log("ID harus number!");
    return "ID harus number!";
  }

  callback(id)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

// getUser(14, checkDataUser);
// getUser(14, checkDataUser);

// nomor 4
const getAllName = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((res) => {
      res.map((item) => {
        console.log(item.name);
      });
    })
    .catch((err) => console.log(err));
};

// getAllName();
