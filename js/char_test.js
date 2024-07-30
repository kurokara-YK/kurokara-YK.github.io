// グラフのラベル（表示する月）
const labels = [
        '4月',
        '5月',
        '6月',
        '7月'
    ];
    
    // データセットの設定
    const data = {
        labels: labels,
        datasets: [{
            label: '人数',
            data: [5, 3, 9, 8],  // プロットするデータ
            fill: false,  // 塗りつぶしを無効にする
            borderColor: 'rgb(75, 192, 192)',  // 線の色
            tension: 0.1  // 線の滑らかさ
        }]
    };
    
    // グラフの設定
    const config = {
        type: 'line',
        data: data,
        options: {
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: '月'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: '人数'
                    },
                    suggestedMin: 0,  // 最小値を0に設定
                    suggestedMax: 10  // 最大値を30に設定
                }
            }
        }
    };
    
    // グラフを作成
    const myChart = new Chart(
        document.getElementById('myChart3'),
        config
    );
    