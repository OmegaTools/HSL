/*
    Copyright (c) 2021 JDK.FHWS@gmail.com
*/


const { min , max } = Math;


/*
    To Normalized
*/

function toNormalized(byte){
  return byte / 255;
}


/*
    To HSL
*/

function toHSL(input){

  const [ red , green , blue ] = input.map(toNormalized);

  const
    minimun = min(red,green,blue),
    maximum = max(red,green,blue);

  const
    chroma = maximum - minimun,
    lightness = (maximum + minimun) * .5;

  return [ calcHue() , calcSaturation() , lightness ];



  /*
      Calculate Hue
  */

  function calcHue(){
    if(chroma === 0)
      return 0;

    switch(maximum){
    case red   : return ((green - blue) / chroma + 0) * 60;
    case green : return ((blue - red)   / chroma + 1) * 60;
    case blue  : return ((red - green)  / chroma + 2) * 60;
    }
  }


  /*
      Calculate Saturation
  */

  function calcSaturation(){
    if([ 0 , 1 ].includes(lightness))
      return 0;

    return (maximum - lightness) / min(lightness,1 - lightness);
  }
}


/*
    [ R , G , B ] -> [ H , S , L ]
*/

module.exports = (...colors) => {

  if(colors.length === 1 || (typeof colors[2] !== 'number'))
    colors = colors[0];

  const hsl = toHSL(colors);

  const alpha = colors[3];

  if(alpha)
    hsl.push(alpha);

  return hsl;
}
