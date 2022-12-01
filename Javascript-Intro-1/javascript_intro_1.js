//Nomor 1 --------------------
console.log("//Nomor 1 --------------------");
const biodata = {
  name: "M Restu Alviando",
  age: 24,
  hobbies: ["Traveling", "Basket", "Game Online"],
  isMarried: false,
  schoolList: [
    {
      name: "SD Negeri 150 Palembang",
      yearIn: 2004,
      yearOut: 2010,
      major: null,
    },
    {
      name: "SMP Negeri 54 Palembang",
      yearIn: 2010,
      yearOut: 2013,
      major: null,
    },
    {
      name: "SMA Negeri 22 Palembang",
      yearIn: 2013,
      yearOut: 2016,
      major: "IPA",
    },
    {
      name: "STMIK GI Multi Data Palembang",
      yearIn: 2016,
      yearOut: 2020,
      major: "Computer Science",
    },
  ],
  skills: [
    {
      skillName: "HTML",
      level: "Advanced",
    },
    {
      skillName: "PHP",
      level: "Advanced",
    },
    {
      skillName: "CSS",
      level: "Advanced",
    },
  ],
  interestInCoding: true,
};

//Nomor 2 --------------------
console.log("//Nomor 2 --------------------");
const countingScore = (
  scoreMtk,
  scoreBahasaIndonesia,
  scoreBahasaInggris,
  scoreIpa
) => {
  //inisialisasi variable baru untuk validasi input
  let isNotNumber =
    typeof scoreMtk !== "number" ||
    typeof scoreBahasaIndonesia !== "number" ||
    typeof scoreBahasaInggris !== "number" ||
    typeof scoreIpa !== "number"
      ? true
      : false;

  let isNull =
    scoreMtk === "" ||
    scoreBahasaIndonesia === "" ||
    scoreBahasaInggris === "" ||
    scoreIpa === ""
      ? true
      : false;

  let isMinimum =
    scoreMtk < 0 ||
    scoreBahasaIndonesia < 0 ||
    scoreBahasaInggris < 0 ||
    scoreIpa < 0
      ? true
      : false;

  let isMaximum =
    scoreMtk > 100 ||
    scoreBahasaIndonesia > 100 ||
    scoreBahasaInggris > 100 ||
    scoreIpa > 100
      ? true
      : false;

  // validasi Input
  if (isNotNumber) {
    return "Parameter nilai harus angka!";
  }
  if (isNull) {
    return "Parameter nilai tidak boleh kosong!";
  }
  if (isMinimum) {
    return "Parameter nilai melewati batas minimal!";
  }
  if (isMaximum) {
    return "Parameter nilai melewati batas maksimum!";
  }

  //counting average score
  let averageScore =
    (scoreMtk + scoreBahasaIndonesia + scoreBahasaInggris + scoreIpa) / 4;

  // check grade
  let grade = "E";
  if (averageScore >= 90 && averageScore <= 100) {
    // 90 - 100
    grade = "A";
  } else if (averageScore >= 80 && averageScore <= 89) {
    // 80 - 89
    grade = "B";
  } else if (averageScore >= 70 && averageScore <= 79) {
    // 70 - 79
    grade = "C";
  } else if (averageScore >= 60 && averageScore <= 69) {
    // 60 - 69
    grade = "D";
  }

  let result = {
    score: averageScore,
    grade: grade,
  };

  return result;
};

console.log(countingScore(10, -1, 12, 23));

// Nomor 3
console.log("//Nomor 3 --------------------");
const printSegitiga = 7;
let resultSegitiga = "";

if (typeof printSegitiga !== "number") {
  console.log("Parameter harus angka!");
} else if (printSegitiga <= 0) {
  console.log("Parameter tidak boleh kurang dari 1!");
} else {
  for (let row = 1; row <= printSegitiga; row++) {
    for (let column = 1; column <= row; column++) {
      resultSegitiga += column;
    }
    resultSegitiga += "\n";
  }
  console.log(resultSegitiga);
}

// Nomor 4
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

// Nomor 4 - A
console.log("//Nomor 4 A --------------------");
const newData = {
  ...data,
  name: "M Restu Alviando",
  email: "restualviando28@gmail.com",
  hobby: ["Travelling", "Basket", "Game Online"],
};
console.log(data);
console.log(newData);

// Nomor 4 - B
console.log("//Nomor 4 B --------------------");
const { street, city } = data?.address;
console.log(`Street = ${street}, City = ${city}`);
