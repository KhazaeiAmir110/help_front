function generateTimeSlots(startTime, endTime, duration) {
    // تبدیل ورودی‌ها به شیء Date
    let start = new Date(`1970-01-01T${startTime}:00`);
    let end = new Date(`1970-01-01T${endTime}:00`);
    let result = [];

    // مدت زمان را به میلی‌ثانیه تبدیل می‌کنیم
    let durationInMs = duration * 60 * 1000;

    // حلقه برای تولید لیست زمان‌ها
    while (start <= end) {
        let hours = start.getHours().toString().padStart(2, '0');
        let minutes = start.getMinutes().toString().padStart(2, '0');
        let s = start.getMinutes().toString().padStart(2, '0');
        result.push(`${hours}:${minutes}:${s}`);

        // اضافه کردن مدت زمان به زمان شروع
        start = new Date(start.getTime() + durationInMs);
    }

    return result;
}

// مثال استفاده
let startTime = "10:00";
let endTime = "18:00";
let duration = 30; // مدت زمان به دقیقه

let timeSlots = generateTimeSlots(startTime, endTime, duration);
console.log(timeSlots);


// ------------------------------------------------------------------

function getTime(startTime, endTime, duration) {
    let start = new Date(`1970-01-01T${startTime}`);
    let end = new Date(`1970-01-01T${endTime}`);
    let result = [];

    let durationInMs = duration * 1000 * 60;

    while (start <= end) {
        let hours = start.getHours().toString().padStart(2, '0');
        let minutes = start.getMinutes().toString().padStart(2, '0');
        let seconds = start.getSeconds().toString().padStart(2, '0');
        result.push(`${hours}:${minutes}:${seconds}`);

        start = new Date(start.getTime() + durationInMs);
    }

    return result;
}

let starttime = "10:00:00";
let endtime = "18:00:00";
let durationtime = 30;

let timeslots = getTime(starttime, endtime, durationtime);
console.log(timeslots);

