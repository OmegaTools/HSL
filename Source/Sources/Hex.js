
import rgbFrom from 'https://deno.land/x/rgb@1.0.0/Sources/Hex.js'
import fromRGB from './RGB.js'


/*
 *  (#)RRGGBB(AA) or (#)RGB(A) -> [ H , S , L , (A) ]
 */

export default function fromHex(hex){
    return fromRGB(rgbFrom(hex));
}
