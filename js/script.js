function calculateJourney() {

    const dobInput = document.getElementById("dob").value;

    if (!dobInput) {
        alert("Please select your Date of Birth");
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();

    const monthDiff =
        today.getMonth() - dob.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 &&
            today.getDate() < dob.getDate())
    ) {
        age--;
    }

    const diffTime =
        today.getTime() - dob.getTime();

    const daysLived =
        Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const hoursLived =
        Math.floor(diffTime / (1000 * 60 * 60));

    const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const bornDay =
        weekdays[dob.getDay()];

    const zodiac = getZodiac(
        dob.getDate(),
        dob.getMonth() + 1
    );

    let nextBirthday =
        new Date(
            today.getFullYear(),
            dob.getMonth(),
            dob.getDate()
        );

    if (nextBirthday < today) {
        nextBirthday.setFullYear(
            today.getFullYear() + 1
        );
    }

    const birthdayCountdown =
        Math.ceil(
            (nextBirthday - today) /
            (1000 * 60 * 60 * 24)
        );

    document.getElementById("age").innerText =
        age + " Years";

    document.getElementById("days").innerText =
        daysLived;

    document.getElementById("hours").innerText =
        hoursLived;

    document.getElementById("weekday").innerText =
        bornDay;

    document.getElementById("zodiac").innerText =
        zodiac;

    document.getElementById("birthday").innerText =
        birthdayCountdown + " Days";

    document.getElementById("result").style.display =
        "block";
}

function getZodiac(day, month) {

    if ((month == 3 && day >= 21) || (month == 4 && day <= 19))
        return "Aries";

    if ((month == 4 && day >= 20) || (month == 5 && day <= 20))
        return "Taurus";

    if ((month == 5 && day >= 21) || (month == 6 && day <= 20))
        return "Gemini";

    if ((month == 6 && day >= 21) || (month == 7 && day <= 22))
        return "Cancer";

    if ((month == 7 && day >= 23) || (month == 8 && day <= 22))
        return "Leo";

    if ((month == 8 && day >= 23) || (month == 9 && day <= 22))
        return "Virgo";

    if ((month == 9 && day >= 23) || (month == 10 && day <= 22))
        return "Libra";

    if ((month == 10 && day >= 23) || (month == 11 && day <= 21))
        return "Scorpio";

    if ((month == 11 && day >= 22) || (month == 12 && day <= 21))
        return "Sagittarius";

    if ((month == 12 && day >= 22) || (month == 1 && day <= 19))
        return "Capricorn";

    if ((month == 1 && day >= 20) || (month == 2 && day <= 18))
        return "Aquarius";

    return "Pisces";
}