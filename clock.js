class Clock {
    constructor(hour, min, sec) {
        this.hour = hour
        this.min = min
        this.sec = sec

    }
    start() {
        setInterval(function () {
            clock.sec += 1
            if (clock.sec === 60) {
                clock.min += 1
                clock.sec = 0

            }
            if (clock.min === 60) {
                clock.hour += 1
                clock.min = 0

            }
            if (clock.hour === 24) {
                clock.hour = 0


            }
            console.log(clock.toString());

        }, 1000)
    }
    toString() {
        return `${this.hour}:${this.min}:${this.sec}`
    }
    // budelniki messagei anun@/haur/minute/secunds
    setAlert(name, h, min, sec) {
        return new Promise(function (res, rej) {
            setInterval(() => {
                if (h === clock.hour && min === clock.min && sec === clock.sec) {

                    res(alert(name))
                }


            }, 1000);
            if (h < clock.hour || min < clock.min || sec < clock.sec) {

                rej(console.log(new Error(name + "-" + "Այս անունով բուդելնիկի Ժամն արդեն անցել է")))

            }
        })

    }

}
let clock = new Clock(11, 11, 8)
clock.start()
clock.setAlert("Զարթնի բուդելնիկը խփեց", 11, 11, 12)
clock.setAlert("սխալ բուդելնիկ", 11, 11, 5)