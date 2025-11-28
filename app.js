let containerType = "";
let sizeLimit = 0;  // in oz, or "nolimit"
let currentFill = 0;

// Step navigation
function goTo(step) {
    document.querySelectorAll(".step").forEach(el => el.classList.remove("active"));
    document.querySelector(`#step${step}`).classList.add("active");
}

// Step 1
document.querySelectorAll(".choice").forEach(btn => {
    btn.onclick = () => {
        containerType = btn.dataset.container;
        document.getElementById("container-img").src = `img/${containerType}.png`;
        goTo(2);
    };
});

// Step 2
document.querySelectorAll(".size").forEach(btn => {
    btn.onclick = () => {
        sizeLimit = btn.dataset.size;
        goTo(3);
    };
});

// Step 3 - Gummy Selection
document.querySelectorAll(".gummy").forEach(btn => {
    btn.onclick = () => {

        // Limit check
        if (sizeLimit !== "nolimit" && currentFill >= sizeLimit) {
            document.getElementById("popup").style.display = "block";
            return;
        }

        currentFill++;

        // Add gummy visual
        let img = document.createElement("img");
        img.src = btn.dataset.img;
        img.classList.add("filled-gummy");

        // Random placement
        img.style.left = (Math.random() * 200 + 40) + "px";
        img.style.bottom = (currentFill * 8) + "px";

        document.getElementById("gummy-fill").appendChild(img);
    };
});

// Popup Events
document.getElementById("upgrade").onclick = () => {
    sizeLimit = "nolimit";
    document.getElementById("popup").style.display = "none";
};

document.getElementById("decline").onclick = () => {
    document.getElementById("popup").style.display = "none";
};
