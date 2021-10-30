console.log('JavaScript code has loaded!')

let yourName = "Don Reeves" 

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0

document.getElementById('credit').textContent = `Created by ${yourName}`

document.getElementById('add-gb').addEventListener('click', function() {
    gb = gb+1
    document.querySelector('#qty-gb').textContent = gb

    console.log('Ginger bread + button was clicked!')

    total = total+1
    document.querySelector('#qty-total').textContent = total

})

document.getElementById('minus-gb').addEventListener('click', function() {
    if(gb === 0) {return}

    gb = gb-1
    document.querySelector('#qty-gb').textContent = gb

    console.log('Ginger bread - button was clicked!')

    total = total-1
    document.querySelector('#qty-total').textContent = total

   
})

document.getElementById('add-cc').addEventListener('click', function() {
    cc = cc+1
    document.querySelector('#qty-cc').textContent = cc
   
    console.log('Chocolate + button was clicked!')

    total = total+1
    document.querySelector('#qty-total').textContent = total

})

document.getElementById('minus-cc').addEventListener('click', function() {
    if(cc === 0) {return}
    cc = cc-1
    document.querySelector('#qty-cc').textContent = cc
    console.log('Chocolate Chip - button was clicked!')

    total = total-1
    document.querySelector('#qty-total').textContent = total
})

document.getElementById('add-sugar').addEventListener('click', function() {
    sugar = sugar+1
    document.querySelector('#qty-sugar').textContent = sugar
   
    console.log('Sugar Sprinkle + button was clicked!')

    total = total+1
    document.querySelector('#qty-total').textContent = total

})

document.getElementById('minus-sugar').addEventListener('click', function() {
    if(sugar === 0) {return}

    sugar = sugar-1
    document.querySelector('#qty-sugar').textContent = sugar

    console.log('Sugar Sprinkle - button was clicked!')

    total = total-1
    document.querySelector('#qty-total').textContent = total
})
