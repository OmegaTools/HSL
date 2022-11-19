
import fromRGB from './RGB.js'


function normalize ( channels ){
    return channels
        .map((channel) => channel / 100)
        .map((channel) => 1 - channel)
}


function toHSL ( channels ){
    
    const [ C , M , Y , K ] = 
        normalize(channels);
    
    return fromRGB([
        255 * C * K ,
        255 * M * K ,
        255 * Y * K ,
        channels[3]
    ])
}


/**
 *  [ C , M , Y , K , (A) ] -> [ H , S , L , (A) ]
 */

export default function fromCMYK ( colors ){
    return toHSL(colors)
        .concat(colors.slice(3,1))
}
