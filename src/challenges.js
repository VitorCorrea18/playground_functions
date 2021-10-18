// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
};

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
};

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let splitedSent = sentence.split(' ');
  return splitedSent; 
  // Resolvi este desafio consultando o método split no W3schools.
  // fonte: https://www.w3schools.com/jsref/jsref_split.asp
}

// Desafio 4
function concatName(entrada) {
  // seu código aqui
  let lastName = entrada.length - 1;
  let name = entrada[lastName] + ', ' + entrada[0];
  return name;
};

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winPoints = wins * 3;
  let tiePoints = ties;
  let totalPoints = winPoints + tiePoints;
  return totalPoints;
};

// Desafio 6
function highestCount(num) {
  // seu código aqui
  let highN = num[0];
  let count = 0;
  //primeiro for define o numero mais alto.
  for (i = 0; i < num.length; i +=1) {
    if (num[i] > highN) {
      highN = num[i];
    }
  }
  //segundo for conta quantas vezes o numero é repetido.
  for (i = 0; i < num.length; i += 1) {
    if (num[i] === highN) {
      count++;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};




