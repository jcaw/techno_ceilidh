// Four Around Four
let part = 1
// part = 2


/////////////////////////////////////////////////////
// CODE BELOW - DO NOT TOUCH

setCpm(100/4)


// TODO: Fill out the bass with a second layer - arpeggios


let kick = s("[bd ~]*4").bank("RolandTR909")
  .lpf(260)
  .lpenv(2.4)
  .decay(0.68)
  .room(0.12)
  .clip(1.16)
  .distort(0.15)
  .gain(0.92)

// FIXME: Snare sounds shit
// let reverse_snare = s("[~ sd]*4").bank("RolandTR909")
//   .rev()
//   .decay(0.42)
//   .room(0.38)
//   .gain(0.24)

// TODO: More hiss
let hihat = s("hh").bank("RolandTR909")
  .struct("[~ ~ x x ~ ~ x ~]*2")
  .decay(0.08)
  .hpf(5200)
  .gain(0.24)

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

let bass_sub = full_notes.s("sine").decay(0.55)
  .struct("[~ x]*4").slow(1)
  .sustain(0)
  .clip(1.35)
  .distort(0.08)
  .lpf(120)
  .gain(0.58)

// TODO: This effect is interesting, let's duplicate it with a slider to fade it in when useful, but it's not the right sound. I want a more typical techno sound, something from outside this repo.
let bass_mid = full_notes.s("square").decay(0.22)
  .struct("[~ ~ ~ x ~ ~ x ~]*2").slow(1)
  .sustain(0)
  .clip(1.2)
  .distort(0.18)
  .lpf(slider(360, 120, 1800))
  .lpq(6)
  .lpenv(slider(2.6, 0.8, 5))
  .gain(0.38)

// let bass_mid = full_notes.s("square").decay(0.22)
//   .struct("[x x x x x x]*2").slow(1)
//   .sustain(0)
//   .clip(1.2)
//   .distort(0.18)
//   .lpf(slider(360, 120, 1800))
//   .lpq(6)
//   .lpenv(slider(2.6, 0.8, 5))
//   .gain(0.38)

let bassline = stack(bass_sub, bass_mid)

let count_in = s("[hh]*4").bank("RolandTR909").lpf(1800).lpenv(0.5).decay(3).room(0.01).gain(0.3)

offset = 6 - 1/2
$: arrange(
  [offset,     stack(kick, hihat, bassline)],
  [1/2,        stack(kick, hihat, bassline.late(offset), count_in.slow(1/2))],
  [4294967296, stack(kick, hihat, bassline)],
)
