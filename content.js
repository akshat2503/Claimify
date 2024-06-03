// This function will be called when the page is fully loaded
function clickRewardLinks() {
    const linkCards = document.querySelectorAll('span.pointLink.ng-binding');
    console.log(linkCards);
    linkCards.forEach((card, index) => {
        setTimeout(() => {
            card.click();
            console.log("Clicked on ", card);
        }, index * 1000); // Adjust delay as needed
    });
}

// Use MutationObserver to wait for the elements to be available
const observer = new MutationObserver((mutations, obs) => {
    const linkCards = document.querySelectorAll('span.pointLink.ng-binding');
    if (linkCards.length > 0) {
        clickRewardLinks();
        obs.disconnect(); // Stop observing once the elements are found
    }
});

// Start observing the document for changes
observer.observe(document, {
    childList: true,
    subtree: true
});

// For initial load in case the elements are already present
window.onload = () => {
    alert("loaded");
    clickRewardLinks();
};
