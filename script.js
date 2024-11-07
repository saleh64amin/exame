function calculateScore() {
    const form = document.getElementById("quiz-form");
    const resultDiv = document.getElementById("result");
    
    // جمع الإجابات
    let score = 0;
    if (form.q1.value === "correct") score++;
    if (form.q2.value === "correct") score++;
    if (form.q3.value === "correct") score++;
    if (form.q4.value === "correct") score++;
    if (form.q5.value === "correct") score++;

    // عرض النتيجة
    resultDiv.innerHTML = `لقد حصلت على ${score} من 5.`;
}
