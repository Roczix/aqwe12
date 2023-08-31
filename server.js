document.addEventListener("DOMContentLoaded", function() {
    const editor = document.getElementById("editor");
    const saveButton = document.getElementById("saveButton");

    // عند فتح الصفحة، قم بجلب محتويات ملف "text.txt" وعرضها في المربع نص
    fetch("text.txt")
        .then(response => response.text())
        .then(text => editor.value = text)
        .catch(error => console.error("حدث خطأ أثناء جلب محتويات الملف:", error));

    // عند النقر على زر "حفظ"
    saveButton.addEventListener("click", function() {
        const content = editor.value;
        const blob = new Blob([content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "text.txt";
        a.click();

        // إلغاء تخصيص URL بعد التنزيل
        URL.revokeObjectURL(url);
    });
});
