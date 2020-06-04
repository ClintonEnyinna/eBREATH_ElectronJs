var obj = $('#slider').roundSlider({
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    radius: 45,
    width: 5,
    handleSize: "+0",
    startAngle: -50,
    endAngle: "+280",
    animation: true,
    showTooltip: true,
    editableTooltip: false,
    readOnly: false,
    disabled: false,
    keyboardAction: true,
    mouseScrollAction: false,
    sliderType: "min-range",
    update:"onValueChange",
    
    circleShape: "full",
    handleShape: "dot",
    lineCap: "butt",

    svgMode: true,
    borderWidth: 1,
    borderColor: "#181818",
    pathColor: "#242424",
    rangeColor: "#09a9da",
    tooltipColor: "#fff",

    
});
$("#slider2").roundSlider({
    min: 0,
    max: 8,
    step: .1,
    value: 1.8,
    radius: 45,
    width: 5,
    handleSize: "+0",
    startAngle: -50,
    endAngle: "+280",
    animation: true,
    showTooltip: true,
    editableTooltip: false,
    readOnly: false,
    disabled: false,
    keyboardAction: true,
    mouseScrollAction: false,
    sliderType: "min-range",
    circleShape: "full",
    handleShape: "dot",
    lineCap: "butt",
    update:"onValueChange",
    svgMode: true,
    borderWidth: 1,
    borderColor: "#181818",
    pathColor: "#242424",
    rangeColor: "#09a9da",
    tooltipColor: "#fff",
});
$("#slider3").roundSlider({
    min: 0,
    max: 10,
    step: 1,
    value: 8,
    radius: 45,
    width: 5,
    handleSize: "+0",
    startAngle: -50,
    endAngle: "+280",
    animation: true,
    showTooltip: true,
    editableTooltip: false,
    readOnly: false,
    disabled: false,
    keyboardAction: true,
    mouseScrollAction: false,
    sliderType: "min-range",
    circleShape: "full",
    handleShape: "dot",
    lineCap: "butt",
    update:"onValueChange",
    svgMode: true,
    borderWidth: 1,
    borderColor: "#181818",
    pathColor: "#242424",
    rangeColor: "#09a9da",
    tooltipColor: "#fff",
});

//Data slider
function onValueChange () {
   let  firstData= $('#slider').roundSlider('getValue');
   let  secondData= $('#slider2').roundSlider('getValue');
   let  thirdData= $('#slider3').roundSlider('getValue');

   let  SilerData = [firstData, secondData,thirdData];
   
}