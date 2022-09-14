

import { assertEquals } from 'Assert'
import { fromRGB } from 'HSL'


export function assertRGBIsHSL(rgb,hsl){
    assertEquals(fromRGB(rgb),hsl);
}
