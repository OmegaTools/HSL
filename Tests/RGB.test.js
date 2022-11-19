
import { assertRGBIsHSL } from 'AssertColor'


Deno.test('RGB Array Conversion',() => {
    
    //  Black
    
    assertRGBIsHSL([ 0 , 0 , 0 ],[ 0 , 0 , 0 ]);

    
    //  White
    
    assertRGBIsHSL([ 255 , 255 , 255 ],[ 0 , 0 , 100 ]);
    
    
    //  Red
    
    assertRGBIsHSL([ 255 , 0 , 0 ],[ 0 , 100 , 50 ]);
    
    
    //  Green
    
    assertRGBIsHSL([ 0 , 255 , 0 ],[ 120 , 100 , 50 ]);
    
    
    //  Blue
    
    assertRGBIsHSL([ 0 , 0 , 255 ],[ 240 , 100 , 50 ]);

})
