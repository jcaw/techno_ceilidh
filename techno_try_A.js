// Orcadian strip the willow

setCpm(125/8)

const arpeggiator = [
    "{d4 bb3 eb3 d3 bb2 eb2}%32",
    "{c4 bb3 f3  c3 bb2 f2 }%32",
    "{d4 bb3 g3  d3 bb2 g2 }%32",
    "{c4 bb3 f3  c3 bb2 f2 }%32",
]

main_arp: note(pick(arpeggiator, "<0 1 2 3>".slow(2)))
    .sound("supersaw")
    .lpf(slider(300.8, 200, 2000))
    .postgain(2)
    .room(0.6)
    .lpenv(slider(1.25, 1.25, 6))
    ._punchcard({width:3200})


drums: stack(

)
