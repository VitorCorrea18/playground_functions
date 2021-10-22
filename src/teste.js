
  let validnumber = true
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 5];
  
  if (numbers.length !== 11) {
    console.log('Array com tamanho incorreto.');
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
      if ( count > 3) {
      validnumber = false;
      break;
      }
  }
  if (validnumber === false) {
      console.log('não é possível gerar um número de telefone com esses valores');
  } else {
    let phoneNumber = '(' + numbers[0] + numbers[1] + ') ' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + '-' + numbers[7] + numbers[8] + numbers[9] + numbers[10];
    console.log(phoneNumber);
  }
}
