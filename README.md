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
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, ref, onValue, runTransaction } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAI6PagpO-f8VC1yr3hNadU0Us7YLVM8o8",
    authDomain: "iine-76635.firebaseapp.com",
    databaseURL: "https://iine-76635.firebaseio.com",
    projectId: "iine-76635",
    storageBucket: "iine-76635.firebasestorage.app",
    messagingSenderId: "547516244877",
    appId: "1:547516244877:web:da260d23f79b78d90e53c4"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');
    const counts = document.querySelectorAll('.like-count');

    const likesRef = ref(database, 'likes');

    // 初期データを取得して反映
    onValue(likesRef, (snapshot) => {
        const data = snapshot.val() || [];
        likeButtons.forEach((button, index) => {
            counts[index].textContent = data[index] || 0;

            // ボタンクリック時にカウントを更新
            button.addEventListener('click', () => {
                runTransaction(ref(database, `likes/${index}`), (current) => {
                    return (current || 0) + 1;
                });
            });
        });
    });
});
    </script>
</body>
</html>


