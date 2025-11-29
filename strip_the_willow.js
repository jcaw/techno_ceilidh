// Orcadian strip the willow
let part = 1

// UNCOMMENT PART 2 THEN CLICK "update" TO SWITCH TO PART 2
part = 2


/////////////////////////////////////////////////////
// CODE BELOW - DO NOT TOUCH

setCpm(91/8)


// TODO: Nicer kick sound. Thicker, more techno
let kick = s("[bd ~ ~]*3*4").bank("RolandTR909")
  .lpf(sine.range("200", "1200"))
  .lpenv("2")
  .room(0.1)
  .clip(1)

let up     = n("[0 1 2]*3")
let down   = n("[2 1 0]*3")
let mixed  = n("[2 0 1]*3")
let mixed2 = n("[0 2 1]*3")

let full_notes
if (part == 1) {
  // Chloe's Passion
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
  let Fsm = up.chord("F#m").voicing()
  let A   = down.chord("A").voicing()
  let Bm  = up.chord("Bm").voicing()
  let Csm = up.chord("C#m").voicing()
  let E   = up.chord("D").voicing()
  let D   = mixed2.chord("E").voicing()

  let single = [
    [Fsm, A, Bm, Csm],
    [Fsm, A, Bm, Csm],
    [D,   E, Bm, Csm],
    [D,   E, Bm, Csm],
  ]
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

// TODO: More like a laser sound?
let bassline = full_notes.s("supersaw").decay(0.2)
  .struct("[x x x]*3*4").slow(1)
  .clip(sine.range(0.8, 1.0).slow(8))
  .lpf(sine.range(200, 1200).slow(3))
  .lpenv(sine.range(1.2, 6).slow(4))
  .gain(0.3)

// TODO: Intro (move1*2 I guess - bring in kick before we start)

$: bassline
$: kick
