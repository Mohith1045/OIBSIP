const convertTemperature=()=>{
    const opt = document.getElementById("options").value
    const input  = Number.parseInt(document.getElementById("input").value)
    const output = document.getElementById("output")
    let val = 0

    if(opt==="F"){
        val =   (input* 9/5) + 32   
    }else{
        val = (input-32) * 5/9 
    }

    val = Math.round(val * 100) / 100
    output.value=val
    console.log(opt+" "+input+" "+val)
}


//(0°C × 9/5) + 32 
