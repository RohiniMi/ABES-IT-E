let isOn = false;
function fun(value) {
    if (isOn) {
        console.log(value);
        const bulb = document.getElementById("bulb");
        bulb.style.backgroundColor = `${value}`;
    }
}
function onOffButtonHandler() {
    const onoffButton = document.getElementById("on-off");
    console.log(onoffButton.value);
    if (onoffButton.value === "off") {
        isOn = true;
        onoffButton.value = "on";
    } else{
        isOn = true;
        onoffButton.value = "off";
    }
}
