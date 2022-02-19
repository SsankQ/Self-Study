function solution(s, n) {
    return s.split('').map((word) => {
      if(word === ' ') return word;
      return word.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(word.charCodeAt() + n - 26)
        : String.fromCharCode(word.charCodeAt() + n )
    }).join('');
}

let output = solution('a B z', 4);
console.log(output);