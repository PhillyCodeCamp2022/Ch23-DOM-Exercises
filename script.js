function init() {
    const missionAbort = document.getElementById("abortMission");
    const takeOffButton = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    // When the Take off button is clicked, the text 'The shuttle is
    // on the ground' changes to 'Houston, we have liftoff!'. 
    // The Take off button has an id="liftoffButton" attribute.
    // it("should blah blah", function() {test goes here})
    takeOffButton.addEventListener("click", function () {
        console.log("Hey! You clicked the 'Take off' button! 🍕");
        paragraph.innerHTML = "Houston, we have liftoff! 🚀";
    });

    // When the user's cursor goes over the Abort Mission button, 
    // the button's background turns red. 
    // The Abort Mission button has id="abortMission".
    missionAbort.addEventListener("mouseover", function () {
        // console.log(missionAbort.style);
        missionAbort.style.backgroundColor = "red";
    });

    // When the user's cursor leaves the Abort Mission button, 
    // the button's background returns to its original state 
    // (Hint: Setting the background color to the empty string, "", 
    // will force it to revert to the default browser styles.)
    missionAbort.addEventListener("mouseout", function () {
        missionAbort.style.backgroundColor = "";
    });

    missionAbort.addEventListener("click", function () {
        // confirm function throws a pop up and returns true/false
        // based on the choice made in the pop up!
        let confirmation = confirm("STOP! 🛑 !!!WARNING!!! ✋ \nAre you sure you want to abort the mission?");
        if (confirmation) {
            // only after checking if confirmation is true do we update the paragraph text 
            paragraph.innerHTML = 'Mission aborted! Space shuttle returning home. 🍄';
        }
    })
}

window.addEventListener("load", init);