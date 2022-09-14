
import fromRGB from './RGB.js'


function toHSL(channels){
    
    const [ C , M , Y , K ] = channels
        .map((channel) => channel / 100)
        .map((channel) => 1 - channel)
    
    
    return fromRGB([
        255 * C * K ,
        255 * M * K ,
        255 * Y * K
    ])
}


/*
 *  [ C , M , Y , K , (A) ] -> [ H , S , L , (A) ]
 */

export default function fromCMYK(colors){
    

    if(colors.length === 1 || (typeof colors[2] !== 'number'))
        colors = colors[0];

    const hsl = toHSL(colors);

    const alpha = colors[4];

    if(alpha)
        hsl.push(alpha);

    return hsl;
}
