// Bonus - Drowsy Maggie


/////////////////////////////////////////////////////
// CODE BELOW - DO NOT TOUCH

setCpm(100/2)

let kick = s("[bd ~]*2").bank("RolandTR909")
  .lpf(240)
  .lpenv(2.2)
  .decay(0.7)
  .room(0.12)
  .clip(1.12)
  .distort(0.14)
  .gain(0.92)

let full_notes = cat(
  "e1 e1 e1 d1",
  "e1 d1 e1 d1",
  "d1 a1 d1 [a1 d1]",
  "a1 d1 d1 [a1 g1 d1]",
).note()

let bassline = full_notes.s("supersaw")
  .decay(0.4)
  .clip(0.8)
  .room(0.4)
  .lpf(slider(372.8, 200, 2000))
  .lpf(sine.range(200, 400).slow(10))
  //.lpenv(slider(3.811, 0.5, 6))
  .lpenv(sine.range(1.2, 4).slow(32))
  .gain(0.9)


let count_in = s("[hh]*4").bank("RolandTR909").lpf(1800).lpenv(0.5).decay(3).room(0.01).gain(0.5)


$: arrange(
  [6,          stack(kick, bassline)],
  [2,          stack(kick, bassline, count_in.slow(2))],
  [4294967296, stack(kick, bassline)],
)
