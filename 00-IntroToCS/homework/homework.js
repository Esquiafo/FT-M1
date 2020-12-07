function BinarioADecimal(num) {
  // tu codigo aca
  var numeros = []
  for (let b = 0; b < num.length; b++) {
      if (num[b]=='1') {
          numeros.push(1)
      }else{
          numeros.push(0)
      }
  }
  let test = 0
    for (let i = 0; i < num.length; i++) {
      let digito = numeros[i]
      test = test*2+digito
    }
    return test
}

function DecimalABinario(num) {
  var numero = num
  var binario = []
for (let i = 0; i < num; i++) {
if (num>4) {
  if (numero<=0) {
      return binario.join('')
  }
  else{
      if (numero%2==0) {
          binario.push('0')
          numero = numero/2
      } else{
          binario.push('1')
          numero = numero/2-1
          numero = Math.round(numero)
      }
  }
}else{
  let binario = []
  switch(num) {
      
      case 1:
          binario.push('1')
        break;
      case 2:
          binario.push('10')
        break;
      case 3:
          binario.push('11')
        break;
      case 4:
          binario.push('100')
        break;      
      default:
          binario.push('0')
        // code block
        break;
        
    }
    return binario.join('')
}

}
}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}