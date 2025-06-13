function UnityProgress(gameInstance, progress) {
    if (!gameInstance.Module) return;

    if (!gameInstance.progress) {
        // Create progress container
        const progressDiv = document.createElement("div");
        progressDiv.style.position = "absolute";
        progressDiv.style.top = "50%";
        progressDiv.style.left = "50%";
        progressDiv.style.transform = "translate(-50%, -50%)";
        progressDiv.style.width = "60%";
        progressDiv.style.height = "30px";
        progressDiv.style.background = "#222";
        progressDiv.style.border = "2px solid #555";
        progressDiv.style.borderRadius = "5px";
        progressDiv.style.zIndex = "9999";
        progressDiv.id = "unity-progress-bar";

        // Create inner bar
        const bar = document.createElement("div");
        bar.style.height = "100%";
        bar.style.width = "0%";
        bar.style.background = "#4CAF50";
        bar.style.borderRadius = "5px";

        progressDiv.appendChild(bar);
        document.body.appendChild(progressDiv);

        gameInstance.progress = progressDiv;
        gameInstance.progress.bar = bar;
    }

    gameInstance.progress.bar.style.width = (progress * 100) + "%";

    if (progress === 1) {
        setTimeout(() => {
            gameInstance.progress.remove();
        }, 500); // allow user to see full bar
    }
}
