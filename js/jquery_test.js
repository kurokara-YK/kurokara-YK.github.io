// jQueryを使用したアニメーション効果

$(document).ready(function() {
        // サイコロの結果をフェードアウト＆フェードインで表示
        $("button:contains('サイコロを振る')").on("click", function() {
            $("#dice-result").fadeOut(500, function() {
                $(this).fadeIn(500);
            });
        });
    
        // じゃんけんの結果をスライドアップ＆スライドダウンで表示
        $("button:contains('グー'), button:contains('チョキ'), button:contains('パー')").on("click", function() {
            $("#janken-result").slideUp(500, function() {
                $(this).slideDown(500);
            });
        });
    });
    