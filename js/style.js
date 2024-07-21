document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById("downloadButton");

    downloadButton.addEventListener("click", function() {
        const a = document.createElement("a");
        a.href = "path/to/your/mycv.pdf";  // Replace with the actual path to your PDF
        a.download = "mycv.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});

