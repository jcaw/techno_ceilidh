// Clopton Bridge
let part = 1

// UNCOMMENT PART 2 THEN CLICK "update" TO SWITCH TO PART 2
// part = 2


/////////////////////////////////////////////////////
// CODE BELOW - DO NOT TOUCH

setCpm(80/4)


// TODO: Nicer kick sound. Thicker, more techno
let kick = s("[bd ~ bd ~ bd ~ bd ~]*2").bank("RolandTR909")
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
  // The Grand Hornpipe
  full_notes = cat(
    "g1 g1 g1 d1",
    "g1 g1 [g1 d1] g1",
    "g1 g1 [g1 e1] d1",
    "c1 g1 d1 g1",
  ).note()
} else {
  // Sportsman's Hornpipe
  full_notes = cat(
    "[c1 g1] g1 [c1 g1] a1",
    "[c1 g1] g1 [g1 d1] a1",
    "a1 [d1 a1] a1 [d1 a1]",
    "[a1 c1] [c1 g1] [a1 g1] a1",
  ).note()
}

// TODO: More like a laser sound?
let bassline = full_notes.s("sawtooth").decay(0.8)
  .struct("[~ x ~ x ~ x ~ x]*2").slow(1)
  .clip(2)
  .lpf(slider(100, 100, 2000))
  //.lpf(sine.segment(1).range(100, 1000).slow(8))
  .lpenv(slider(6.5, 0.5, 6))
  .gain(0.4)

$: bassline
$: kick
// $: heartbeat
