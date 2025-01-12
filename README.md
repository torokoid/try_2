# try_2

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>いいねボタン</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        .like-button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            color: #fff;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .like-button:hover {
            background-color: #0056b3;
        }
        .like-count {
            margin-top: 10px;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <h1>「いいね」ボタンのサンプル</h1>
    <button class="like-button" id="likeButton">いいね</button>
    <div class="like-count" id="likeCount">いいね数: 0</div>
<!--
    <script>
        let likeCount = 0;

        const likeButton = document.getElementById('likeButton');
        const likeCountDisplay = document.getElementById('likeCount');

        likeButton.addEventListener('click', () => {
            likeCount++;
            likeCountDisplay.textContent = `いいね数: ${likeCount}`;
        });
    </script>
-->
    <script>
        const likeButton = document.getElementById('likeButton');
        const likeCountDisplay = document.getElementById('likeCount');
        const apiUrl = 'http://localhost:3000/likes';

        // ページ読み込み時に「いいね数」を取得
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                likeCountDisplay.textContent = `いいね数: ${data.count}`;
            })
            .catch(error => {
                console.error('エラー:', error);
            });

        // ボタンをクリックしたら「いいね数」を更新
        likeButton.addEventListener('click', () => {
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(data => {
                    likeCountDisplay.textContent = `いいね数: ${data.count}`;
                })
                .catch(error => {
                    console.error('エラー:', error);
                });
        });
    </script>

</body>
</html>




