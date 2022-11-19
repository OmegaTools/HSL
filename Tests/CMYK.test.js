
import { assertCMYKIsHSL } from 'AssertColor'


Deno.test('CMYK Array Conversion',() => {
    
    //  Black
    
    assertCMYKIsHSL([ 0 , 0 , 0 , 100 ],[ 0 , 0 , 0 ]);

    
    //  White
    
    assertCMYKIsHSL([ 0 , 0 , 0 , 0 ],[ 0 , 0 , 100 ]);
    
    
    //  Red
    
    assertCMYKIsHSL([ 0 , 100 , 100 , 0 ],[ 0 , 100 , 50 ]);
    
    
    //  Green
    
    assertCMYKIsHSL([ 100 , 0 , 100 , 0 ],[ 120 , 100 , 50 ]);
    
    
    //  Blue
    
    assertCMYKIsHSL([ 100 , 100 , 0 , 0 ],[ 240 , 100 , 50 ]);

})
