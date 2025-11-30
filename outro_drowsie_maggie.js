// Outro - Drowsie Maggie


/////////////////////////////////////////////////////
// CODE BELOW - DO NOT TOUCH

setCpm(100/2)


// TODO: Nicer kick sound. Thicker, more techno
let kick = s("[bd ~]*2").bank("RolandTR909")
  .lpf(300)
  .lpenv(1.)
  .room(0.1)
  .clip(1)

let bassline = note("[~ [g1 g2]]*2").s("supersaw")
  .decay(0.4)
  .clip(0.8)
  .room(0.4)
  .lpf(slider(372.8, 200, 2000))
  .lpf(sine.range(200, 400).slow(10))
  //.lpenv(slider(3.811, 0.5, 6))
  // TODO: I guess use a longer period for this honestly]
  .lpenv(slider(sine.range(1.2, 4).slow(16)))
  .gain(0.9)


let count_in = s("[hh]*4").bank("RolandTR909").lpf(1800).lpenv(0.5).decay(3).room(0.01).gain(0.5)


$: arrange(
  [6,          stack(kick, bassline)],
  [2,          stack(kick, bassline, count_in.slow(2))],
  [4294967296, stack(kick, bassline)],
)
