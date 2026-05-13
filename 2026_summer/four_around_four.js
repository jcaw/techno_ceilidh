// Four Around Four
let part = 1
part = 2


/////////////////////////////////////////////////////
// CODE BELOW - DO NOT TOUCH

setCpm(100/4)


// TODO: Fill out the bass with a second layer - arpeggios


// TODO: Nicer kick sound. Thicker, more techno
let kick = s("[bd ~]*4").bank("RolandTR909")
  .lpf(100)
  .lpenv(1.2)
  .room(0.1)
  .clip(1)

let full_notes
if (part == 1) {
  // Galopede
  full_notes = cat(
    "g1 g1 g1 g1",
    "d1 d1 d1 d1",
    "g1 g1 g1 g1",
    "d1 d1 d1 d1",
    "g1 g1 g1 g1",
    "d1 d1 d1 d1",
  ).note()
} else {
  // Three Around Three
  full_notes = cat(
    "g1 g1 d1 d1",
    "g1 g1 d1 d1",
    "g1 g1 d1 d1",
    "g1 g1 d1 d1",
  ).note()
}

// TODO: More like a laser sound?
let bassline = full_notes.s("supersaw").decay(0.3)
  .struct("[~ ~ ~ x ~ ~ x ~]*2").slow(1)
  //.clip(sine.range(0.8, 1.0).slow(8))
  .clip(2)
  .lpf(slider(335, 200, 2000))
  .lpenv(slider(2.0832, 1.2, 6))
  .gain(0.8)
  // .distort(0.3)

let count_in = s("[hh]*4").bank("RolandTR909").lpf(1800).lpenv(0.5).decay(3).room(0.01).gain(0.3)

offset = 6 - 1/2
$: arrange(
  [offset,     stack(kick, bassline)],
  [1/2,        stack(kick, bassline.late(offset), count_in.slow(1/2))],
  [4294967296, stack(kick, bassline)],
)
