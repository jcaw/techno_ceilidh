//
//   ▄▄▄▄▄▄                           
//  █▀██▀▀▀█▄                         
//    ██▄▄▄█▀                         
//    ██▀▀█▄   ▄███▄ ▀▀▀██ ▄██▀█ ▄▀▀█▄
//  ▄ ██  ██   ██ ██   ▄█▀ ▀███▄ ▄█▀██
//  ▀██▀  ▀██▀▄▀███▀▄▄██▄▄█▄▄██▀▄▀█▄██
//
//
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⢔⣒⠂⣀⣀⣤⣄⣀⠀⠀
// ⠀⠀⠀⠀⠀⠀⣴⣿⠋⢠⣟⡼⣷⠼⣆⣼⢇⣿⣄⠱⣄
// ⠀⠀⠀⠀⠀⠀⠹⣿⡀⣆⠙⠢⠐⠉⠉⣴⣾⣽⢟⡰⠃
// ⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣦⠀⠤⢴⣿⠿⢋⣴⡏⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⢸⡙⠻⣿⣶⣦⣭⣉⠁⣿⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠀⠈⠉⠉⠉⠉⠇⡟⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢀⠀⠀⣘⣦⣀⠀⠀⣀⡴⠊⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠈⠙⠛⠛⢻⣿⣿⣿⣿⠻⣧⡀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠫⣿⠉⠻⣇⠘⠓⠂⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀
// ⢶⣾⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠹⣿⣿⣿⣿⣿⣿⣿⣧⠀⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠈⠙⠻⢿⣿⣿⠿⠛⣄⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡁⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿
//

let part = 1
// part = 2


// 129 BPM, with one Strudel cycle as one 3/4 waltz bar.
setCpm(129/3)


let up     = n("[0 1 2]")
let down   = n("[2 1 0]")
let mixed  = n("[0 0 0]")

let G_ = mixed.chord("G").voicing().transpose(-12)
let C_ = mixed.chord("C").voicing()
let D_ = mixed.chord("D").voicing()
let Am = mixed.chord("Am").voicing()
let Em = mixed.chord("Em").voicing()
let Bm = mixed.chord("Bm").voicing()
let D7 = mixed.chord("D7").voicing()
let Dm = up.chord("Dm").voicing()
let Gm = mixed.chord("Gm").voicing()
let A_ = down.chord("A").voicing()
let F_ = up.chord("F").voicing()
let C_down = down.chord("C").voicing()
let Bb = mixed.chord("Bb").voicing()

let chords
let roots
if (part == 1) {
  // The Saturday Night Waltz
  chords = cat(
    G_, C_, D_, G_,
    G_, C_, D_, G_,
    D_, G_, D_, G_,
    D_, G_, D_, G_,
  ).transpose(-12)

  roots = cat(
    "g1", "c1", "d1", "g1",
    "g1", "c1", "d1", "g1",
    "d1", "g1", "d1", "g1",
    "d1", "g1", "d1", "g1",
  ).note()
} else {
  // Dark Island
  chords = cat(
    // 3/4, one Strudel cycle per bar. Sheet is 32 bars: A A' B A'.
    Am, Em, C_, G_, G_, Bm, Em, D_,
    Am, Em, C_, G_, G_, D7, C_, G_,
    G_, G_, C_, G_, G_, Bm, Em, D7,
    Am, Em, C_, G_, G_, D7, C_, G_,
  ).transpose(-12)

  roots = cat(
    "a1", "e1", "c1", "g1", "g1", "b0", "e1", "d1",
    "a1", "e1", "c1", "g1", "g1", "d1", "c1", "g1",
    "g1", "g1", "c1", "g1", "g1", "b0", "e1", "d1",
    "a1", "e1", "c1", "g1", "g1", "d1", "c1", "g1",
  ).note()
}

// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⣾⣿⣶⣶⣤⣤⣤⣶⣤⡄⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣷⣦⡘⠛⠛⢿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⡿⠟⢋⣁⣤⣤⣀⠈⠻⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀
// ⠀⠀⠀⣴⣿⣿⣿⣿⠟⠉⠀⣾⣿⣿⠿⢿⣿⣷⣄⠙⢿⣿⣿⣿⣿⣿⠀⠀⠀⠀
// ⠀⠀⢰⣿⣿⣿⣿⠏⢀⣤⣦⣀⣤⣶⣤⣠⡀⠈⠻⠇⢸⣯⡙⠛⠛⣫⣤⣄⠀⠀
// ⠀⠀⢼⣿⣿⣿⣿⢠⣿⠟⣿⣿⣿⣿⡿⣿⣿⣆⣤⣤⠘⣿⣿⣦⣾⣿⣿⣿⣧⠀
// ⠀⠀⠈⢿⣿⣿⡇⣿⡏⠀⢿⣿⣿⣿⡆⠀⣿⡿⢹⣿⣧⠹⠋⠀⣿⣿⣿⣿⣿⣧
// ⠀⢠⣿⣦⠻⣿⡇⣿⣿⡄⠈⠻⣿⣛⣡⣴⠟⢁⣾⣿⡟⣠⣶⣄⢸⣿⣿⣿⣿⡏
// ⢀⣾⣿⣿⠀⠈⠁⠘⣿⣿⣷⣤⡌⣛⣭⣥⣶⣿⡿⢋⣼⣿⣿⣿⣼⣿⣿⣿⠟⠀
// ⢾⣿⣿⣿⠀⣿⣿⣆⠈⣻⡿⠟⠋⠀⠉⠛⠉⢁⣴⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀
// ⠈⢻⣿⣿⡄⣿⣿⣿⣧⡘⢿⣷⣶⣤⣤⣴⣶⣿⣿⣿⠿⠟⠋⠽⠿⣟⣵⡆⠀⠀
// ⠀⠀⠙⢿⡷⢻⣿⣿⣿⣿⣶⣦⣭⣭⣙⣛⣛⠉⠉⠀⠀⣀⣤⣴⣾⣿⡿⠁⠀⠀
// ⠀⠀⠀⠀⠀⠈⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⣴⣿⣿⣿⣿⠟⠋⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⢿⣿⣿⡿⠿⠟⠋⠁⠀⠉⠛⠟⠋⠀⠀⠀⠀⠀⠀⠀


let kick = s("bd ~ ~").bank("RolandTR808")
  .lpf(125)
  .lpenv(0.9)
  .decay(0.72)
  .clip(0.72)
  .distort(slider(0.04, 0, 0.3))
  .room(0.16)
  .gain(0.82)

let ghost_kick = s("~ ~ bd").bank("RolandTR808")
  .lpf(105)
  .lpenv(0.7)
  .decay(0.32)
  .clip(0.55)
  .distort(0.04)
  .late(1/24)
  .gain(0.18)

let rim = s("~ sd [~ sd]").bank("RolandTR808")
  .lpf(1700)
  .hpf(600)
  .decay(0.14)
  .room(0.9)
  .delay(0.35)
  .gain(0.32)

let hats = s("~ hh ~").bank("RolandTR808")
  .hpf(slider(4200, 2500, 6500))
  .lpf(slider(6400, 4800, 9000))
  .decay(0.045)
  .gain(0.09)
  .room(0.28)

// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡾⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠺⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠴⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠇
// ⠀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣶⣤⠀⠀⠀⠀⠀⠀⣀⡤⠖⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⠀
// ⠀⢠⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣷⣦⣀⣸⣿⣿⣿⠀⠀⠀⢀⡴⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠁⠀
// ⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⣀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⢠⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣇⠀⠀
// ⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠳⣄⠀⠀⠀⠀⠀⠈⠛⢿⣿⣿⡿⠋⠀⠀⣰⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⠀⠀⠀⠘⡇⠀⠀
// ⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄⠀⠀⠀⠀⠀⠀⠿⠋⠀⠀⢠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠇⠀⠀⠀⠀⠀⠀⢠⡇⠀⠀
// ⠀⠀⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣄⠈⠑⢦⡀⠀⠀⠀⠀⠀⢀⡴⠃⠀⠀⠀⠀⠀⠀⠀⢀⣤⡤⣄⠀⢠⡟⠀⠀⠀⠀⠀⠀⢀⡼⠀⠀⠀
// ⠀⠀⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡄⠀⠙⡄⠀⠀⠘⠓⢤⣀⠀⣠⠞⠀⠀⠀⣰⠀⠀⠈⠙⣶⠏⢿⣠⣾⣴⠋⠀⢀⠀⠀⠀⠀⢀⡼⠁⠀⠀⠀
// ⠀⠀⠸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⠀⠀⠈⠋⠀⠀⡿⠒⢤⡀⠀⠀⠈⠙⢣⡄⠀⣠⣾⡗⠦⢤⣄⡾⠃⠀⣸⣿⣨⡿⣄⣀⡏⠁⠀⠀⠀⡼⠁⠀⠀⠀⠀
// ⠀⠀⠀⢻⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠿⡿⠀⠀⠀⣦⠀⢷⡀⠀⠈⢳⣦⡀⠀⠀⢳⠞⠁⣰⠳⠊⠉⠉⠱⣄⣴⠋⠀⣼⣧⣶⣤⣇⠀⠀⠀⢰⡇⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⣇⠀⢶⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⢸⠇⠀⠀⢸⠈⢳⠀⠀⢸⠀⠀⢿⣤⣀⢀⣀⣠⠞⠃⠀⣸⡟⠘⢧⡏⢹⠁⠀⠀⢸⡄⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠸⡄⠈⠓⢦⡀⠀⠀⠀⠀⠀⠀⠀⢺⡆⠀⠀⣷⡏⠀⠀⠀⣿⡆⠈⣷⢶⠛⡇⠀⠀⠉⢹⡉⠉⠀⠀⠲⣴⡏⠀⠀⡜⠀⡟⠀⠈⠙⡿⠁⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⢱⡀⠀⠀⠙⣷⢦⣀⠀⠀⠀⠀⠈⢷⠀⠀⢸⡀⠀⠀⠀⢿⣠⡴⠛⠾⣧⠏⠀⠀⠀⠀⠳⢤⡤⠤⠚⠁⠀⠰⣼⠃⢠⡇⠀⠀⣸⠃⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢻⡖⠋⠀⠘⣦⢿⠳⣄⠀⠀⠀⠈⢧⣀⣼⠁⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⢤⣀⣀⣠⡴⠋⠀⢸⠀⠀⣰⡇⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠹⡤⣄⡀⠘⡄⠑⢬⣳⢤⣀⠀⢈⡏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⢿⡇⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠻⣌⡇⣼⠃⠀⠀⠉⠓⠫⠤⠾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠓⠚⠃⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀


