// create a function to run the calculation
function calculate(){
    // assign a variable to number
    let number = document.getElementById('number').value
    
    // number can't be 0 or a string
    if (number == 0 || number == ''){
        alert('Type your correct age')
        return;
    }
    //retrieve the full year from the date method
    let date = new Date().getFullYear();
    let age = date - number;

    document.getElementById('text').style.display = 'block';
    document.getElementById('text').innerHTML = 'Your birth year is ' + age;


}