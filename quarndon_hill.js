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

let heartbeat = note("c5 ~ ~ c5 ~ ~").sound("square")
  .room(0.3)
  .gain(0.2)
  .slow(1/2)
  .clip(1/2)
  .lpf(sine.range(200, 2000).slow(8))
  .lpenv(slider(0.5, 0.5, 6))

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
  .lpenv(sine.range(1.2, 5).slow(16))
  .gain(0.4)

let bassline2 = full_notes.s("supersaw")
  .struct("[x x x x]")
  .lpf(slider(372.8, 200, 2000))
  .lpenv(slider(3.811, 0.5, 6))
  .gain(0.4)

$: bassline
$: bassline2
$: kick
