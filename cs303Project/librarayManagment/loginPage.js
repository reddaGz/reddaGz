 
 function loginPageLoad(){
    let openPage = false;
    let openUserPage = "";
    let login = document.getElementById("loginButton");
    login.onclick=checkUser;
    function checkUser() {
        alert("added new book");
      checkPassword();
      openPageLibrary();
      function userAccount() {
        return [
          {
            role: "librarian",
            userName: "kaleb",
            password: "123",
          },
          {
            role: "admin",
            userName: "ezra",
            password: "124",
          },
          {
            role: "superAdmin",
            userName: "redda",
            password: "125",
          },
        ];
      }
       /**
     * check user role ,user name and user password
     */
      function checkPassword() {
        let users = userAccount();
        let user_role = document.getElementById("roleId").value;
        let user_name = document.getElementById("username").value;
        let user_password = document.getElementById("password").value;
        for (let user of users) {
          if (
            user.userName === user_name &&
            user.password === user_password &&
            user.role === user_role
          ) {
            openPage = true;
            openUserPage = user_role;
          }
        }
      }
      function openPageLibrary() {
        if (openPage && openUserPage === "librarian") {
          document.getElementById("loginstatus").className = "hidLogin";
          document.getElementById("pageLibrarian").className =
            "displayLibararianPage";
          openPage = false;
          openUserPage = "";
        } else if (openPage && openUserPage === "admin") {
          document.getElementById("loginstatus").className = "hidLogin";
          document.getElementById("pageAdmin").className = "displayAdminPage";
          openPage = false;
          openUserPage = "";
        } else if (openPage && openUserPage === "superAdmin") {
          document.getElementById("loginstatus").className = "hidLogin";
          document.getElementById("pageSuperAdmin").className =
            "displaySuperAdminPage";
          openPage = false;
          openUserPage = "";
        } else {
          document.getElementById("status_role").className =
            "displayStatusRole";
          openPage = false;
          openUserPage = "";
        }
      }
    }
 }
 

    window.onload=loginPageLoad