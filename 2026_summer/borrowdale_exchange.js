// The Borrowdale Exchange
let part = 1

// UNCOMMENT PART 2 THEN CLICK "update" TO SWITCH TO PART 2
// part = 2

// Acid-house backing: 909 pulse, squelchy filter movement, melody-derived bass.


/////////////////////////////////////////////////////
//        _________
//  _____/|_||_\`.__
// |  _     AMB   _`-.
// '-(_)--------(_)--'
/////////////////////////////////////////////////////

setCpm(54/4)


let kick = s("[bd ~ ~ bd ~ ~]*4").bank("RolandTR909")
  .lpf(260)
  .lpenv(2.7)
  .decay(0.72)
  .room(0.12)
  .clip(1.18)
  .distort(0.16)
  .gain(0.95)

let heartbeat = note("c5 ~ ~ c5 ~ ~").sound("square")
  .room(0.3)
  .gain(0.2)
  .slow(1/2)
  .clip(1/2)
  .lpf(2000)
  .lpenv(slider(0.5, 0.5, 6))

let full_notes
if (part == 1) {
  // The Seven Stars
  full_notes = cat(
    "d1 [g1 d1] [g1 e1 a1] d1",
    "[g1 d1] [g1 a1] d1 d1",
    "[a1 d1] [a1 d1] [e1 a1] [g1 d1]",
    "[g1 d1] [g1 d1] [g1 a1] d1",
  ).note()
} else {
  // Dribbles of Brandy
  full_notes = cat(
    "e1 [g1 d1] b1 e1",
    "g1 [d1 c1] e1 e1",
    "e1 d1 [e1 b1] e1",
    "d1 e1 [c1 e1] e1",
  ).note()
}

let bassline = full_notes.s("square").decay(0.18)
  .struct("[~ x x ~ x x]*4").slow(1)
  .sustain(0)
  .clip(1.4)
  .distort(0.22)
  .lpf(slider(420, 180, 2400))
  .lpq(8)
  .lpenv(slider(4.8, 1.2, 7))
  .delay(0.12)
  .gain(0.36)

let acid = full_notes.s("sawtooth").decay(0.09)
  .struct("[~ x ~ x ~ x ~ x]*4").slow(1)
  .sustain(0)
  .clip(0.8)
  .distort(0.28)
  .lpf(sine.range(260, 2200).slow(8))
  .lpq(12)
  .lpenv(5.4)
  .delay(0.18)
  .gain(0.16)


let count_in = s("[hh]*4").bank("RolandTR909").lpf(1800).lpenv(0.5).decay(3).room(0.01).gain(0.3)

offset = 2 - 1/2
$: arrange(
  [1,          stack(heartbeat)],
  [1,          stack(heartbeat, kick)],
  [offset,     stack(kick, bassline, acid, heartbeat)],
  [1/2,        stack(kick, bassline.late(1 + 1/2), acid.late(1 + 1/2), heartbeat, count_in.slow(1/2))],
  [4294967296, stack(kick, bassline, acid, heartbeat.lpf(sine.range(200, 2000).slow(8)))],
)
