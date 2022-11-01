function ageSort(users) {
  return users.sort((user1,user2) => user1.age - user2.age);
}

function oddEvenSort(arr) {
  return arr.sort((a, b) => (!(a % 2) - !(b % 2)) || (a - b));
}

function validAnagrams(s, t) {
  // sort each string
  return s.split('').sort().join('') === t.split('').sort().join('');
  // O(n log n) time comp
  // pairs in array
  // let arr = [...s.split(""), ...t.split("")].sort()
  // for (let i = 0; i < arr.length; i += 2) {
  //   if (arr[i] !== arr[i + 1]) return false;
  // }
  // return true;
}

function reverseBaseSort(arr) {
  return arr.sort((a, b) => (b.toString().length - a.toString().length) || (a - b));
}

function frequencySort(arr) {
  let tracker = {};
  for (let el of arr) {
    if (el in tracker) {
      tracker[el]++;
    } else {
      tracker[el] = 1;
    }
  }
  let newArr = Object.entries(tracker)
  // sort arr, by checking how many occurances for that key
  // use pojo to remember
  return arr.sort((a, b) => tracker[a] - tracker[b] || (b - a));
}


module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
