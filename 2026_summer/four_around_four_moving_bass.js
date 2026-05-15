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
    "g1 e1 a1 d1",
    "g1 e1 a1 g1",
    "g1 g1 g1 d1",
    "g1 g1 c1 g1",
    "g1 g1 g1 d1",
    "g1 g1 g1 g1",
  ).note().slow(2)
} else {
  // Three Around Three
  full_notes = cat(
    "g1 g1 d1 d1",
    "g1 g1 d1 d1",
    "g1 g1 d1 d1",
    "g1 g1 d1 d1",
  ).note().slow(2)
}

// TODO: Add a slider to this which adds kinda intense wobble distortion
let bass_sub = full_notes.s("sine").decay(0.55)
  .struct("[~ x]*4").slow(1)
  .sustain(0)
  .clip(1.35)
  .distort(0.08)
  .lpf(120)
  .gain(0.58)._scope()

let bass_mid = full_notes.s("sawtooth").decay(0.18)
  .struct("[~ ~ ~ x ~ ~ x ~]*2").slow(1)
  .sustain(0)
  .clip(1.35)
  .distort(slider(0.34, 0.05, 0.7))
  .hpf(70)
  .lpf(slider(560, 220, 1200))
  .lpq(1.1)
  .gain(0.44)._scope()

let wub_wub = full_notes.s("square").decay(0.22)
  .struct("[x x x x x x]*2").slow(1)
  .sustain(0)
  .clip(1.2)
  .distort(0.18)
  .lpf(slider(120, 120, 1800))
  .lpq(6)
  .lpenv(slider(2.6, 0.8, 5))
  .duck("3:4").duckdepth(0.8)
  .gain(0.38)._scope()

let whistle = note("[~ g6] [~ g6] [~ a6] [g6 c7]")
  .s("sine")
  .decay(0.08)
  .sustain(0)
  .vibmod("0.35:12")
  .hpf(2200)
  .lpf(5600)
  .room(0.22)
  .gain(0.18)._scope()

let whistle_loudness = slider(0, 0, 0.18)
let wubness          = slider(0, 0, 1)
let bassline = stack(bass_sub, xfade(bass_mid, wubness, wub_wub))

let chops = note("d3 g3 g3 g3").s("sawtooth").vowel("a o i o").vibmod("0.1:2")
  .fm(1)
  .fmattack(".1")
  .lpf(slider(816, 0, 2000))
  .room(0.1)
  .transpose([0, -12, 12, 24])
  .clip(0.5).gain(2)

offset = 6 - 1
$: arrange(
  // 6 total for intro
  [1,   stack(whistle.gain(0.5))],
  [1,   stack()],
  [2,   stack(kick, bassline.note("g1"))],
  [2,   stack(kick, bassline.note("d1"))],
  [1,   stack(kick, bassline.note("g1"))],
  [1,   stack(kick, bassline.late(offset), chops.slow(1/2))],
  [32,  stack(kick, hihat, bassline, whistle.gain(whistle_loudness))],
  // TODO: Replace all these following bars with manual control for the actual performance?
  [8,   stack(kick, hihat, bassline, whistle.gain(0.18))],
  [4,   stack(kick, hihat, stack(bass_sub, xfade(bass_mid, 0.4, wub_wub)))],
  [4,   stack(kick, hihat, stack(bass_sub, xfade(bass_mid, 0.4, wub_wub)), whistle.gain(0.18))],
  [8,   stack(kick, hihat, bassline, whistle.gain(0.18))],
  [8,   stack(kick, hihat, bassline, whistle.gain(whistle_loudness))],
)
