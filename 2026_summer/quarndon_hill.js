// Quarndon Hill

/////////////////////////////////////////////////////
// CODE BELOW - DO NOT TOUCH

setCpm(115/8)


let kick = s("[bd ~ ~ bd ~ ~]*4").bank("RolandTR909")
  .lpf(230)
  .lpenv(2.8)
  .decay(0.76)
  .room(0.14)
  .clip(1.2)
  .distort(0.2)
  .gain(0.95)

// Morgan Rattler
let full_notes = cat(
  "d1 e1 f#1 [g1 a1]",
  "d1 e1 f#1 [g1 a1]",
  "d1 a1 d1 [e1 g1]",
  "d1 a1 b1 [g1 a1]",
  "d1 e1 f#1 [g1 a1]",
  "d1 e1 f#1 [g1 a1]",
).note()

let bassline = full_notes.s("square").decay(0.7)
  .struct("[~ x x ~ x x]*4").slow(1)
  .sustain(0)
  .clip(sine.range(0.6, 1.05).slow(12))
  .distort(0.18)
  .lpf(slider(260, 90, 1800))
  //.lpf(sine.segment(1).range(100, 1000).slow(8))
  //.lpenv(slider(2.656, 0.5, 6))
  .lpq(7)
  .lpenv(sine.range(2.2, 6).slow(16))
  .delay(0.11)
  .gain(0.46)

let bassline2 = full_notes.s("supersaw")
  .struct("[x x x x]")
  .decay(0.16)
  .sustain(0)
  .clip(0.85)
  .lpf(slider(420, 160, 2400))
  .lpq(5)
  .lpenv(slider(2.8, 0.5, 6))
  //.lpenv(sine.range(0.5, 4).slow(24))
  .gain(0.34)
  .distort(0.36)
  .delay(0.18)

let wobble = full_notes.s("triangle").decay(0.26)
  .struct("[~ x ~ [x x] ~ x ~ x]*4").slow(1)
  .sustain(0)
  .clip(0.78)
  .distort(0.24)
  .lpf(sine.range(130, 920).fast(2))
  .lpq(8)
  .lpenv(4.2)
  .room(0.35)
  .gain(0.26)

let count_in = s("[hh]*4").bank("RolandTR909").lpf(1800).lpenv(0.5).decay(3).room(0.01).gain(0.3)

let count_length = 1/2
let kick_offset  = 2 - count_length
$: arrange(
  // Just dirty bass first
  [2,           stack(kick, bassline2, wobble)],
  // Bring in the rhythmic bass
  [kick_offset, stack(kick, bassline, bassline2, wobble)],
  // Count in - hacky offset, but it works
  [count_length,stack(kick, bassline.late(1/2), bassline2.late(1/2), wobble.late(1/2), count_in.slow(1/2))],
  // And go
  [4294967296,  stack(kick, bassline, bassline2, wobble)],
)
