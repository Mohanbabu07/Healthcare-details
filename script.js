document.addEventListener("DOMContentLoaded", function() {
    // Simulate fetching goal percentage from a server
    function fetchGoalPercentage() {
        // Simulated data fetching - replace this with actual API call
        return new Promise((resolve) => {
            setTimeout(() => {
                const goalPercentage = 40; 
                resolve(goalPercentage);
            }, 1000); 
        });
    }

    // Update the goal percentage on the page
    function updateGoalPercentage(percentage) {
        const goalPercentageElement = document.getElementById('goal-percentage');
        goalPercentageElement.innerText = `Goal: ${percentage}%`;

   
        const semiCircle = document.getElementById('goal-progress');
        semiCircle.style.background = `conic-gradient(#4caf50 ${percentage}%, #e0e0e0 ${percentage}% 100%)`;
    }

    fetchGoalPercentage().then(updateGoalPercentage);
});
