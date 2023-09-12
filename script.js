document.addEventListener("DOMContentLoaded", function() {
    // Get elements by data-testid
    const slackUserName = document.querySelector('[data-testid="slackUserName"]');
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

    // Update Slack name
    slackUserName.textContent = "Ahmed Dosunmu";

    // Update current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    currentDayOfTheWeek.textContent = dayOfWeek;

    // Update current UTC time
    const utcTime = currentDate.getTime();
    currentUTCTime.textContent = `Current UTC Time: ${utcTime} ms`;
});
