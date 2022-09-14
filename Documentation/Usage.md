# How to Use



## RGB

```js

  const { rgbToHSL } = require('to-hls');

```

###### Alpha Support

```js

  const [ H , S , L , A ] = rgbToHSL(50,100,200,255);
  const [  H  , S ,  L  ] = rgbToHSL(255,0,150);

```

###### Pass an Array

```js

  const hsl = rgbToHSL([ 45 , 100 , 20 ]);

```

###### Use with `.map()`

```js

  const rgbColors = [
    [ 40 ,  60  , 130 ],
    [ 120 , 50 ,  230 , 200 ]
  ]

  rgbColors
  .map(rgbToHSL)
  .forEach((hsl) => console.log(hsl));

```
