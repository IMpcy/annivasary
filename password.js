function checkPassword(){
    const password = document.getElementById("password").value;

    if(password === "170824"){
        window.location.href= "video.html"
    } else{
        document.getElementById("error").textContent = "Wrong Password"
    }
}