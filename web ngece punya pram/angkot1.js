function ganticoy(){
    console.log('affa iyah')
    document.getElementById("katakata").innerHTML = "awokaowk"
}

function balik(){
    document.getElementById("katakata").innerHTML = "hello world ini angkot"
}

var angkacuy = 0

var leftpos = ["260px", "200px", "100px"]
var toppos = ["530px", "180px", "210px"]

var effort = 1
function tambahin(){
    if (angkacuy <= 2){
        // console.log(arrhehe[angkacuy])
        document.getElementById('randominajah').style.left = leftpos[angkacuy];
        document.getElementById('randominajah').style.top = toppos[angkacuy];
        angkacuy++
    }else{
        angkacuy = 0
        // console.log(arrhehe[angkacuy])
        document.getElementById('randominajah').style.left = leftpos[angkacuy];
        document.getElementById('randominajah').style.top = toppos[angkacuy];
        angkacuy++
        
    }
    document.getElementById('effortkamu').innerHTML = "effort anda => " + effort
    effort++
    // document.getElementById('randominajah').style.left = "200px";
}

setInterval(() => {
    let date = new Date()
    let clock = document.getElementById('jamdigital')
    clock.innerHTML = 
        date.getHours()+":"+
        date.getMinutes()+":"+
        date.getSeconds()
}, 1000);
