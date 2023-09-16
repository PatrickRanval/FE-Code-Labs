class Time {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    addTimes(time2) {
        let sumSeconds = this.seconds + time2.seconds;
        let sumMinutes = this.minutes + time2.minutes;
        let sumHours = this.hours + time2.hours;

        if (sumSeconds >= 60) {
            sumMinutes += Math.floor(sumSeconds / 60);
            sumSeconds %= 60;
        }

        if (sumMinutes >= 60) {
            sumHours += Math.floor(sumMinutes / 60);
            sumMinutes %= 60;
        }

        return new Time(sumHours, sumMinutes, sumSeconds);
    }

    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }
}

function sumVideos(myArr) {
    let sumTotalTime = new Time(0, 0, 0);

    sumTotalTime = myArr.reduce((totalTime, element) => {
        let arrTemp = element.split(':');
        let [vidHours, vidMins, vidSecs] = arrTemp.map(Number);

        let sumNewTime = new Time(vidHours, vidMins, vidSecs);

        return totalTime.addTimes(sumNewTime);
    }, new Time(0, 0, 0));

    sumTotalTime.printTime();
}

const videoLengths = ['0:16:29', '0:14:59', '0:14:24', '0:3:53', '0:19:44', '0:16:44'];

sumVideos(videoLengths);