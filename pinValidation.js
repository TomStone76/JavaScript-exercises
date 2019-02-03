// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but 
// exactly 4 digits or exactly 6 digits. Your task is to create a function that takes
// a string and returns true if the PIN is valid and false if it's not.

let x = '44455k'

function validatePIN(pin) {
    let arr = pin.split('')
    let len = arr.length
    let num = Number(pin)

    
    for (let i = 0; i < len; i++) {
        let n = Number(arr)
        if (((len === 4) || (len === 6)) && !isNaN(num) && pin != '') {
            return true
        
        } 
        else {
            return false
        }
    }
}

console.log(validatePIN(x))