

import { fromCMYK , fromHex , fromRGB } from 'HSL'
import { assertEquals } from 'Assert'


export function assertRGBIsHSL ( input , output ){
    assertEquals(fromRGB(input),output);
}


export function assertCMYKIsHSL ( input , output ){
    assertEquals(fromCMYK(input),output);
}


export function assertHexIsHSL ( input , output ){
    assertEquals(fromHex(input),output);
}
