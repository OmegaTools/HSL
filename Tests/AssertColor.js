

import { fromCMYK , fromRGB } from 'HSL'
import { assertEquals } from 'Assert'


export function assertRGBIsHSL(input,output){
    assertEquals(fromRGB(input),output);
}


export function assertCMYKIsHSL(input,output){
    assertEquals(fromCMYK(input),output);
}
