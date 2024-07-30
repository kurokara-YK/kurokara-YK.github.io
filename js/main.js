// JavaScriptでコンテンツを生成する
window.onload = function() {
    const container = document.getElementById('extra-content');
    for (let i = 0; i < 60; i++) {
        const p = document.createElement('p');
        p.textContent = '」';
        container.appendChild(p);
    }
};

// サイコロを振る関数
function rollDice() {
    const diceType = parseInt(document.getElementById("diceType").value);
    const result = Math.floor(Math.random() * diceType) + 1;
    const resultElement = document.getElementById("dice-result");

    // 結果を表示する文字列を生成
    let resultText = `サイコロの結果: ${result}`;

    if (diceType === 100) {
        if (result <= 5) {
            resultText += " - クリティカル!";
        } else if (result === 0 || result >= 96) {
            resultText += " - ファンブル!";
        }
    }

    // 結果を表示
    resultElement.textContent = resultText;
}

// じゃんけんの関数
function playJanken(playerHand) {
    const hands = ["グー", "チョキ", "パー"];
    const computerHand = hands[Math.floor(Math.random() * hands.length)];
    let result = "";

    if (playerHand === computerHand) {
        result = "引き分けです。";
    } else if (
        (playerHand === "グー" && computerHand === "チョキ") ||
        (playerHand === "チョキ" && computerHand === "パー") ||
        (playerHand === "パー" && computerHand === "グー")
    ) {
        result = "あなたの勝ちです！";
    } else {
        result = "あなたの負けです。";
    }

    result += ` あなたの手: ${playerHand}, ミ=ゴの手: ${computerHand}`;
    const resultElement = document.getElementById("janken-result");
    resultElement.textContent = result;
}
