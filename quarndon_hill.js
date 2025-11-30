// Quarndon Hill

// TODO: Make more dubsteppy/filthy

/////////////////////////////////////////////////////
// CODE BELOW - DO NOT TOUCH

setCpm(115/8)


// TODO: Nicer kick sound. Thicker, more techno
let kick = s("[bd ~ ~ bd ~ ~]*4").bank("RolandTR909")
  .lpf(400)
  .lpenv(1.5)
  .room(0.1)
  .clip(1)

// Morgan Rattler
let full_notes = cat(
  "d1 e1 f#1 [g1 a1]",
  "d1 e1 f#1 [g1 a1]",
  "d1 e1 f#1 [g1 a1]",
  "d1 e1 f#1 [g1 a1]",
  "d1 a1 d1 [e1 g1]",
  "d1 a1 b1 [g1 a1]",
  "d1 a1 d1 [e1 g1]",
  "d1 a1 b1 [g1 a1]",
  "d1 e1 f#1 [g1 a1]",
  "d1 e1 f#1 [g1 a1]",
  "d1 e1 f#1 [g1 a1]",
  "d1 e1 f#1 [g1 a1]",
).note()

// TODO: More like a laser sound?
let bassline = full_notes.s("square").decay(0.7)
  .struct("[~ x x ~ x x]*4").slow(1)
  .clip(sine.range(0.5, 1).slow(12))
  .lpf(slider(100, 100, 2000))
  //.lpf(sine.segment(1).range(100, 1000).slow(8))
  //.lpenv(slider(2.656, 0.5, 6))
  .lpenv(sine.range(1.2, 4).slow(16))
  .gain(0.6)

let bassline2 = full_notes.s("supersaw")
  .struct("[x x x x]")
  .lpf(slider(374.4, 200, 2000))
  .lpenv(slider(1.226, 0.5, 6))
  //.lpenv(sine.range(0.5, 4).slow(24))
  .gain(0.6)
  .distort(0.3)

let count_in = s("[hh]*4").bank("RolandTR909").lpf(1800).lpenv(0.5).decay(3).room(0.01).gain(0.3)

let count_length = 1/2
let kick_offset  = 2 - count_length
$: arrange(
  // Just dirty bass first
  [2,           stack(kick, bassline2)],
  // Bring in the rhythmic bass
  [kick_offset, stack(kick, bassline, bassline2)],
  // Count in - hacky offset, but it works
  [count_length,stack(kick, bassline.late(1/2), bassline2.late(1/2), count_in.slow(1/2))],
  // And go
  [4294967296,  stack(kick, bassline, bassline2)],
)
