let saltThreshold=60
let pollutionThreshold=70

basic.showString("Smart Soil System")

basic.forever(function(){
    let SoilSalt=Math.randomRange(0,100)
    let waterPollution=
    Math.randomRange(0,100)
    basic.showString("S:" +SoilSalt)
    basic.showString("w:" + waterPollution)
    if (SoilSalt> saltThreshold&&
    waterPollution> pollutionThreshold){
        basic.showIcon(IconNames.No)
        basic.pause(1000)
        basic.showString("تحذير:ملوحة و تلوف مرتفعان!")
}
else if (SoilSalt> saltThreshold) {
    basic.showIcon(IconNames.Sad)
    basic.pause(500)
    basic.showString("ملوحة التربة مرتفعة!")
}else if (waterPollution>pollutionThreshold){
    basic.showString("p")
    basic.pause(500)
    basic.showString("تلوث المياه مرتفع!")
}else {
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
    basic.showString("البيئة مستقرة")
}
basic.pause(3000)
})