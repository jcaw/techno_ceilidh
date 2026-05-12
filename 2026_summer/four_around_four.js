// Four Around Four
let part = 1

// UNCOMMENT PART 2 THEN CLICK "update" TO SWITCH TO PART 2
// part = 2


/////////////////////////////////////////////////////
// CODE BELOW - DO NOT TOUCH

setCpm(95/4)

let kick = s("[bd ~ bd ~]*4").bank("RolandTR909")
  .lpf(240)
  .lpenv(2.4)
  .decay(0.68)
  .room(0.12)
  .clip(1.15)
  .distort(0.14)
  .gain(0.92)

let full_notes
if (part == 1) {
  // Galopede
  full_notes = cat(
    "[g1 d1] e1 a1 d1",
    "[g1 d1] e1 [a1 d1] g1",
    "[g1 c1] [g1 d1] [g1 c1] d1",
    "[g1 c1] [g1 d1] [c1 d1] g1",
    "g1 g1 [g1 c1] d1",
    "g1 g1 [g1 d1] g1",
  ).note()
} else {
  // Three Around Three
  full_notes = cat(
    "[g1 d1] [g1 c1] c1 [c1 d1]",
    "[g1 d1] [g1 c1] d1 g1",
    "g1 c1 g1 d1",
    "g1 c1 [c1 d1] g1",
  ).note()
}

let bassline = full_notes.s("square").decay(0.18)
  .struct("[~ ~ ~ x ~ ~ x ~]*4").slow(1)
  .sustain(0)
  .clip(1.15)
  .distort(0.18)
  .lpf(slider(430, 180, 2400))
  .lpq(7)
  .lpenv(slider(4.4, 1.2, 7))
  .delay(0.1)
  .gain(0.54)

let bass_arp = full_notes.s("triangle").decay(0.12)
  .struct("[x ~ x ~ ~ x ~ x]*4").slow(1)
  .sustain(0)
  .clip(0.75)
  .lpf(sine.range(520, 1600).slow(12))
  .lpq(5)
  .lpenv(3.2)
  .delay(0.16)
  .room(0.3)
  .gain(0.22)

let count_in = s("[hh]*4").bank("RolandTR909").lpf(1800).lpenv(0.5).decay(3).room(0.01).gain(0.3)

offset = 4 - 1/2
$: arrange(
  [offset,     stack(kick, bassline, bass_arp)],
  [1/2,        stack(kick, bassline.late(offset), bass_arp.late(offset), count_in.slow(1/2))],
  [4294967296, stack(kick, bassline, bass_arp)],
)