let skank_bite = slider(0.41, 0, 1)
let skank_blend = slider(0.18, 0, 1)
let skank_gain = slider(0.28, 0, 1)
let make_skank = voice => set(chords, voice)
  .struct("~ x x")
  .decay(skank_bite.mul(-0.1).add(0.15))
  .sustain(0.0)
  .lpf(sine.range(0.54, 1.46).slow(16).mul(skank_bite.mul(900).add(300)))
  // Radio
  .hpf(slider(0, 0, 1000))
  .lpq(3)
  .clip(0.65)
  .distort(0.28)
  .delay(0.45)
  .room(0.75)
  // FIXME: This was needed for sawtooth but square takes something different.
  // .gain(skank_gain.add(skank_blend))
  .gain(skank_gain)

let skank = xfade(
  make_skank(s("sine")),
  skank_blend,
  make_skank(s("square")),
)

// ,d88b.d88b,     ,d88b.d88b,     ,d88b.d88b,     ,d88b.d88b,     ,d88b.d88b,
// 88888888888     88888888888     88888888888     88888888888     88888888888
// `Y8888888Y'     `Y8888888Y'     `Y8888888Y'     `Y8888888Y'     `Y8888888Y'
//   `Y888Y'         `Y888Y'         `Y888Y'         `Y888Y'         `Y888Y'
//     `Y'             `Y'             `Y'             `Y'             `Y'


let sub = cat("g1").note().s("sine")
  .struct("x ~ [~ x]")
  .decay(0.85)
  .sustain(0.28)
  .lpf(slider(115, 65, 260))
  .lpenv(sine.range(0.6, 1.8).slow(12))
  .clip(slider(0.58, 0.3, 1.1))
  .distort(slider(0.12, 0, 0.45))
  .room(0.18)
  .gain(0.82)

let pressure = roots.s("triangle")
  .struct("~ ~ [~ x]")
  .decay(0.34)
  .sustain(0)
  .lpf(sine.range(180, 760).slow(8))
  .lpq(4)
  .lpenv(3.8)
  .clip(0.85)
  .distort(0.22)
  .delay(0.48)
  .room(0.82)
  .late(1/12)
  .gain(0.26)

let tape_hiss = s("~ ~ hh").bank("RolandTR808")
  .hpf(5200)
  .lpf(6900)
  .decay(0.025)
  .gain(0.045)
  .room(0.55)

  // TODO: We need to make this sound nicer and tie it in with the base notes
let drop_echo = set(chords, s("square")
  .struct("~ ~ x")
  .decay(0.12)
  .sustain(0)
  .lpf(sine.range(520, 1450).slow(10))
  .lpq(5)
  .delay(0.72)
  .room(0.95)
  .gain(0.16)
)

let count_in = s("[hh]*3").bank("RolandTR808")
  .hpf(2500)
  .lpf(7000)
  .decay(0.08)
  .room(0.2)
  .gain(0.38)


/*

    o     o
   /|\   /|\
   / \   / \
      <3

*/

$: arrange(
  [4,          stack(sub, skank, drop_echo)],
  [3,          stack(kick, sub, skank, rim, drop_echo)],
  [1,          stack(kick, sub, skank, rim, count_in)],
  [4294967296, stack(kick, ghost_kick, 
                    //  rim, hats, tape_hiss, 
                     sub, pressure, skank, 
                    //  drop_echo
                    )],
)
