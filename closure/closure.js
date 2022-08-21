
function greeting() {
  let username = 'Oscar';

  function displayUserName() {
    return `Hello ${username}`;
  }
  return displayUserName;
}

const g = greeting();
console.log(g); 
console.log(g());

// ó otra manera

function greeting() {
  let username = 'Oscar';

  function displayUserName() {
    return `Hello ${username}`;
  }
  return displayUserName;
}

 g = greeting();
console.log(g); 
console.log(g());