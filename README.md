# try_2

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>いいね機能</title>
    <style>
        .like-item {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="like-container">
        <!-- 10個のいいねボタン -->
        <?php for ($i = 0; $i < 10; $i++) { ?>
        <div class="like-item">
            <button class="like-button" data-index="<?php echo $i; ?>">いいね</button>
            <span class="like-count">0</span>
        </div>
        <?php } ?>
    </div>

    <!-- Firebase関連のJSコード -->
    <script src="https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"></script>
    <script>
        // Firebaseの設定
        const firebaseConfig = {
            apiKey: "AIzaSyAI6PagpO-f8VC1yr3hNadU0Us7YLVM8o8",
            authDomain: "iine-76635.firebaseapp.com",
            databaseURL: "https://iine-76635.firebaseio.com",
            projectId: "iine-76635",
            storageBucket: "iine-76635.firebasestorage.app",
            messagingSenderId: "547516244877",
            appId: "1:547516244877:web:da260d23f79b78d90e53c4"
        };

        // Firebase初期化
        const app = firebase.initializeApp(firebaseConfig);
        const database = firebase.database();

        document.addEventListener('DOMContentLoaded', () => {
            fetch('/firebase.js')
                .then(response => response.json())
                .then(data => {
                    const counts = document.querySelectorAll('.like-count');
                    const likeButtons = document.querySelectorAll('.like-button');

                    likeButtons.forEach((button, index) => {
                        button.addEventListener('click', () => {
                            const countSpan = counts[index];
                            let currentCount = parseInt(countSpan.textContent, 10) || 0;
                            currentCount++;

                            // カウントを画面に反映
                            countSpan.textContent = currentCount;

                            // Firebaseにカウントを保存
                            database.ref(`likes/${index}`).transaction((current) => {
                                return (current || 0) + 1;
                            });
                        });
                    });

                    counts.forEach((count, index) => {
                        count.textContent = data[index] || 0;
                    });
                })
                .catch(error => console.error(error));
        });
    </script>
</body>
</html>

