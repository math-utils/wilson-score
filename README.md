# Wilson Score [![Build Status](https://travis-ci.org/jonathanong/wilson-score.png)](https://travis-ci.org/jonathanong/wilson-score)

Calculates the lower bound of the [binomial proportion confidence interval](http://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval) as calculated by the [Wilson score interval](http://en.wikipedia.org/wiki/Binomial_proportion_confidence_interval#Wilson_score_interval).
If you're not retarded, you would use this score instead of averages when sorting and ranking (doesn't matter what the user sees).
This is what [reddit uses](http://amix.dk/blog/post/19588) for "best".

## API

```js
var wilson = require('wilson-score')
```

### wilson(up, total [, z-score])

- `up` - the total number of "yes"s
- `total` - the total number of votes
- `z-score` - the z-score of the interval.
  By default, it's ~2.3 which corresponds to a 99% confidence interval.
  Use `1.644853` for 95%.

Instead of calculating the average as `up / total`,
calculate the wilson score via `wilson(up, total)`.
The wilson score will always be lower than the average.

## License

The MIT License (MIT)

Copyright (c) 2013 Jonathan Ong me@jongleberry.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.