// Desafio 10
function techList(entry, name) {
  if (entry.length === 0) { return 'Vazio!'; }
  let output = [];
  for (let i of entry) {
    let obj = {
      tech: i,
      name: name
    };
    output.push(obj);
  }
  // referencia para função de sort : https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
  output.sort(function (a, b) {
    if (a.tech < b.tech) { return -1; }
    if (a.tech > b.tech) { return 1; }
    return 0;
  });
  return output;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let validnumber = true

  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] >= 0 && numbers[i] <= 9) {
        validnumber = true;
      } else {
        validnumber = false;
        break;
      }

      let count = 0;
      for (let n in numbers) {
        if (numbers[i] === numbers[n])
          count += 1
      }
      if (count >= 3) {
        validnumber = false;
        break;
      }
    }
    if (validnumber === false) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else {

      /* Confesso que estava empacado aqui, estava tentando gerar a string phoneNumber com loops e voltava erro, ate que vi o codigo do D'mitri com uma dúvida no slack,
      ai caiu a ficha que como eram apenas 11 elementos no array eu poderia fazer manualmente assim.*/

      let phoneNumber = '(' + numbers[0] + numbers[1] + ') ' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + '-' + numbers[7] + numbers[8] + numbers[9] + numbers[10];
      return phoneNumber;
    }
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let validA = false;
  let validB = false;
  let validC = false;

  if (lineA < (lineB + lineC)) {
    validA = true;
  }

  if (lineB < (lineA + lineC)) {
    validB = true;
  }

  if (lineC < (lineA + lineB)) {
    validC = true;
  }

  if (validA === true && validB === true && validC === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(qntDrinks) {
  let nDrinks = qntDrinks.match(/[1-9]/g);
  let nWater = nDrinks.map((i) => Number(i));
  let qntWater = 0;

  for (let i = 0; i < nWater.length; i += 1) {
    qntWater += nWater[i];
  }

  if (qntWater === 1) {
    return qntWater + ' copo de água';
  } else {
    return qntWater + ' copos de água';
  }


}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
