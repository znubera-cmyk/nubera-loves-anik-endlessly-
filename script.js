window.onload = function () {

    const bootScreen = document.getElementById("boot-screen");
    const welcomeScreen = document.getElementById("welcome-screen");

    setTimeout(() => {
        bootScreen.classList.add("hidden");
        welcomeScreen.classList.remove("hidden");
    }, 5000);

    document.getElementById("startBtn").addEventListener("click", function () {

        document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            background:linear-gradient(180deg,#020111,#0b1f4d,#000);
            color:white;
            text-align:center;
            padding:20px;">
            
            <h1 style="color:#7fd8ff;">✨ Our Future ✨</h1>

            <p style="max-width:700px;font-size:20px;line-height:1.8;margin-top:30px;">

            Dear Anik ❤️,<br><br>

            If a time machine really existed, I don't think I'd use it to change anything.

            I'd only use it to see
