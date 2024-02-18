var rect=document.querySelector('#center');
rect.addEventListener("mousemove",function(details){
    // console.log('hey');
    // console.log(rect.getBoundingClientRect())
    var rectangleposition = rect.getBoundingClientRect()
    var insiderectval = details.clientX-rectangleposition.left;

    if (insiderectval < rectangleposition.width/2){
        var redcolor = gsap.utils.mapRange(
            0,
            rectangleposition.width/2,
            255,
            0,
            insiderectval
        );
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power4,
        });
    }else{

        var bluecolor = gsap.utils.mapRange(
            rectangleposition.width/2,
            rectangleposition.width,
            0,
            255,
            insiderectval
        );
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease:Power4,
        });

    }

});
rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white",
    })
});

