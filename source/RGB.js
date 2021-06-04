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

    let hue;

    switch(maximum){
    case red   : hue = (green - blue); break;
    case green : hue = (blue - red);   break;
    case blue  : hue = (red - green);  break;
    }

    hue /= chroma;

    switch(maximum){
    case red   : hue += 0; break;
    case green : hue += 2; break;
    case blue  : hue += 4; break;
    }

    hue *= 60;
    hue %= 360;

    if(hue < 0)
      hue += 360;

    return hue;
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
