
<br>

<div align = center>

[![Badge Stars]][#]   
[![Badge Deno]][Deno]

<br>
<br>

<img
    src = 'https://avatars.githubusercontent.com/u/84190317?s=200&v=4'
    width = 120
/>

# HSL

*Convert colors to HSL.*

<br>

[![Button Usage]][Usage]   
[![Button Conversions]][Conversions]

<br>
<br>

## Examples

<br>

```JavaScript
import * as HSL from 'https://deno.land/x/hsl/mod.ts';
```

</div>

<br>

### RGB

```JavaScript
const rgb = [ 255 , 0 , 0 ]; // Red

const hsl = HSL.fromRGB(rgb);

console.log(hsl); // [ 0 , 100 , 50 ]
```

<br>

### CMYK

```JavaScript
const cmyk = [ 100 , 0 , 100 , 0 ]; // Green

const hsl = HSL.fromCMYK(cmyk);

console.log(hsl); // [ 120 , 100 , 50 ]
```

<br>


<!----------------------------------------------------------------------------->

[Conversions]: Documentation/Conversions.md
[License]: LICENSE
[Usage]: Documentation/Usage.md
[Deno]: https://deno.land/x/hsl
[#]: #


<!---------------------------------[ Badges ]---------------------------------->

[Badge License]: https://img.shields.io/badge/License-AGPL3-015d93.svg?style=for-the-badge&labelColor=blue
[Badge Stars]: https://img.shields.io/github/stars/OmegaTools/HSL?style=for-the-badge&logoColor=white&logo=Trustpilot&labelColor=FF66AA&color=cf538b
[Badge Deno]: https://img.shields.io/badge/-Deno-58a341?style=for-the-badge&logoColor=white&logo=Deno&labelColor=64bc4b


<!---------------------------------[ Buttons ]--------------------------------->

[Button Conversions]: https://img.shields.io/badge/Conversions-64BC4B?style=for-the-badge&logoColor=white&logo=Betfair
[Button Usage]: https://img.shields.io/badge/Usage-04ACE6?style=for-the-badge&logoColor=white&logo=GitBook
