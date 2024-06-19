function generateTimeSlotsList(startDateTime, endDateTime, durationMinutes, excludeStartDateTime, excludeEndDateTime) {
    // تبدیل ورودی‌ها به شیء Date
    let start = new Date(startDateTime);
    let end = new Date(endDateTime);
    let excludeStart = new Date(excludeStartDateTime);
    let excludeEnd = new Date(excludeEndDateTime);
    let result = [];

    // مدت زمان را به میلی‌ثانیه تبدیل می‌کنیم
    let durationInMs = durationMinutes * 60 * 1000;

    // حلقه برای تولید لیست زمان‌ها
    while (start <= end) {
        // بررسی می‌کنیم که آیا زمان فعلی در بازه‌ی استثناء قرار دارد یا خیر
        if (start < excludeStart || start > excludeEnd) {
            let year = start.getFullYear();
            let month = (start.getMonth() + 1).toString().padStart(2, '0');
            let day = start.getDate().toString().padStart(2, '0');
            let hours = start.getHours().toString().padStart(2, '0');
            let minutes = start.getMinutes().toString().padStart(2, '0');
            let seconds = start.getSeconds().toString().padStart(2, '0');
            result.push(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
        }

        // اضافه کردن مدت زمان به زمان شروع
        start = new Date(start.getTime() + durationInMs);
    }

    return result;
}

// مثال استفاده
let startDateTimeList = "2024-06-19T10:00:00";
let endDateTimeList = "2024-06-19T18:00:00";
let durationMinutesList = 30; // مدت زمان به دقیقه
let excludeStartDateTimeList = "2024-06-19T12:00:00";
let excludeEndDateTimeList = "2024-06-19T13:30:00";

let timeSlotsList = generateTimeSlotsList(startDateTimeList, endDateTimeList, durationMinutesList,
    excludeStartDateTimeList, excludeEndDateTimeList);
// console.log(timeSlotsList);


// ----------------------------------------------------
// Dict
function generateTimeSlots(startDateTime, endDateTime, durationMinutes, excludeStartDateTime, excludeEndDateTime) {
    // تبدیل ورودی‌ها به شیء Date
    let start = new Date(startDateTime);
    let end = new Date(endDateTime);
    let excludeStart = new Date(excludeStartDateTime);
    let excludeEnd = new Date(excludeEndDateTime);
    let result = {};

    // مدت زمان را به میلی‌ثانیه تبدیل می‌کنیم
    let durationInMs = durationMinutes * 60 * 1000;

    // حلقه برای تولید لیست زمان‌ها
    while (start <= end) {
        // بررسی می‌کنیم که آیا زمان فعلی در بازه‌ی استثناء قرار دارد یا خیر
        if (start < excludeStart || start > excludeEnd) {
            let year = start.getFullYear();
            let month = (start.getMonth() + 1).toString().padStart(2, '0');
            let day = start.getDate().toString().padStart(2, '0');
            let hours = start.getHours().toString().padStart(2, '0');
            let minutes = start.getMinutes().toString().padStart(2, '0');
            let seconds = start.getSeconds().toString().padStart(2, '0');
            let dateKey = `${year}-${month}-${day}`;
            let timeValue = `${hours}:${minutes}:${seconds}`;

            // اضافه کردن زمان به تاریخ مربوطه در دیکشنری
            if (!result[dateKey]) {
                result[dateKey] = [];
            }
            result[dateKey].push(timeValue);
        }

        // اضافه کردن مدت زمان به زمان شروع
        start = new Date(start.getTime() + durationInMs);
    }

    return result;
}

// مثال استفاده
let startDateTime = "2024-06-19T10:00:00";
let endDateTime = "2024-07-20T18:00:00";
let durationMinutes = 60; // مدت زمان به دقیقه
let excludeStartDateTime = "2024-06-19T12:00:00";
let excludeEndDateTime = "2024-06-19T13:30:00";

let timeSlots = generateTimeSlots(startDateTime, endDateTime, durationMinutes, excludeStartDateTime, excludeEndDateTime);
console.log(timeSlots);

// دریافت زمان‌های یک روز خاص
let specificDate = "2024-06-19";
console.log(timeSlots[specificDate]);
