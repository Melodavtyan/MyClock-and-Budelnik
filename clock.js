class Clock {
    constructor(hour, min, sec) {
        this.hour = hour
        this.min = min
        this.sec = sec

    }
    start() {
        setInterval(() => {
            this.sec += 1
            if (this.sec === 60) {
                this.min += 1
                this.sec = 0

                if (this.min === 60) {
                    this.hour += 1
                    this.min = 0

                    if (this.hour === 24) {
                        this.hour = 0


                    }
                }
            }

            console.log(this.toString());

        }, 1000)
    }
    toString() {
        return `${this.hour}:${this.min}:${this.sec}`
    }
    // budelniki messagei anun@/haur/minute/secunds
    setAlert(name, h, min, sec) {
        return new Promise( (res, rej)=> {
            setInterval(() => {
                if (h === this.hour && min === this.min && sec === this.sec) {

                    res(alert(name))
                }


            }, 1000);
            if (h < this.hour || min < this.min || sec < this.sec) {

                rej(console.log(new Error(name + "-" + "Այս անունով բուդելնիկի Ժամն արդեն անցել է")))

            }

        })

    }

}
let clock = new Clock(11, 11, 8)
clock.start()
clock.setAlert("Զարթնի բուդելնիկը խփեց", 11, 11, 12)
clock.setAlert("սխալ բուդելնիկ", 11, 11, 5)