function btnClicking(){
    document.querySelector("#decrp-btn").addEventListener("click",function(){
        document.querySelector("#encryption").style.display = "none"
        document.querySelector("#decryption").style.display = "block"
        document.querySelector("#encrp-btn").style.backgroundColor = "#222"
        document.querySelector("#decrp-btn").style.backgroundColor = "#333"
        document.querySelector(".ri-arrow-right-line").style.rotate = "180deg"

    })
    document.querySelector("#encrp-btn").addEventListener("click",function(){
        document.querySelector("#decryption").style.display = "none"
        document.querySelector("#encryption").style.display = "block"
        document.querySelector("#decrp-btn").style.backgroundColor = "#222"
        document.querySelector("#encrp-btn").style.backgroundColor = "#333"
        document.querySelector(".ri-arrow-right-line").style.rotate = "0deg"
    })
}
btnClicking()