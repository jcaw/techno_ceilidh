// The Borrowdale Exchange
let part = 1

// UNCOMMENT PART 2 THEN CLICK "update" TO SWITCH TO PART 2
// part = 2

// TODO: Make more acid house


/////////////////////////////////////////////////////
// CODE BELOW - DO NOT TOUCH

setCpm(54/4)


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

let full_notes
if (part == 1) {
  // The Lilting Banshee
  full_notes = cat(
    "a1 g1 e1 g1",
    "a1 g1 e1 [g1 a1]",
    "a1 g1 e1 g1",
    "a1 g1 e1 [g1 a1]",
  ).note()
} else {
  // The Kesh
  full_notes = cat(
    "g1 d1 c1 d1",
    "g1 d1 [c1 g1] [d1 g1]",
    "g1 d1 c1 d1",
    "g1 d1 [c1 g1] [d1 g1]",
    "g1 g1 g1 d1",
    "g1 g1 [c1 a1] [d1 g1]",
    "g1 g1 g1 d1",
    "g1 g1 [c1 a1] [d1 g1]",
  ).note()
}

// TODO: More like a laser sound?
let bassline = full_notes.s("supersaw").decay(0.3)
  .struct("[~ x x ~ x x]*4").slow(1)
  .clip(3)
  .lpf(slider(347.6, 200, 2000))
  .lpenv(slider(1.9056, 1.2, 6))
  .gain(0.4)

$: bassline
$: kick
$: heartbeat
