function UnityProgress(gameInstance, progress) {
    if (!gameInstance.Module) return;

    if (!gameInstance.progress) {
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

        const bar = document.createElement("div");
        bar.style.height = "100%";
        bar.style.width = "0%";
        bar.style.background = "#4CAF50";
        bar.style.borderRadius = "5px";
        bar.style.transition = "width 0.3s ease";

        progressDiv.appendChild(bar);
        document.body.appendChild(progressDiv);

        gameInstance.progress = progressDiv;
        gameInstance.progress.bar = bar;
    }

    gameInstance.progress.bar.style.width = (progress * 100) + "%";

    if (progress === 1) {
        setTimeout(() => {
            if (gameInstance.progress) {
                gameInstance.progress.remove();
            }
        }, 500);
    }
}
