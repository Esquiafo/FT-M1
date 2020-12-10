// resolve estos ejercicios usando recursión

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  var arr=[];
  arr[0]=1
  var cache = 1
  for (i = 1; i <= n; i++) {
      arr[i] = i
      cache *= arr[i]
      arr[i]=cache
    }
 return arr[n]
}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 01, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  var arr = [];
  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr[n]
}

// Implementa la clase Queue
// enqueue:   Agrega un valor a la queue.   Respeta el orden existente.
// dequeue:   Remueve un valor de la queue.   Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size:   Devuelve el número de elementos que contiene la queue.

function Queue() {
  var arr = []
  this.enqueue = function(prop) {
      arr.push(prop)
      return arr
  }
  this.dequeue = function() {
    if(arr[0]==undefined){
      return undefined
    }
    else{
      return arr.shift()
    }
  }
  this.size = function() {
    return arr.length
  }
 }

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
