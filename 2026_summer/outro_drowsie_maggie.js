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

let bassline = note("[~ [g1 g2]]*2").s("supersaw")
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

// TODO: Interesting but need to move it somewhere better probably
// TODO: Change this into normal robot bleeps, at a steady pace, but with somewhat random notes (still along the scale though)
let robot_fade = slider(0, 0, 1)
let robot_lpf = slider(1450, 180, 5600)
let robot = stack(
  note("[~ f#6] [c7 ~] [a5 eb6] ~ [g6 ~] [[b6 d7] ~] ~ e6").s("square")
    .decay(0.035)
    .sustain(0),
  note("~ [bb4 ~] ~ [e5 g5] [~ c#5] ~ [f5 ~] ~").s("sine")
    .decay(0.08)
    .sustain(0)
    .late(1/48),
)
  .slow(2)
  .lpf(robot_lpf)
  .lpq(10)
  .lpenv(2.8)
  .clip(0.55)
  .distort(0.08)
  .delay(0.32)
  .room(0.72)
  .gain(robot_fade.mul(0.42))
  ._scope()


let chops = note("f3 f3 f3 f3").s("sawtooth").vowel("a o i o").vibmod("0.1:2")
  .fm(1)
  .fmattack(".1")
  .lpf(slider(816, 0, 2000))
  .room(0.1)
  .transpose([0, -12])
  .clip(0.5).gain(2)


$: arrange(
  [6,          stack(kick, bassline)],
  [2,          stack(kick, bassline, chops.slow(2))],
  [4294967296, stack(kick, bassline, robot)],
)
