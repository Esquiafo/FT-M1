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
console.log(BinarioADecimal('111'))  
  

