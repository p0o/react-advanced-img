# React Advanced Img

> Img with fallback to placeholder on image load error

This library works as a substitute for your `<img>` tag. The only difference is you can send a placeholder
text and the library will generate an image with that text using [dummyimage.com](http://dummyimage.com)

I created this component for [busy.org](https://github.com/adcpm/busy) app. It's open source, take a look!

## Install

```
npm i react-advanced-img --save
```

## Example

```
import React from 'react';
import Img from 'react-advanced-img';

export default MyImageComp extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Img
        src='http://wrongImageUrl'
        placeholder='Yay!!'
      />
    );
  }
}
```

## API

`className`, `style`, `width`, `height`, `placeholder`, `src`

## License

MIT
