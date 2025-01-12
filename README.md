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

    <script>
        let likeCount = 0;

        const likeButton = document.getElementById('likeButton');
        const likeCountDisplay = document.getElementById('likeCount');

        likeButton.addEventListener('click', () => {
            likeCount++;
            likeCountDisplay.textContent = `いいね数: ${likeCount}`;
        });
    </script>
</body>
</html>




