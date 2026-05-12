// Bottoms Up
let part = 1

// UNCOMMENT PART 2 THEN CLICK "update" TO SWITCH TO PART 2
// part = 2


/////////////////////////////////////////////////////
// CODE BELOW - DO NOT TOUCH

setCpm(120/4)

let kick = s("[bd ~ bd ~ bd ~ bd ~]*4").bank("RolandTR909")
  .lpf(260)
  .lpenv(2.4)
  .decay(0.68)
  .room(0.12)
  .clip(1.16)
  .distort(0.15)
  .gain(0.92)

let full_notes
if (part == 1) {
  // The Humours of Ennistymon
  // TODO: Update to the extracted The Humours of Ennistymon chord sequence in chord_sequences.md.
  full_notes = cat(
    "g1 d1 g1 d1",
    "d1 d1 d1 g1",
  ).note()
} else {
  // The Lark in the Morning
  // TODO: Update to the extracted The Lark in the Morning chord sequence in chord_sequences.md.
  full_notes = cat(
    "d1 g1 d1 g1",
    "d1 g1 d1 a1",
  ).note()
}

let bassline = full_notes.s("square").decay(0.22)
  .struct("[~ x ~ x ~ x ~ x]*4").slow(1)
  .sustain(0)
  .clip(1.25)
  .distort(0.2)
  .lpf(slider(360, 120, 2200))
  .lpq(7)
  .lpenv(slider(4.8, 0.8, 7))
  .delay(0.14)
  .gain(0.38)


let count_in = s("[hh]*4").bank("RolandTR909").lpf(1800).lpenv(0.5).decay(3).room(0.01).gain(0.3)

offset = 2 - 1/4
$: arrange(
  [offset,     stack(kick, bassline)],
  [1/4,        stack(kick, bassline.late(offset), count_in.slow(1/4))],
  [4294967296, stack(kick, bassline)],
)
