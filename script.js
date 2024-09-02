document.addEventListener('DOMContentLoaded', function () {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const proposalText = document.getElementById('proposalText');
    const messageContainer = document.getElementById('messageContainer');
    const finalMessageContainer = document.getElementById('finalMessageContainer');
    const footer = document.getElementById('footer');
    let hoverCount = 0;
    let userName = '';

    // Initialize visibility to hidden
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    proposalText.style.display = 'none';
    messageContainer.style.display = 'none';
    finalMessageContainer.style.display = 'none';
    footer.style.display = 'none';

    // Ask for user's name before loading
    userName = prompt('Please enter your name:');
    if (userName) {
        // Show elements after name is entered
        yesBtn.style.display = 'block';
        noBtn.style.display = 'block';
        proposalText.style.display = 'block';
        footer.style.display = 'block';
        proposalText.innerText = `${userName}, will you be my Valentine?`;
        footer.innerHTML = `Made by Hanish with love 🧡 for ${userName}`;
    }

    noBtn.addEventListener('mouseover', function () {
        hoverCount++;
        if (hoverCount <= 3) {
            noBtn.style.display = 'none'; // Hide the "No" button on hover
            setTimeout(() => noBtn.style.display = 'block', 1000); // Show it again after 1 second
        } else {
            displayMessage();
        }
    });

    noBtn.addEventListener('click', function () {
        noBtn.style.display = 'none'; // Hide the "No" button on click
        alert(`Please accept, ${userName} 😢`);
    });

    yesBtn.addEventListener('click', function () {
        const response = prompt(`Are you sure, ${userName}? Type "sure" to confirm.`);
        if (response && response.toLowerCase() === 'sure') {
            noBtn.style.display = 'none'; // Ensure "No" button is hidden
            displayFinalMessage();
            notifyUser(); // Notify when user confirms
        }
    });

    function animateSwap() {
        // Swap positions with animation
        const yesPos = yesBtn.getBoundingClientRect();
        const noPos = noBtn.getBoundingClientRect();

        yesBtn.style.position = 'absolute';
        noBtn.style.position = 'absolute';

        yesBtn.style.transition = 'left 0.5s, top 0.5s';
        noBtn.style.transition = 'left 0.5s, top 0.5s';

        yesBtn.style.left = `${noPos.left}px`;
        yesBtn.style.top = `${noPos.top}px`;

        noBtn.style.left = `${yesPos.left}px`;
        noBtn.style.top = `${yesPos.top}px`;
    }

    function resetButtons() {
        // Reset positions to original
        yesBtn.style.left = 'auto';
        yesBtn.style.top = 'auto';
        noBtn.style.left = 'auto';
        noBtn.style.top = 'auto';
        yesBtn.style.position = 'static';
        noBtn.style.position = 'static';
    }

    function displayMessage() {
        // Display the message container
        messageContainer.classList.remove('hidden');
        messageContainer.style.display = 'block';
        messageContainer.innerHTML = `<p>${userName}, I love you more than words can express. Why do you keep clicking the "No" button? Please accept my love, and I promise to cherish and care for you every single day of our lives.</p>`;
    }

    function displayFinalMessage() {
        // Display the final message container with sad words
        finalMessageContainer.classList.remove('hidden');
        finalMessageContainer.style.display = 'block';
        finalMessageContainer.innerHTML = `<p>${userName}, thank you for accepting me, but I can't help feeling a bit sad. I promise to take care of you with all my heart, but the thought that you had doubts worries me. I hope we build a future filled with love, trust, and endless happiness. 💖</p>`;
    }

    function notifyUser() {
        // Notify user when confirmed
        alert(`Thank you for accepting, ${userName}! 💕`);
    }
});
