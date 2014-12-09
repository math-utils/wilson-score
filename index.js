module.exports = function (up, total, z) {
  // http://amix.dk/blog/post/19588
  // 95% = 1.644853
  // 99% = 2.326348
  z = z || 2.326348
  if (total <= 0 || total < up) return 0

  var phat = up/total, z2 = z*z;
  return (phat + z2/(2*total) - z*Math.sqrt((phat*(1 - phat) + z2/(4*total))/total))/(1 + z2/total)
}
