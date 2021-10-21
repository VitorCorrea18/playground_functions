// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

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
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winPoints = wins * 3;
  let tiePoints = ties;
  let totalPoints = winPoints + tiePoints;
  return totalPoints;
}

// Desafio 6
function highestCount(num) {
  // seu código aqui
  let highN = num[0];
  let count = 0;
  //  primeiro for define o numero mais alto.
  for (let i = 0; i < num.length; i += 1) {
    if (num[i] > highN) {
      highN = num[i];
    }
  }
  //  segundo for conta quantas vezes o numero é repetido.
  for (let i = 0; i < num.length; i += 1) {
    if (num[i] === highN) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return 'cat2';
  } else if ((mouse - cat1) > (mouse - cat2)) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(entry) {
  // seu código aqui
  let myArray = [];
  let div3 = false;
  let div5 = false;
  let divN = false;

  for (let indexEntry = 0; indexEntry < entry.length; indexEntry += 1) {

  for (let i = 2; i < entry[indexEntry]; i += 1) {

  if (entry[indexEntry] % i === 0) {
  if (i === 3) {
    div3 = true;
  } else if (i === 5) {
    div5 = true;
  } else {
    divN = true;
  }
      }
    }
  if (div3 === false && div5 === false) {
    myArray.push('bug!');
  } else if (div3 === true && div5 === true) {
    myArray.push('fizzBuzz');
  } else if (div3 === true) {
    myArray.push('fizz');
  } else if (div5 === true) {
    myArray.push('buzz');
  }

  div3 = false;
  div5 = false;
  divN = false;
  }
  return myArray;
}

// Desafio 9
function encode(entrada) {
  // seu código aqui
  entrada = entrada.replace(/a/g, 1);
  entrada = entrada.replace(/e/g, 2);
  entrada = entrada.replace(/i/g, 3);
  entrada = entrada.replace(/o/g, 4);
  entrada = entrada.replace(/u/g, 5);

  return entrada;
}

function decode(entrada) {
  // seu código aqui
  entrada = entrada.replace(/1/g, 'a');
  entrada = entrada.replace(/2/g, 'e');
  entrada = entrada.replace(/3/g, 'i');
  entrada = entrada.replace(/4/g, 'o');
  entrada = entrada.replace(/5/g, 'u');

  return entrada;
}

//O desafio 9 eu resolvi consultando este link https://www.w3schools.com/jsref/jsref_replace.asp.
//Aprendendo o metodo .replace(); Adorando este projeto, já são dois métodos novos que aprendi!

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