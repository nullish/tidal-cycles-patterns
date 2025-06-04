document.querySelectorAll(".copy").forEach(copyButton => {
    copyButton.addEventListener("click", () => {
        const targetEl = document.querySelector(copyButton.dataset.copy);
        const textToCopy = targetEl.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert("Snippet copied!");
        })
    });
});
