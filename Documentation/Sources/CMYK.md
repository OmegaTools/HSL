
# CMYK

*Convert CMYK colors to HSL.*

```JavaScript
import { fromCMYK } from 'HSL'
```

<br>

## Parameter

*Supply the channels directly.*

```JavaScript
const cmyk = fromCMYK( C , M , Y , K );
```

<br>

## Array

*Pass the channels as an array.*

```JavaScript
const cmyk = fromCMYK([ C , M , Y , K ]);
```

<br>

## Alpha

*Optionally include an Alpha channel.*

```JavaScript
const cmyka = fromCMYK([ C , M , Y , K , A ]);
```

```JavaScript
const cmyka = fromCMYK( C , M , Y , K , A );
```

<br>
