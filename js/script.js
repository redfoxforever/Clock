let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let s = document.querySelector(".s")
let m = document.querySelector(".m")
let h = document.querySelector(".h")

// let x = 0
// let y
// function recursion() {
//     console.log(x);
//     x++
//     y = recursion()
//     if (x == 50) {
//         recursion()
//     } else {
//         clearInterval(y)
//     }
// }
// recursion()

function clock() {

    let time = new Date()
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()

    hours.innerHTML = hour < 10 ? `0${hour}` : hour
    minutes.innerHTML = min < 10 ? `0${min}` : min

    h.style.transform = `rotate(${hour * 30}deg)`
    m.style.transform = `rotate(${min * 6}deg)`
    s.style.transform = `rotate(${sec * 6}deg)`

    setTimeout(() => {
        clock()
    }, 1000);
}

clock()

let tabsLink = document.querySelectorAll(".tabsItem")
let tabsContentItem = document.querySelectorAll(".tabsContentItem")

for (let i = 0; i < tabsLink.length; i++) {
    tabsLink[i].addEventListener("click", function () {
        for (let k = 0; k < tabsLink.length; k++) {
            // tabsLink[k].classList.add()
            tabsLink[k].classList.remove("active")
            tabsContentItem[k].classList.remove("active")
            // tabsLink[k].classList.contains()
            // tabsLink[k].classList.toggle()
        }
        tabsLink[i].classList.add("active")
        tabsContentItem[i].classList.add("active")
    })
}


let swS = document.querySelector('.stopwatch__seconds')
let swM = document.querySelector('.stopwatch__minutes')
let swH = document.querySelector('.stopwatch__hours')
let secBtn = document.querySelector('.stopwatch__btn')
let tabsLinkSpan = document.querySelector('.tabsLink__span')

let stop;

secBtn.addEventListener('click', function () {

    if (this.innerHTML == "start") {
        this.innerHTML = "stop"
        tabsLinkSpan.classList.add('active')
        stopWatch()
    } else if (this.innerHTML == "stop") {
        this.innerHTML = "clear"
        tabsLinkSpan.classList.remove('active')
        tabsLinkSpan.classList.add('active_clear')
        clearInterval(stop)
    } else if (this.innerHTML == "clear") {
        this.innerHTML = "start"
        tabsLinkSpan.classList.remove('active_clear')
        swS.innerHTML = 0
        swM.innerHTML = 0
        swH.innerHTML = 0
    }
})

function stopWatch() {
    swS.innerHTML++

    if (swS.innerHTML > 59) {
        swS.innerHTML = 0
        swM.innerHTML++
    } else if (swM.innerHTML > 59) {
        swM.innerHTML = 0
        swH++
    }

    stop = setTimeout(() => {
        stopWatch()
    }, 100);
}