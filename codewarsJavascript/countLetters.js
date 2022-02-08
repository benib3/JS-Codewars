var str="aaabbccc";




const count = (str) => {
  let obj = {}
  const str2 = str.toLowerCase().replace(/[^A-Za-z]/g, '')
  for (let char of str2) {
    if (obj[char]) {
      obj[char]++
    }
    else {
      obj[char] = 1
    }
  }
  return obj
}

alert(JSON.stringify(count(str)));
