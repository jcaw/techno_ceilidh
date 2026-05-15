// Outro - Drowsie Maggie


/////////////////////////////////////////////////////
// CODE BELOW - DO NOT TOUCH

setCpm(100/2)

let muffler = slider(1.0, 0.15, 2)
// TODO: More boomy, deeper
let kick = s("[bd ~]*2").bank("RolandTR909")
  .lpf(muffler.mul(240))
  .lpenv(1.)
  .decay(0.7)
  .room(0.12)
  .clip(1.12)
  .distort(0.14)
  .gain(0.92)
  ._scope()

let bassline = note("[~ [e1 e2]]*2").s("supersaw")
  .decay(0.4)
  .clip(0.8)
  .room(0.4)
  .lpf(sine.range(200, 400).slow(10)
       .mul(muffler))
  //.lpenv(slider(3.811, 0.5, 6))
  .lpenv(sine.range(1.2, 4).slow(32))
  .gain(0.9)
  .transpose([0, -12])
  ._scope()

// TODO: Maybe put in different song
let robot_fade = slider(0, 0, 1)
let robot_lpf = slider(200, 100, 2600)
let robot = note("[e6 g6 b6 e7 d7 b6 d7 a6 f#6 d6 f#6 a6 a6 c#7 e7 c#7 b6 a6 g6 bb6 d7 g7 f#7 d7]").slow(2).s("square")
  .decay(0.032)
  .sustain(0)
  .lpf(robot_lpf)
  .lpq(14)
  .lpenv(4.6)
  .clip(0.62)
  .distort(0.16)
  .room(0.08)
  .gain(robot_fade.mul(0.38))
  ._scope()


let chops = note("e3 g3 g3 g3").s("sawtooth").vowel("a o i o").vibmod("0.1:2")
  .fm(1)
  .fmattack(".1")
  .lpf(slider(816, 0, 2000))
  .room(0.1)
  .transpose([0, -12, 12, 24])
  .clip(0.5).gain(2)


$: arrange(
  [2,          stack(kick, bassline)],
  [2,          stack(kick, bassline, chops.slow(1))],
  [4294967296, stack(kick, bassline, robot)],
)
