
import convertRGB from './RGB.js'


/**
 *  @brief Converts an RGB color to HSL
 *  @param rgb Either ( R , G , B ) or ([ R , G , B ])
 *  @note Alpha channel can be included and won't be altered.
 */

export function fromRGB ( ... rgb : number [] | number[][] ) : number [] {
    return convertRGB ( rgb ) as number [];
}
