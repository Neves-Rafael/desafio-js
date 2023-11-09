

let sum = firstNumber + secondNumber,
  sub = firstNumber - secondNumber,
  mult = firstNumber * secondNumber,
  div = firstNumber / secondNumber,
  mod = firstNumber % secondNumber;

  if(sum % 2 === 0){
    alert(`A soma de ${firstNumber} e ${secondNumber}é ${sum} resultando em par`);
  } else {
    alert(`A soma de ${firstNumber} e ${secondNumber} é ${sum} resultando em impar`);
  }

  if(firstNumber === secondNumber){
    alert(`Os números ${firstNumber} e ${secondNumber} sao iguais`);
  } else {
    alert(`Os números ${firstNumber} e ${secondNumber} sao diferentes`);
  }

alert(`A soma dos números é: ${sum}
A subtração dos números é: ${sub}
A multiplicação dos números é: ${mult}
A divisão dos números é: ${div}
O resto da divisão dos números é: ${mod}`);
