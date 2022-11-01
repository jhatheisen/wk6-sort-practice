function ageSort(users) {
  return users.sort((user1,user2) => user1.age - user2.age);
}

function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    return (!(a % 2) - !(b % 2)) || (a - b)                   
  });
}

function validAnagrams(s, t) {
  let arr = [...s.split(""), ...t.split("")].sort()
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] !== arr[i + 1]) return false;
  }
  return true;
}

function reverseBaseSort(arr) {
  return arr.sort((a, b) => {
    return (b.toString().length - a.toString().length) || (a - b)
  })
}

function frequencySort(arr) {
  // arr.sort()
  // let tracker = {};
  // for (let el of arr) {
  //   if (el in tracker) {
  //     tracker[el]++;
  //   } else {
  //     tracker[el] = 1;
  //   }
  // }
  // let newArr = Object.entries(tracker)
  // console.log(newArr)
  // newArr.sort((a, b) => {
  //   return a[1] - b[1] || (Number(b[0]) - Number(a[0]))
  // })
  // let res = [];
  // for (let num of newArr) {
  //   for (let i = 0; i < num[1]; i++) {
  //     res.push(Number(num[0]))
  //   }
  // }
  // return res;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
