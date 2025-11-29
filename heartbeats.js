setCpm(125/4)

let roland = "RolandTR808"

let kick = s("bd*4").bank(roland)
let hat  = s("<~ hh>*8").bank(roland)
let laser = note("e4").s("square")
  .lpf(4000)
  .decay(0.05)
  .sustain(0)
  .gain(0.7)
  .struct("~ x ~ x")
let bass = note("~ <e1 d1 g1 c1>").s("sawtooth")
  .lpf(sine.range(200, 2000).slow(4))
  .resonance(3)
  .decay(1)
  .sustain(0.5)

let laser2 = note("c1 <g1 <d2 a2>>").sound("supersaw").decay(0.2).room(0.4)
  .lpf(slider(300, 300, 2000))

let heartbeat1 = note("c5 ~  ~  ~  ~  ~  ~  ~ ").sound("square").room(0.3).gain(0.3)
let heartbeat2 = note("c5 ~  c3 ~  c3 ~  c3 ~ ").sound("square").room(0.3).gain(0.3)
let heartbeat3 = note("c5 c4 c2 c3 c4 c2 c4 c3").sound("square").room(0.3).gain(0.3)

$: kick
// $: hat
// $: bass
// $: laser
$: seq(
  heartbeat1.transpose("<0 0 0 0 -1 0 5 4>"),
).lpf(sine.range(200, 2000))
$: seq(s("~"), laser2, s("~"), laser2, s("~"), laser2, s("~"), laser2)


// .degradeBy(0.1)
