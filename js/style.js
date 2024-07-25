document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById("downloadButton");

    downloadButton.addEventListener("click", function() {
        const a = document.createElement("a");
        a.href = "mycv.pdf";  
        a.download = "mycv.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});



