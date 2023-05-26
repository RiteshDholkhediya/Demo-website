let menuHomeLink,
  menuAboutLink,
  menuEmpLink,
  signupForm,
  loginForm,
  empContainer,
  btnGroup,
  json,
  users,
  email,
  pass,
  term,
  uHead,
  userName1,
  pass1,
  welcomeUser;

json = [];
users = [];
email = document.getElementById("email");
pass = document.getElementById("pass");
term = document.getElementById("term");
uHead = document.getElementById("userHeading");
userName1 = document.getElementById("name1");
pass1 = document.getElementById("pass1");
welcomeUser = document.getElementById("welcome-user");
empContainer = document.getElementById("emp-table");
signupForm = document.getElementById("signup-form");
loginForm = document.getElementById("login-form");
menuHomeLink = document.getElementById("home-link");
menuAboutLink = document.getElementById("about-link");
menuEmpLink = document.getElementById("emp-link");
btnGroup = document.getElementById("btn-grp");

let mainUiHandler = {
  setErrorMsg: function (input, errMsg) {
    let formControl = input.parentElement;
    let errorTextMsg = formControl.querySelector(".small");
    input.style.outlineColor = "red";
    errorTextMsg.innerHTML = errMsg;
  },
  setSuccessMsg: function (input) {
    let formControl = input.parentElement;
    let errorTextMsg = formControl.querySelector(".small");
    errorTextMsg.innerHTML = "correct";
    input.style.outlineColor = "green";
  },
  isEmail: function (emailVal) {
    let atSymbol = emailVal.indexOf("@");
    let space = emailVal.includes(" ");
    let dot = emailVal.lastIndexOf(".");
    if (emailVal.length > 264) return false;
    if (space) return false;
    if (dot <= atSymbol + 2) {
      return false;
    }
    return true;
  },
  setSessionStorageVal: function (users) {
    localStorage.setItem("user", users);
    sessionStorage.setItem("status", "signup");
  },
  validate: function (nameVal, emailVal, passVal, userName) {
    let count = 0;
    if (nameVal.length < 3) {
      this.setErrorMsg(userName, "Length can't be less than 3");
      count++;
    } else if (!nameVal.match(/^[a-zA-Z0-9]+$/)) {
      this.setErrorMsg(userName, "Special characters not allowed");
      count++;
    } else {
      this.setSuccessMsg(userName);
      count = 0;
    }
    if (!this.isEmail(emailVal)) {
      this.setErrorMsg(email, "Its not a valid email");
      count++;
    } else {
      this.setSuccessMsg(email);
      count = 0;
    }
    if (!passVal.match(/\W/g)) {
      this.setErrorMsg(
        pass,
        "Please inlclude letters, digits and special characters"
      );
      count++;
    } else if (!passVal.match(/[A-Z]/g)) {
      this.setErrorMsg(
        pass,
        "Please inlclude letters, digits and special characters"
      );
      count++;
    } else if (!passVal.match(/[a-z]/g)) {
      this.setErrorMsg(
        pass,
        "Please inlclude letters, digits and special characters"
      );
      count++;
    } else if (!passVal.match(/[0-9]/g)) {
      this.setErrorMsg(
        pass,
        "Please inlclude letters, digits and special characters"
      );
      count++;
    } else if (passVal.length <= 6) {
      this.setErrorMsg(pass, "length must be greater than 6");
      count++;
    } else {
      this.setSuccessMsg(pass);
      count = 0;
    }

    if (count === 0) {
      return true;
    }
    return false;
  },
  toggle: function () {
    let element = document.getElementById("toggle");
    element.classList.toggle("toggle");
  },
  getData: function () {
    let userData = document.getElementById("userData");
    userData.style.height = "700px";
    let xhr = new XMLHttpRequest();
    let data = "";
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.responseType = "json";
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.status == 200 && xhr.readyState == 4) {
        json = xhr.response;

        let tableBody = document.createElement("div");
        tableBody.setAttribute("class", "tbody");

        for (let i = 0; i < json.length; i++) {
          let row = document.createElement("div");
          row.setAttribute("class", "row");

          let td1 = document.createElement("div");
          td1.setAttribute("class", "td");
          td1.setAttribute("data-label", "Id");
          td1.innerHTML = json[i].id;

          let td2 = document.createElement("div");
          td2.setAttribute("class", "td");
          td2.setAttribute("data-label", "Name");
          td2.innerHTML = json[i].name;

          let td3 = document.createElement("div");
          td3.setAttribute("class", "td");
          td3.setAttribute("data-label", "Username");
          td3.innerHTML = json[i].username;

          let td4 = document.createElement("div");
          td4.setAttribute("class", "td");
          td4.setAttribute("data-label", "Email");
          td4.innerHTML = json[i].email;

          let td5 = document.createElement("div");
          td5.setAttribute("class", "td");
          td5.setAttribute("data-label", "Street");
          td5.innerHTML = json[i].address.street;

          let td6 = document.createElement("div");
          td6.setAttribute("class", "td");
          td6.setAttribute("data-label", "Suit");
          td6.innerHTML = json[i].address.suite;

          let td7 = document.createElement("div");
          td7.setAttribute("class", "td");
          td7.setAttribute("data-label", "City");
          td7.innerHTML = json[i].address.city;

          let td8 = document.createElement("div");
          td8.setAttribute("class", "td");
          td8.setAttribute("data-label", "Zip-code");
          td8.innerHTML = json[i].address.zipcode;

          let td9 = document.createElement("div");
          td9.setAttribute("class", "td");
          td9.setAttribute("data-label", "PhoneNumber");
          td9.innerHTML = json[i].phone;

          let td10 = document.createElement("div");
          td10.setAttribute("class", "td");
          td10.setAttribute("data-label", "Website");
          td10.innerHTML = json[i].website;

          let td11 = document.createElement("div");
          td11.setAttribute("class", "td");
          td11.setAttribute("data-label", "Company Name");
          td11.innerHTML = json[i].company.name;

          let td12 = document.createElement("div");
          td12.setAttribute("class", "td");
          td12.setAttribute("data-label", "CatchPhrase");
          td12.innerHTML = json[i].company.catchPhrase;

          let td13 = document.createElement("div");
          td13.setAttribute("class", "td");
          td13.setAttribute("data-label", "BS");
          td13.innerHTML = json[i].company.bs;

          row.appendChild(td1);
          row.appendChild(td2);
          row.appendChild(td3);
          row.appendChild(td4);
          row.appendChild(td5);
          row.appendChild(td6);
          row.appendChild(td7);
          row.appendChild(td8);
          row.appendChild(td9);
          row.appendChild(td10);
          row.appendChild(td11);
          row.appendChild(td12);
          row.appendChild(td13);

          tableBody.appendChild(row);
        }
        console.log(tableBody);
        document.getElementById("table").appendChild(tableBody);
        console.log(document.getElementsByClassName("table"));
      }
    };
  },
  logout: function () {
    logout.parentElement.addEventListener("click", (ele) => {
      sessionStorage.setItem("status", "logout");
      localStorage.setItem("status", "logout");
      localStorage.setItem("name", "");
      localStorage.setItem("pass", "");

      logout.innerHTML = "User";
      empContainer.classList.add("hidden"); // Hide the emptable
      uHead.classList.add("hidden"); // Removed employee management heading
      btnGroup.classList.remove("hidden"); // Showed hidded signup and login buttons
      document.querySelector(".infoLogin").innerText =
        "Please click on login/signup to get employee data";
      this.hideMenuLinks();
    });
  },
  getTableData: function () {
    let getData = document.getElementById("getData");
    getData.addEventListener("click", this.getData);
  },
  menuButtonToggle: function () {
    let menuBtn = document.getElementById("menuBtn");
    menuBtn.addEventListener("click", mainUiHandler.toggle);
  },
  reduceUserNameLength: function () {
    let userNameLength = `${sessionStorage.getItem("name")} / logout`.length;
    if (userNameLength > 20) {
      logout.innerHTML =
        `${sessionStorage.getItem("name")}`.slice(0, 8) + ".../logout"; // Here logout is of menu link anchor id;
    } else {
      logout.innerHTML = `${sessionStorage.getItem("name")} / logout`;
    }
  },
  showHomePageHeading: function () {
    uHead.innerHTML = `<h1>Employee Record Management System</h1>`; // Added this heading after login
    uHead.classList.remove("hidden");
  },
  showMsgToClickOnGetData: function () {
    let msg = document.createElement("p");
    msg.setAttribute("class", "infoLogin");
    msg.innerHTML =
      "Please click on the 'Get Data' button to get employee data";
    document.querySelector(".quote").append(msg); // Added para tag in Quote section
  },
  showMsgToClickOnLoginBtn: function () {
    let msg = document.createElement("p");
    msg.setAttribute("class", "infoLogin");
    // p.innerHTML = "Please click on the get button to get employee data";
    document.querySelector(".quote").append(msg);
    document.querySelector(".infoLogin").innerText =
      "Please click on login/signup to get employee data";
  },
  hideMenuLinks: function () {
    menuHomeLink.parentElement.style.display = "none";
    menuAboutLink.parentElement.style.display = "none";
    menuEmpLink.parentElement.style.display = "none";
  },
  checkUserNamesInArray: function (flag, usersArray, nameVal) {
    for (let i = 0; i < usersArray.length; i++) {
      //comparing every username value with existed values in users array
      if (JSON.parse(usersArray[i]).user === nameVal) {
        flag = 1;
        break;
      }
    }
    return flag;
  },
  checkEmailsInArray: function (flag, usersArray, emailVal) {
    for (let i = 0; i < usersArray.length; i++) {
      if (JSON.parse(usersArray[i]).email === emailVal) {
        flag = 1;
        break;
      }
    }
    return flag;
  },
};

