// Quarndon Hill

/////////////////////////////////////////////////////
// CODE BELOW - DO NOT TOUCH

setCpm(120/8)


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

let raw_bassline = full_notes.s("square").decay(0.7)
  .struct("[~ x x ~ x x]*4").slow(1)

let clean_bassline = raw_bassline
  .clip(sine.range(0.5, 1).slow(12))
  .lpf(slider(100, 100, 2000))
  //.lpf(sine.segment(1).range(100, 1000).slow(8))
  //.lpenv(slider(2.656, 0.5, 6))
  .lpenv(sine.range(1.2, 4).slow(16))
  .gain(0.6)
  .acidenv(slider(0.18, 0, 1))

let grosser_bassline = raw_bassline
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

let dry_to_wet = slider(0, 0, 1)
let bassline = xfade(clean_bassline, dry_to_wet, grosser_bassline)
// let bassline = dry_bassline

let bassline2 = full_notes.s("supersaw")
  .struct("[x x x x]")
  .lpf(slider(374.4, 200, 2000))
  .lpenv(slider(1.226, 0.5, 6))
  //.lpenv(sine.range(0.5, 4).slow(24))
  .gain(0.6)
  .distort(0.3)

let wobble = full_notes.s("triangle").decay(0.26)
  .struct("[~ x ~ [x x] ~ x ~ x]*4").slow(1)
  .sustain(0)
  .clip(0.78)
  .distort(0.24)
  .lpf(sine.range(130, 920).fast(2))
  .lpq(8)
  .lpenv(4.2)
  .room(0.35)
  .gain(dry_to_wet.mul(0.26))
  ._scope()


// let bassline2 = full_notes.s("supersaw")
//   .struct("[x x x x]")
//   .decay(0.16)
//   .sustain(0)
//   .clip(0.85)
//   .lpf(slider(420, 160, 2400))
//   .lpq(5)
//   .lpenv(slider(2.8, 0.5, 6))
//   //.lpenv(sine.range(0.5, 4).slow(24))
//   .gain(0.34)
//   .distort(0.36)
//   .delay(0.18)
//   ._scope()


let chops = note("d3 d3 d3 d3").s("sawtooth").vowel("a o i o").vibmod("0.1:2")
  .fm(1)
  .fmattack(".1")
  .lpf(slider(816, 0, 2000))
  .room(0.1)
  .transpose([0, -12])
  .clip(0.5).gain(2)


let count_length = 1/2
let kick_offset  = 2 - count_length
$: arrange(
  // Just dirty bass first
  [2,           stack(kick, bassline2)],
  // Bring in the rhythmic bass
  [kick_offset, stack(kick, bassline, bassline2, wobble)],
  // Count in - hacky offset, but it works
  [count_length,stack(kick, bassline.late(1/2), bassline2.late(1/2), wobble.late(1/2), count_in.slow(1/2))],
  // And go
  [4294967296,  stack(kick, bassline, bassline2, wobble)],
)
