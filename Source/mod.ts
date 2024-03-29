
import CMYK from './Sources/CMYK.js'
import RGB from './Sources/RGB.js'
import Hex from './Sources/Hex.js'


/**
 *  Convert a RGB color to HSL
 *  
 *  Alpha channel can be included and won't be altered.
 *
 *  @param color ([ R , G , B ])
 *  @return A HSL(A) color array 
 */

export function fromRGB ( 
    color : number []
) : number [] {
    return RGB( color ) as number [];
}


/**
 *  Convert a Hex color string to HSL
 *  
 *  Alpha channel can be included and won't be altered.
 *
 *  @param color (#)RRGGBB(AA) or (#)RGB(A)
 *  @return A HSL(A) color array 
 */

export function fromHex (
    color : string
) : number [] {
    return Hex( color ) as number [];
}


/**
 *  Convert a CMYK color to HSL
 *  
 *  Alpha channel can be included and won't be altered.
 *
 *  @param color ([ R , G , B ])
 *  @return A HSL(A) color array 
 */

export function fromCMYK (
    color : number []
) : number [] {
    return CMYK( color ) as number [];
}
