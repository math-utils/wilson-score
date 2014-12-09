# Wilson Score [![Build Status](https://travis-ci.org/math-utils/wilson-score.png)](https://travis-ci.org/math-utils/wilson-score)

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
