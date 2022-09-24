
# Hex

*Convert Hex color strings to HSL.*

```JavaScript
import { fromHex } from 'HSL'
```

<br>

## Single & Double

*Use either format to specify the RGB parts.*

```JavaScript
const hsl = fromHex('RGB');
```

```JavaScript
const hsl = fromHex('RRGGBB');
```

<br>

## Hashtag

*Optionally place the  `#`  before it.*

```JavaScript
const hsl = fromHex('#RRGGBB');
```

<br>

## Alpha

*Optionally include an Alpha channel.*

```JavaScript
const hsla = fromHex('RGBA');
```

```JavaScript
const hsla = fromHex('RRGGBBAA');
```

<br>
