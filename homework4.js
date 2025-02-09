function checkProbabilityTheory(count) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < count; i++) {
    // Генеруємо випадкове число від 100 до 1000 включно
    const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    // Перевіряємо, чи є число парним
    if (randomNumber % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  // Обчислюємо відсоткове співвідношення
  const evenPercentage = ((evenCount / count) * 100).toFixed(2);
  const oddPercentage = ((oddCount / count) * 100).toFixed(2);

  // Виводимо результати
  console.log(`Кількість згенерованих чисел: ${count}`);
  console.log(`Парних чисел: ${evenCount}`);
  console.log(`Непарних чисел: ${oddCount}`);
  console.log(`Відсоток парних чисел: ${evenPercentage}%`);
  console.log(`Відсоток непарних чисел: ${oddPercentage}%`);
}
