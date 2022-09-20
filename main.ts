basic.showIcon(IconNames.Tortoise)
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(50, 15)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(15, 50)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(40, 40)
    } else {
        cuteBot.motors(0, 0)
    }
})
