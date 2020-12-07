function array () {
    let arr = Object.create(array.prototype)
  
    Object.defineProperty(arr, 'length', {
      value: 0,
      enumerable: false,
      writable: true,
    })
  
    for (key in arguments) {
      arr[key] = arguments[key]
      arr.length += 1
    }
  
    return arr
  }
  
  array.prototype.push = function (element) {
    this[this.length] = element
    this.length++
    return this.length
  }
  
  array.prototype.pop = function () {
    this.length--
    const elementToRemove = this[this.length]
    delete this[this.length]
    return elementToRemove
  }
  
  array.prototype.filter = function (cb) {
    let result = array()
  
    for (let index in this) {
      if (this.hasOwnProperty(index)) {
        const element = this[index]
  
        if (cb(element, index)) {
          result.push(element)
        }
      }
    }
  
    return result
  }
  
  let friends = array('Jordyn', 'Mikenzi')
  
  friends.push('Joshy') // 3
  friends.push('Jake') // 4
  
  friends.pop() // Jake
  
  friends.filter((friend) =>
    friend.charAt(0) !== 'J'
  ) // { 0: "Mikenzi", length: 1 }