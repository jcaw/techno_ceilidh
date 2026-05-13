// No Limit
// Plain melody guide from 2026_summer/Bonus - No Limit.jpg.

setCpm(144/4)

let melody = cat(
  // Bars 1-4: top "Tune" line.
  "e5 e5 [e5 d5] [e5 g5]",
  "e5 e5 [e5 d5] [e5 g5]",
  "e5 e5 [e5 d5] [e5 g5]",
  "a4 a4 [c5 a4] [c5 d5]",

  // Bars 5-8: lower part line.
  "[e4 ~] [e4 ~] [~ g4] [~ g4]",
  "[e4 ~] [e4 ~] [~ g4] [~ g4]",
  "[e4 ~] [e4 ~] [~ g4] [~ g4]",
  "a4 a4 b4 b4",

  // Bars 9-12: middle phrase.
  "[~ e5] [e5 e5] [d5 e5] [e5 d5]",
  "[e5 d5] e5 [g5 g5] b4",
  "[d5 d5] b4 [d5 d5] b4",
  "[d5 d5] b4 [e4 e4] [g4 g4]",

  // Bars 13-16: upper part line.
  "[e5 ~] [e5 ~] [~ g5] [~ g5]",
  "[e5 ~] [e5 ~] [~ g5] [~ g5]",
  "[e5 ~] [e5 ~] [~ g5] [~ g5]",
  "a5 a5 b5 b5",
).note()

let guide = melody.s("sawtooth")
  .decay(0.18)
  .sustain(0.2)
  .release(0.04)
  .lpf(1800)
  .gain(0.62)

let click = s("bd ~ hh ~").bank("RolandTR909")
  .lpf(1800)
  .decay(0.12)
  .gain(0.18)

$: stack(click, guide)
