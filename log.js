function login(){
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if(u === "admin" && p === "1234"){
    localStorage.setItem("role","admin");
    location.href = "dashbard.html";
  }
  else if(u === "staff" && p === "1234"){
    localStorage.setItem("role","staff");
    location.href = "dashbard.html";
  }
  else{
    alert("Invalid login");
  }
}

function protectPage(allowedRoles){
  const role = localStorage.getItem("role");

  if(!role || !allowedRoles.includes(role)){
    location.href = "log.html";
  }
}

function logout(){
  localStorage.clear();
  location.href = "log.html";
}
