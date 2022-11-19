
import { toRGB } from '../Imports.js'
import fromRGB from './RGB.js'


/**
 *  Input : (#)RRGGBB(AA) or (#)RGB(A)
 *  Output : [ H , S , L , (A) ] or null
 */

export default function fromHex(hex){
    return fromRGB(toRGB(hex));
}
