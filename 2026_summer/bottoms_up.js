// Chloe's Passion / Farewell to Whalley Range
let part = 1

// UNCOMMENT PART 2 THEN CLICK "update" TO SWITCH TO PART 2
part = 2


/////////////////////////////////////////////////////
// CODE BELOW - DO NOT TOUCH

setCpm(72/8)

let kick = s("[bd ~ ~]*3*4").bank("RolandTR909")
  .lpf(sine.range(190, 980).slow(6))
  .lpenv(2.6)
  .decay(0.72)
  .room(0.12)
  .clip(1.14)
  .distort(0.16)
  .gain(0.92)
  ._scope()
let hat = s("[~ hh hh]*3*4").bank("RolandTR909")
   .gain(slider(0, 0, 1))
   .decay(0.72)
   .hpf(6000)
   .lpf(5000)
   .lpenv(1000)
   .clip(0.5)
   // .room(0.005)
   ._scope()
let up     = n("[0 1 2]*3")
let down   = n("[2 1 0]*3")
let mixed  = n("[2 0 1]*3")
let mixed2 = n("[0 2 1]*3")

let full_notes
if (part == 1) {
  let G_ = up.chord("G").voicing()
  let Am = down.chord("Am").voicing()
  let D7 = up.chord("D7").voicing() // was D7
  let D7_down = down.chord("D7").voicing() // was D7
  let A7 = up.chord("A7").voicing() // was A7
  let Em = down.chord("Em").voicing()

  // FIXME: Now needs better sequencing because of the up/down parts being essentially inverted.
  full_notes = cat(
    [G_, D7, G_, D7],
    [G_, D7, D7_down, G_],
    [D7, D7_down, A7, D7_down],
    [D7, D7_down, D7, D7_down],
    [G_, G_, Am, D7],
    [G_, Em, A7, D7],
  ).transpose(-24)
} else {
  let D  = up.chord("D").voicing()
  let G  = mixed.chord("G").voicing()
  let A  = up.chord("A").voicing()
  let Bm = up.chord("Bm").voicing()
  let Em = up.chord("Em").voicing()

  full_notes = cat(
    [D, G, D, [D, G]],
    [D, G, D, [A, Bm, G]],
    [D, [G, A], D, [A, Bm, G]],
    [D, [G, D], [G, D], [Em, G]],
    [D, D, D, [Em, G]],
    [D, D, [G, D], [Em, G]],
    [D, D, D, [Em, G]],
    [D, [A, D], [G, D], [Em, G]],
  ).transpose(-24)
}

let bass_laser = s("supersaw").decay(0.2)
  .struct("[x x x]*3*4").slow(1)
  //.clip(sine.range(0.8, 1.0).slow(8))
  .sustain(0)
  .clip(0.9)
  .distort(0.18)
  .lpf(sine.range(200, 1200).slow(3))
  .lpq(6)
  .lpenv(sine.range(1.2, 6).slow(4))
  .delay(0.12)
  .gain(0.6)

let bassline = set(full_notes, bass_laser)._scope()
let chops = note("d3 g3 g3").s("sawtooth").vowel("a i o").vibmod("0.1:2")
  .fm(1)
  .fmattack(".1")
  .lpf(slider(816, 0, 2000))
  .room(0.1)
  .transpose([0, -12])
  .clip(0.5).gain(2)

let count_length = 1/2
let kick_offset  = 1 - count_length
$: arrange(
  // Just arpeggios first
  [1,           bassline],
  // Bring in the kick
  [kick_offset, stack(kick, bassline.late(1))],
  // Count in
  [count_length,stack(kick, bassline.late(kick_offset), chops.slow(1/4))],
  // And go
  [4294967296,  stack(kick, bassline, hat)],
)
