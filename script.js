function tellFortune() {
    const fortunes = [
        {text: "大吉！明日は素晴らしい一日になるでしょう！", type: "good"},
        {text: "吉！新しい出会いがありそうです", type: "good"},
        {text: "中吉！普段通り過ごせば問題ありません", type: "normal"},
        {text: "小吉！ちょっとしたハプニングに注意", type: "normal"},
        {text: "末吉！自分のペースで過ごしましょう", type: "normal"},
        {text: "凶！大事な決断は延期した方が良さそうです", type: "bad"}
    ];

    const resultElement = document.getElementById('result');
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

    // 結果表示のアニメーション
    resultElement.classList.remove('show');
    resultElement.className = '';  // 既存の色クラスをリセット
    
    setTimeout(() => {
        resultElement.textContent = randomFortune.text;
        resultElement.classList.add('show', `${randomFortune.type}-fortune`);
    }, 100);
}
