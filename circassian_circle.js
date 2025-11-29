// Circassian Circle
let part = 1

// UNCOMMENT PART 2 THEN CLICK "update" TO SWITCH TO PART 2
// part = 2


/////////////////////////////////////////////////////
// CODE BELOW - DO NOT TOUCH

setCpm(50/4)
// TODOs:
//   - Sweep the bass drum's lpf
//   - Maybe sweep the bassline


// TODO: Nicer kick sound. Thicker, more techno
let kick = s("[bd ~ bd ~]*4").bank("RolandTR909")
  .lpf(400)
  .lpenv(1.5)
  .room(0.1)
  .clip(1)

let full_notes
if (part == 1) {
  // The Silver Spear
  full_notes = cat(
    "g1 g1 d1 [d2 g1]",
    "d1 [d2 g1] [e1 d1] d2",
    "d2 g1 d2 e1",
    "d2 g1 [e1 d1] d1",
  ).note()
} else {
  // The Knotted Chord
  full_notes = cat(
    "A A G G",
    "A A G E",
    "A A G G",
    "E A A G",
  ).note().transpose(-24)
}

// TODO: More like a laser sound?
let bassline = full_notes.s("supersaw").decay(0.2)
  .struct("[~ ~ ~ x ~ ~ x ~]*4").slow(1)
  //.clip(sine.range(0.8, 1.0).slow(8))
  .clip(2)
  .lpf(slider(347.6, 200, 2000))
  .lpenv(slider(1.9056, 1.2, 6))
  .gain(0.4)

$: bassline
$: kick
