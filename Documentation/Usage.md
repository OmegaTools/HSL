
# Usage

*How to this module.*

<br>

## Import

```JavaScript
import * as HSL from 'https://deno.land/x/hsl/mod.ts'
```

<br>

### ImportMap

*Add the module to your **ImportMap** for easier importing.*

```JSON
{
    "imports" : {
        "HSL" : "https://deno.land/x/hsl/mod.ts"
    }
}
```

<br>
<br>

## RGB

*Convert RGB colors to HSL.*

```JavaScript
import { fromRGB } from 'HSL'
```

<br>

### As Parameter

*Supply the channels directly.*

```JavaScript
const hsl = fromRGB( R , G , B );
```

<br>

### As Array

*Pass the channels as an array.*

```JavaScript
const hsl = fromRGB([ R , G , B ]);
```

<br>

### With Alpha

*Optionally include an Alpha channel.*

```JavaScript
const hsla = fromRGB([ R , G , B , A ]);
```

```JavaScript
const hsla = fromRGB( R , G , B , A );
```

<br>
