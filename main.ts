let IR2 = 0
IR.IR_init()
let voor = 253
let achter = 125
let links = 31
let rechts = 17
basic.forever(function () {
	
})
basic.forever(function () {
    IR2 = IR.IR_read()
})
basic.forever(function () {
    basic.showNumber(IR2)
})
