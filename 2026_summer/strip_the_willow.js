// Bonus - Chloe's Passion / Farewell to Whalley Range
let part = 1

// UNCOMMENT PART 2 THEN CLICK "update" TO SWITCH TO PART 2
// part = 2


/////////////////////////////////////////////////////
// CODE BELOW - DO NOT TOUCH

setCpm(80/8)

let kick = s("[bd ~ ~]*3*4").bank("RolandTR909")
  .lpf(sine.range(190, 980).slow(6))
  .lpenv(2.6)
  .decay(0.72)
  .room(0.12)
  .clip(1.14)
  .distort(0.16)
  .gain(0.92)

let up     = n("[0 1 2]*3")
let down   = n("[2 1 0]*3")
let mixed  = n("[2 0 1]*3")
let mixed2 = n("[0 2 1]*3")

let full_notes
if (part == 1) {
  // Chloe's Passion
  // TODO: Update to the extracted Chloe's Passion chord sequence in chord_sequences.md.
  let Em = up.chord("Em").voicing()
  let D_ = up.chord("D").voicing()
  let G_ = up.chord("G").voicing()
  let C_ = mixed.chord("C").voicing()
  let Bm = up.chord("Bm").voicing()

  let move1 = [Em, [Em, Em, D_], Em, D_]
  let move2 = [Em, Em, Em, D_]
  let move3 = [G_,  G_,  [C_, G_, C_], D_]
  full_notes = cat(
    move1, move1,
    move2, move2,
    move3, move3,
    [Em, D_, Em, [D_, D_, Bm]],
    [Em, D_, G_, D_],
  ).transpose(-24)
} else {
  // Farewell to Whalley Range
  // TODO: Update to the extracted Farewell to Whalley Range chord sequence in chord_sequences.md.
  let Fsm = up.chord("F#m").voicing()
  let A   = down.chord("A").voicing()
  let Bm  = up.chord("Bm").voicing()
  let Csm = up.chord("C#m").voicing()
  let E   = up.chord("D").voicing()
  let D   = mixed2.chord("E").voicing()

  full_notes = cat(
    [Fsm, A, Bm, Csm],
    [Fsm, A, Bm, Csm],
    [D,   E, Bm, Csm],
    [D,   E, Bm, Csm],
    [Fsm, A, Bm, Csm],
    [Fsm, A, Bm, Csm],
    [D,   E, Bm, Csm],
    [D,   E, Bm, Csm],
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
  .gain(0.8)


let bassline = set(full_notes, bass_laser)


let count_in = s("[hh]*3").bank("RolandTR909").lpf(1800).lpenv(0.5).decay(3).room(0.01).gain(0.5)

let count_length = 1/4
let kick_offset  = 2 - count_length
$: arrange(
  // Just arpeggios first
  [2,           bassline],
  // Bring in the kick
  [kick_offset, stack(kick, bassline.late(2))],
  // Count in
  [count_length,stack(kick, bassline.late(kick_offset), count_in.slow(1/4))],
  // And go
  [4294967296,  stack(kick, bassline)],
)
