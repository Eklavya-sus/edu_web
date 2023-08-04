document.addEventListener("DOMContentLoaded", function () {
    const loginForm= document.querySelector(".login-form");
    const usersJsonFile= "sample.json";

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const emailInput= document.getElementById('Email').value;
        const passwordInput= document.getElementById("password").value;
        fetch(usersJsonFile)
            .then((response)=> response.json())
            .then((data)=> {
                const matchingUser= data.users.find(
                    (user) => user.email === emailInput && user.password === passwordInput
                );

                if (matchingUser) {
                    console.log("Login successful!")
                    alert("Login successful!");
                    window.location.href = 'dashboard.html';
                  

                } else {
                    console.log("Login unsuccessful!")
                    alert("Login unsuccessful!");
                   
                }
            })
    });
});