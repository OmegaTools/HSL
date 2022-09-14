
import CMYK from './Sources/CMYK.js'
import RGB from './Sources/RGB.js'


/**
 *  @brief Converts a RGB color to HSL
 *  @param color Either ( R , G , B ) or ([ R , G , B ])
 *  @note Alpha channel can be included and won't be altered.
 */

export function fromRGB ( ... color : number [] | number[][] ) : number [] {
    return RGB( color ) as number [];
}


/**
 *  @brief Converts a CMYK color to HSL
 *  @param color Either ( C , M , Y , B ) or ([ R , G , B ])
 *  @note Alpha channel can be included and won't be altered.
 */

export function fromCMYK ( ... color : number [] | number[][] ) : number [] {
    return CMYK( color ) as number [];
}
