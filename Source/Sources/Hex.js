
import fromRGB from './RGB.js'


const { errors } = Deno;
const { log } = console;

const 
    channels_single = /^([0-9a-f]{1})([0-9a-f]{1})([0-9a-f]{1})([0-9a-f]{1})?$/i ,
    channels_double = /^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i ;

const invalid_hex_string = 
    'Invalid hex color string format, must be (#)RRGGBB(AA) or (#)RGB(A)';

const parseHex = (string) =>
    parseInt(string,16);


/*
 *  (#)RRGGBB(AA) or (#)RGB(A) -> [ H , S , L , (A) ]
 */

export default function fromHex(hex){
    
    if(hex.startsWith('#'))
        hex = hex.substring(1);
    
    const { length } = hex;
    
    const matches = 
        hex.match(channels_double) ??
        hex.match(channels_single) ;
        
    if(!matches)
        throw new InvalidData(invalid_hex_string);

    const channels = matches
        .slice(1)
        .filter((value) => value)
        .map(parseHex);

    return fromRGB(channels);
}
