
import CMYK from './Sources/CMYK.js'
import RGB from './Sources/RGB.js'


/**
 *  Convert a RGB color to HSL
 *  
 *  Alpha channel can be included and won't be altered.
 *
 *  @param color Either ( R , G , B ) or ([ R , G , B ])
 *  @return A HSL(A) color array 
 */

export function fromRGB ( 
    ... color : number [] | number[][] 
) : number [] {
    return RGB( color ) as number [];
}


/**
 *  Convert a CMYK color to HSL
 *  
 *  Alpha channel can be included and won't be altered.
 *
 *  @param color Either ( C , M , Y , B ) or ([ R , G , B ])
 *  @return A HSL(A) color array 
 */

export function fromCMYK (
    ... color : number [] | number[][] 
) : number [] {
    return CMYK( color ) as number [];
}
