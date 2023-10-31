

function setup() {
    console.log('testing')
    createCanvas(windowWidth,windowHeight,WEBGL)
    //createCanvas(1200,900,WEBGL)
    angleMode(DEGREES)
}

function draw(){
    background('#123385')
    //background('black')

    rotateX(70)
    //fill('red')
    noFill()
    //stroke('#39FF14')
    stroke('white')
    for (var i=0; i<90; i++)  {
        beginShape()
        for (var j = 0; j <360; j+=90){
            var rad=i*10
            var x= rad *cos(j)
            var y= rad*sin(j)
            var z= sin(frameCount *10 + i *10 ) *70

            vertex(x,y,z)
        }
        endShape(CLOSE)
    }
}