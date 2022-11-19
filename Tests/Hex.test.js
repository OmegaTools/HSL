
import { assertHexIsHSL } from 'AssertColor'


Deno.test('Hex String Conversion',() => {
    
    //  Black
    
    assertHexIsHSL('#000000',[ 0 , 0 , 0 ]);

    
    //  White
    
    assertHexIsHSL('#FFFFFF',[ 0 , 0 , 100 ]);
    
    
    //  Red
    
    assertHexIsHSL('#FF0000',[ 0 , 100 , 50 ]);
    
    
    //  Green
    
    assertHexIsHSL('#00FF00',[ 120 , 100 , 50 ]);
    
    
    //  Blue
    
    assertHexIsHSL('#0000FF',[ 240 , 100 , 50 ]);

})
