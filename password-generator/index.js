const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordLength = 12;
//let password = [];

let pwdBox1 = document.getElementById("password-box1");
let pwdBox2 = document.getElementById("password-box2");


function startGenerator() {
    populateBox()
}

function randomGenerator() {
    let password = [];
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length);
        let randomChar = characters[randomNumber];
        password += randomChar;
        
    }
    return password
}

function populateBox () {
    let p1 = randomGenerator();
    let p2 = randomGenerator();
    pwdBox1.textContent = p1;
    pwdBox2.textContent = p2;
    
    
}
