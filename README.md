Convert written toki pona into [UCSUR-encoded sitelen pona](http://www.kreativekorp.com/ucsur/charts/sitelen.html)
===

_Font displayed below is [nasin nanpa v2.5.1](https://github.com/ETBCOR/nasin-nanpa)._

![](https://raw.githubusercontent.com/DataKinds/ucsur-sitelen-pona/main/example.png)

```
const { sitelen } = require('ucsur-sitelen-pona')

console.log(sitelen("toki! mi ken ante e toki pona tawa sitelen pona! nimi mi li {ilo lawa open}. mi ken sitelen e [suli]."))
// 󱥬!󱤴󱤘󱤆󱤉󱥬󱥔󱥩󱥠󱥔!󱥂󱤴󱤧󱦐󱤎󱤤󱥇󱦑.󱤴󱤘󱥠󱤉󱥍󱦗󱥣󱦘.


console.log(
    sitelen("sina ken ante e nasin mi. {[o lukin]}! pi suli li weka. poka li weka.", 
            { useCartouche: false, useLongPi: false }))
// 󱥞󱤘󱤆󱤉󱤿󱤴.{[󱥄󱤮]}!󱥍󱥣󱤧󱥶.󱥒󱤧󱥶.
```
