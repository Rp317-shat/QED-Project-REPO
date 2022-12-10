const sharp = require("sharp");
const jimp = require("jimp");
const { index } = require("mathjs");
let width = 150
let height = 150
async function resizeImage() {
    let name = "changed"
    try {
      await sharp("among.png")
        .resize({
          width: width,
          height: height
        })
        .greyscale()
        .toFile(`${name}.png`);
    } catch (error) {
      console.log(error);
    }//https://www.digitalocean.com/community/tutorials/how-to-process-images-in-node-js-with-sharp#step-3-resizing-changing-image-format-and-compressing-images
}
//so now 150 by 150 grid so you can get equation with that
const graphedPixels = []; 
async function why() {
    await resizeImage();
    const image = await jimp.read("changed.png");
    for (let x = 0; x < width + 1; x++) {
        for (let y = 0; y < width + 1; y++) {
            graphedPixels.push({
                color: jimp.intToRGBA(image.getPixelColor(x, y)),
                position: { x, y }
            });
        }
    }//this whole for loop https://sourceb.in/tUUDa1teIQ
    graphedPixels.sort((a, b) => a.color.g - b.color.g)
}
let indeex = 1;
let arraySortX = [5,-8,3,-10,2,-8]
async function equation() {
    await why()
    indeex = graphedPixels.filter((element) => element.color.g === 255)
    for (let index = 0; index < indeex.length; index++) {
        if(index % 3 === 0 && index !== 0) {
            //console.log(index)
            arraySortX.push(indeex[index].position.x,indeex[index].position.y)
            arraySortX.push(indeex[index-1].position.x,indeex[index-1].position.y)
            arraySortX.push(indeex[index-2].position.x,indeex[index-2].position.y)
            //console.log(arraySortX)
            inPain();
            arraySortX = []
        }
    }
}
solveY()
//we do equation in later patches (Dec 10.)
//for now we do the paper/proof of concept such as just 
async function line() {
    let i = 0;
    let x = 'no';
    let array = [];
    await arraySortX.forEach((element,index) => {
        if(i==0) {
            x = element;
            i++
        } else {
            array.push({x: x, y:element})
            i = 0
            x = 'no'
        }
    });
    if(array[1] === undefined) {
    } else {
    let slope = Math.round(array[1].y-array[0].y)/(array[1].x-array[0].x)
    //y=slopex+b
    //lets find b
    let combined = slope*array[0].x;
    let b = array[0].y-combined
    if(slope === Infinity) {

    } else if(b === NaN) {

    } else {
        console.log(`y=${slope}x+${b}`)
    }
    
}}
async function solveY() {
	let a = 'a'
  let b = 'b'
  let c = 'c'
  let array = []
  let i = 0;
  let x = 'no';
	arraySortX.forEach(function(element,index) {
        if(i==0) {
            x = element;
            i++
        } else {
            array.push({x: x, y:element})
            i = 0
            x = 'no'
        }
    });
    let array2 = [];
    array.forEach(function(element, index) {
        array2.push({aVar: Math.pow(array[index].y,2), bVar:array[index].y, x:array[index].x});
        //NO MORE C
    })
	//now no more a
	let array3 = [];
    function breuh() {
        let I = 0;
        for (let index = 0; index < array2.length; index=index+2) {
            if(array2[I+1] === undefined) {
                line()
            } else {
            temp = array2[I+1].aVar
            let once = array2[I].aVar - temp
            temp = 0;
            temp = array2[I+1].bVar
            let twice = array2[I].bVar -temp
            temp = 0;
            temp = array2[I+1].x
            let thrice = array2[I].x -temp
            array3.push({aVar: once,bVar: twice,x:thrice})
            I=I+1
        }}
    }
    breuh()
	let nuMult = 1;
	function multiply() {
		array3.forEach(function(element,index) {
					nuMult = element.aVar*nuMult;
		})
	}
	multiply()
	let array4 = []
	function findB() {
		array4.push({bVar:array3[0].bVar})
	}
	console.log(array4)
}
async function inPain() {
    let a = 'a'
    let b = 'b'
    let c = 'c'
    let array = []
    let i = 0;
    let x = 'no';
    arraySortX.forEach(function(element,index) {
        if(i==0) {
            x = element;
            i++
        } else {
            array.push({x: x, y:element})
            i = 0
            x = 'no'
        }
    });
    let array2 = [];
    array.forEach(function(element, index) {
        array2.push({aVar: Math.pow(array[index].x,2), bVar:array[index].x, cVar:'c',y:array[index].y});
        //NO MORE C
    })

    let array3 = [];
    function breuh() {
        let I = 0;
        for (let index = 0; index < array2.length; index=index+2) {
            if(array2[I+1] === undefined) {
                line()
            } else {
            temp = array2[I+1].aVar
            let once = array2[I].aVar - temp
            temp = 0;
            temp = array2[I+1].bVar
            let twice = array2[I].bVar -temp
            temp = 0;
            temp = array2[I+1].y
            let thrice = array2[I].y -temp
            array3.push({aVar: once,bVar: twice,y:thrice})
            I=I+1
        }}
    }
    breuh()
    //now no more C we can do try and get rid of A so that way we can get the answer to B
    let array4 = [];
    function breuhuh() {
        let I = 0;
        //find common factor of A my multiplication/division
        let hi = 1;
        let IV = 0;
        for (let index = 0; index < array3.length; index++) {
            hi = hi * array3[IV].aVar
            IV++
        } //this gets all the numbers multiplied
        let array5 = [];
        let array6 = [];
        function mult() { //chooses half of length to get multiplied negitive
            for (let index = 0; index < array3.length; index++) {
                //these are flipped/multiplied
                let ig = 0;
                if(array3[1] === undefined) {
                    line()
                } else {
                array4.push({aVar:-array3[ig].aVar*array3[ig+1].aVar,bVar:array3[ig].bVar*array3[ig+1].bVar,y:-array3[ig].y*array3[ig+1].y})
                ig++
                array4.push({aVar:array3[ig].aVar*array3[ig-1].aVar, bVar: array3[ig].bVar*array3[ig-1].bVar,y: -array3[ig].y*array3[ig-1].y})
            }}
            //now a = 0 we can solve for b
            function beez() {
                //bVar*b=y8
                let indrex = 0;
                for (let index = 0; index < array4.length/2; index++) {
                    let one = array4[indrex++].aVar+array4[indrex--].aVar; 
                    //cancel out
                    let two = array4[indrex++].bVar+array4[indrex--].bVar;
                    let thr = array4[indrex++].y+array4[indrex--].y;
                    array5.push({aVar:one, bVar:two, y:thr})
                }
                array5.forEach((element,index) => {
                    b=array5[index].y/array5[index].bVar;
                })
            }
            beez()
        }
        mult()
        //now thats out of the way we can do A by using array3
        function findA() {
            let array7 = []
            let array8 = [];
            array3.forEach((element, index) => {
                array7.push({aVar: element.aVar, bVar:b*element.bVar, y:element.y})
                array8.push({aVar: element.aVar, y: array7[index].y-array7[index].bVar})
                a = array8[index].y/array8[index].aVar;
            })
            //now only A needs solving so we solved in terms of A
        }
        findA()
        function findC() {
            let array7 = []
            let array8 = []
            let array9 = []
            let itch = 1;
            array2.forEach((element, index) => {
                if(itch == 1) {
                    array7.push({aVar: element.aVar*a, bVar:b*element.bVar, y:element.y})
                    array8.push({aVar: array7[index].aVar, y:(array7[index].y-array7[index].bVar)})
                    array9.push({y: array8[index].y - array8[index].aVar})
                    itch++
                    
                }
                c = array9[0].y;
            })
            //same thing as findA()

        }
        findC()
        console.log(a,b,c)
        if(array2[0] === undefined | a === Infinity) {
        }
        for (let index = 0; index < array2.length; index++) {
            if(a*Math.pow(array2[index].bVar,2)+(b*array2[index].bVar)+c === array2[index].y && index !== 2) {
            } else if(index === 2) {
                console.log(`${a}x^2+${b}x+${c}=y`)
            } else {
                solveY()
            }
            
        }
    }
    breuhuh();
}