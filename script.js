const inputField = document.querySelector("input");
const lowerCase = document.querySelector("#lower-case");
const upperCase = document.querySelector(".upper-case");
const camelCase = document.querySelector(".camel-case");
const pascalCase = document.querySelector(".pascal-case");
const snakeCase = document.querySelector(".snake-case");
const kebabCase = document.querySelector(".kebab-case");
const trimCase = document.querySelector(".trim-case");

function capital(str) {
    if (!str) return "";
  return str[0].toUpperCase() + str.slice(1, str.length);
}

function toCamel(string) {
  const lowerCaseString = string.toLowerCase();
  const wordsArray = lowerCaseString.split(" ");

  const finalArray = wordsArray.map((word, i) => {
    if (i == 0) return word;
    return capital(word)
  });
  return finalArray.join('')
}

function toPascal(string) {
    const lowerCaseString = string.toLowerCase();
    const wordsArray = lowerCaseString.split(" ");
  
    const finalArray = wordsArray.map((word, i) => {
        return capital(word)
    });
    return finalArray.join(' ')
  }



// function toPascal(string) {
//     const lowerCaseString = string.toLowerCase()
//     const wordsArray = lowerCaseString.split(' ').filter(word => word.length > 0 )

//     const finalArray = wordsArray.map( word => capital(word))
//     return finalArray.join(' ')
// }


function toSnake(string) {
    
    return string.replaceAll(' ', '_')
}

function toKebab(string) {
   
    return string.replaceAll(' ', '-')
}

function toTrim(string) {
    
    
    return string.replaceAll(' ', '')
}


function updateValue(){
    const userValue = inputField.value.trim()
    lowerCase.innerText = userValue.toLowerCase();
    upperCase.innerText = userValue.toUpperCase();
    camelCase.innerText = toCamel(userValue);
    pascalCase.innerText = toPascal(userValue)
    snakeCase.innerText = toSnake(userValue)
    kebabCase.innerText = toKebab(userValue)
    trimCase.innerText = toTrim(userValue)
}

updateValue()


inputField.addEventListener('input',updateValue)

