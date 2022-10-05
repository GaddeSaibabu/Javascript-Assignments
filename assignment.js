const task3Element = document.getElementById('task-3');

//function1
function wlcmMsg(){
    alert("Welcome To Javascript!");
}

//function2
function user(name){

alert('Hi ' + name );    
}

//function3
function dateOfBirth(date,month,year){
    const DOB = date + '-' + month + "-" + year;
    return DOB;
    
}
//calling the functions
wlcmMsg();
user("Saibabu");

//addListener 
task3Element.addEventListener('click', wlcmMsg);

const DOB = dateOfBirth('25','may','1994');

alert("Your date of birth is " + DOB);
