document.addEventListener("DOMContentLoaded", function() {
    // Get elements by data-testid
    const slackUserName = document.querySelector('[data-testid="slackUserName"]');
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
    const myTrack = document.querySelector('[data-testid="myTrack"]');
    const githubURL = document.querySelector('[data-testid="githubURL"]');

    // Update Slack name
    slackUserName.textContent = "Ahmed Dosunmu";

    // Update current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    currentDayOfTheWeek.textContent = dayOfWeek;

    // Function to update UTC time
    function updateUTCTime() {
        const currentTime = new Date();
        const utcTime = currentTime.getTime();
        currentUTCTime.textContent = `Current UTC Time: ${utcTime} ms`;

        // Update the time every 1000ms (1 second)
        setTimeout(updateUTCTime, 1000);
    }

    // Call the function to start updating UTC time
    updateUTCTime();

    // Update track and GitHub URL
    myTrack.textContent = "My track: Frontend";
    githubURL.href = "https://github.com/Ay-Dee/zuri-frontend-task-1";
});