if (
  localStorage.getItem("status") == "login" &&
  localStorage.getItem("name") !== null &&
  localStorage.getItem("pass") !== null
) {
  console.log("Telling the status login");
  this.sessionStorage.setItem("status", "login");
  this.sessionStorage.setItem("name", this.localStorage.getItem("name"));
  this.sessionStorage.setItem("pass", this.localStorage.getItem("pass"));
}
if (localStorage.getItem("status") == "logout") {
  console.log("Checking the local storage");
  sessionStorage.setItem("status", "logout");
}

if (localStorage.length !== 0) {
  users = localStorage.getItem("user").replaceAll("},", "} ,");
  users = users.split(" ,");
}

console.log(users);

if (signupForm) {
  let userName = document.getElementById("name");
  signupForm.addEventListener("submit", (ele) => {
    ele.preventDefault();
    let nameVal = userName.value.trim();
    let emailVal = email.value.trim();
    let passVal = pass.value.trim();
    sessionStorage.setItem("status", "signup");
    if (mainUiHandler.validate(nameVal, emailVal, passVal, userName)) {
      let user = {
        user: nameVal,
        email: emailVal,
        password: passVal,
      };
      let strUser = JSON.stringify(user);
      if (users.length === 0) {
        users.push(strUser);
        mainUiHandler.setSessionStorageVal(users);
        location.href = "home.html";
      } else {
        let f1 = 0; // flag1
        let f2 = 0; // flag2
        f1 = mainUiHandler.checkUserNamesInArray(f1, users, nameVal);
        if (f1) {
          alert("User name already exist please enter another name");
        } else {
          f2 = mainUiHandler.checkEmailsInArray(f2, users, emailVal);
          if (f2) {
            alert("Email already exist please use different");
          } else {
            users.push(strUser);
            mainUiHandler.setSessionStorageVal(users);
            location.href = "home.html";
          }
        }
      }
    }
  });
} else if (loginForm) {
  loginForm.addEventListener("submit", (ele) => {
    ele.preventDefault();
    let nameVal = userName1.value.trim();
    let passVal = pass1.value.trim();

    let f1 = 0;
    if (users.length == 0) {
      alert("Please signup first");
      location.href = "signup.html";
    } else if (
      sessionStorage.getItem("name") == nameVal &&
      sessionStorage.getItem("pass") == passVal
    ) {
      //Added this else if part.
      alert("login successful..");
      sessionStorage.setItem("status", "login");
      localStorage.setItem("status", "login");
      sessionStorage.setItem("name", nameVal);
      localStorage.setItem("name", nameVal);
      sessionStorage.setItem("pass", passVal);
      localStorage.setItem("pass", passVal);
      location.href = "home.html";
    } else {
      for (let i = 0; i < users.length; i++) {
        if (
          JSON.parse(users[i]).user === nameVal &&
          JSON.parse(users[i]).password === passVal
        ) {
          alert("login successful");
          f1 = 1;
          break;
        }
      }

      if (f1) {
        console.log("Employe container\n" + empContainer);
        sessionStorage.setItem("status", "login");
        localStorage.setItem("status", "login");
        sessionStorage.setItem("name", nameVal);
        localStorage.setItem("name", nameVal);
        sessionStorage.setItem("pass", passVal);
        localStorage.setItem("pass", passVal);
        location.href = "home.html";
      } else {
        alert("User name or password is wrong");
      }
    }
  });
}

if (empContainer && sessionStorage.getItem("status") == "login") {
  mainUiHandler.getTableData();
  mainUiHandler.menuButtonToggle();
  mainUiHandler.showHomePageHeading();
  empContainer.classList.remove("hidden"); // Showed employee table
  btnGroup.classList.add("hidden"); // Hide the login and signup buttons
  mainUiHandler.reduceUserNameLength();
  mainUiHandler.showMsgToClickOnGetData();
  mainUiHandler.logout();
} else if (sessionStorage.getItem("status") == "logout") {
  mainUiHandler.showMsgToClickOnLoginBtn();
  mainUiHandler.hideMenuLinks();
}
