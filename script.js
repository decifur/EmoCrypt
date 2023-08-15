var clutter = ""

function encryption(){
    document.querySelector("#encrp-text-btn").addEventListener("click",function(){
        var input = document.getElementById("txtmsg").value
        var password = document.getElementById("password").value

        const str = input.split("")
        str.forEach(element => {
            clutter+=`&#128${element.charCodeAt()} `
        });
        
        document.querySelector("#result").innerHTML = clutter

        var dataArr = [];
        if(JSON.parse(localStorage.getItem('data1'))){
            dataArr = JSON.parse(localStorage.getItem('data1'))
            dataArr.push({"pass":password, "input":input, "clutter":clutter})
        }
        else {
            dataArr = [{"pass":password, "input":input, "clutter":clutter}]
        }
        localStorage.setItem('data1', JSON.stringify(dataArr))
    })
}

function decryption(){
    document.querySelector("#decrp-text-btn").addEventListener("click",function(){
        var clutter2 = '';
        var input2 = document.querySelector("#emojimsg").value
        var finalPass = document.querySelector("#finalPassword").value
        var user = JSON.parse(localStorage.getItem('data1'))
        var str2 = input2.split(" ")
        str2.forEach(element => {
            clutter2 += `&#${(element.codePointAt(0))} `
        });
        var found,flag=0;
        for(let i of user){
            if(i.clutter == clutter2 && i.pass == finalPass){
                found = i;
                flag=1;
            }
        }
        if (flag==1) {
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `#eee`
            document.querySelector("#result").innerHTML = found.input
        } else {
            document.querySelector("#result").style.display = `block`
            document.querySelector("#result").style.color = `red`
            document.querySelector("#result").innerHTML = "Wrong password!"
        }
    })
}


function btnClicking(){
    document.querySelector("#decrp-btn").addEventListener("click",function(){
        document.querySelector("#encryption").style.display = "none"
        document.querySelector("#decryption").style.display = "block"
        document.querySelector("#encrp-btn").style.backgroundColor = "#222"
        document.querySelector("#decrp-btn").style.backgroundColor = "#333"
        document.querySelector(".ri-arrow-right-line").style.rotate = "180deg"
        document.querySelector("#result").style.display = "none"
        document.querySelector("#txtmsg").value = ""
        document.querySelector("#password").value = ""

    })
    document.querySelector("#encrp-btn").addEventListener("click",function(){
        document.querySelector("#decryption").style.display = "none"
        document.querySelector("#encryption").style.display = "block"
        document.querySelector("#decrp-btn").style.backgroundColor = "#222"
        document.querySelector("#encrp-btn").style.backgroundColor = "#333"
        document.querySelector(".ri-arrow-right-line").style.rotate = "0deg"
        document.querySelector("#result").style.display = "none"
        document.querySelector("#emojimsg").value = ""
        document.querySelector("#finalPassword").value = ""
    })
    document.querySelector("#encrp-text-btn").addEventListener("click",function(){
        document.querySelector("#result").style.display = "block"
    })
}
btnClicking()
encryption()
decryption()