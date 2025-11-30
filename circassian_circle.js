// Circassian Circle
let part = 1

// UNCOMMENT PART 2 THEN CLICK "update" TO SWITCH TO PART 2
// part = 2


/////////////////////////////////////////////////////
// CODE BELOW - DO NOT TOUCH

setCpm(54/4)


// TODO: Fill out the bass with a second layer - arpeggios


// TODO: Nicer kick sound. Thicker, more techno
let kick = s("[bd ~ bd ~]*4").bank("RolandTR909")
  .lpf(100)
  .lpenv(1.2)
  .room(0.1)
  .clip(1)

let full_notes
if (part == 1) {
  // The Silver Spear
  full_notes = cat(
    "d1 [d1 g1] d1 [d2 g1]",
    "g1 [d2 d1] [e1 g1] g2",
    "g1 g1 d1 [d2 g1]",
    "d1 [d2 g1] [e1 d1] d2",
    "d2 g1 d2 e1",
    "d2 g1 [e1 d1] d1",
    "d2 g1 d2 e1",
    "d2 g1 [e1 d1] d1",
  ).note()
} else {
  // The Knotted Chord
  full_notes = cat(
    "a1 a1 g1 g1",
    "a1 a1 g1 e1",
    "a1 a1 g1 g1",
    "a1 a1 g1 a1",
    "a1 a1 g1 [g1 e1]",
    "a1 a1 g1 g1",
    "a1 a1 g1 [g1 e1]",
    "a1 a1 g1 [e1 a1]",
  ).note()
}

// TODO: More like a laser sound?
let bassline = full_notes.s("supersaw").decay(0.3)
  .struct("[~ ~ ~ x ~ ~ x ~]*4").slow(1)
  //.clip(sine.range(0.8, 1.0).slow(8))
  .clip(2)
  .lpf(slider(335, 200, 2000))
  .lpenv(slider(2.0832, 1.2, 6))
  .gain(0.9)

$: bassline
$: kick
