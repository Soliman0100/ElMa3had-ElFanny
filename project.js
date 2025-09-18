let splash = document.getElementById("splash")
// check if user visited before
    if (localStorage.getItem("visited")) {
      // لو زار قبل كده → عرض المحتوى مباشرة
        splash.classList.add("hidden");
        main.classList.add("visible");
    } else {
      // لو أول مرة → عرض الانيميشن
        setTimeout(() => {
        splash.classList.add("hidden");
        main.classList.add("visible");
        // تخزين انه زار
        localStorage.setItem("visited", "true");
      }, 5000); // وقت الانيميشن
    }

    // let box = document.querySelector(".box");
    // box.addEventListener("mouseover",function(){
    //   box.style.background = "red";
    // })