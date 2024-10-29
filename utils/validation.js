const userNameNotaition = document.getElementById("user-notaition");
const PasswordNotaition = document.getElementById("pass-notaition");
const inputs=document.querySelectorAll(".input")

const validationUsername = (username) => {
  const regex = /^\w+[\w-$@#^%&_]{4,12}/;
  const test = regex.test(username);
  return test;
};

const validationPassword = (password) => {
  const regex = /[\w%@#$^&]{5,12}/;
  const test = regex.test(password);
  return test;
};

const validation = (username, password) => {
  const usernameTest = validationUsername(username);
  const passwordTest = validationPassword(password);
  if (usernameTest && passwordTest) {
    return true;
  } else if (
    !usernameTest ||
    !passwordTest ||
    (!usernameTest && !passwordTest)
  ) {
    showNotaition(usernameTest, passwordTest);
    return false;
  }
};

const showNotaition = (username, password) => {
  
  if (!username && !password) {
    userNameNotaition.style.visibility = "visible";
    PasswordNotaition.style.visibility = "visible";
    console.log(inputs);
    userNameNotaition.innerText =
      "usename should't start with spacific charactors and must be bettween 5-13.";
    PasswordNotaition.innerText = "password must be bettween 6-13.";
    return;
  } else if (!username) {
    PasswordNotaition.style.visibility="hidden"
    userNameNotaition.style.visibility = "visible";
    userNameNotaition.innerText =
      "usename should't start with spacific charactors and must be bettween 5-13.";
  } else if (!password) {
    userNameNotaition.style.visibility="hidden"
    PasswordNotaition.style.visibility = "visible";
    PasswordNotaition.innerText = "password must be bettween 6-13.";
  }
};
const removeNotations=()=>{
   
    userNameNotaition.style.visibility = "hidden";
    PasswordNotaition.style.visibility = "hidden";
}
export  {validation,removeNotations};
