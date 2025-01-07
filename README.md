# try_2

<title>いいねボタン</title> <style> .like-container { display: flex; flex-direction: column; align-items: flex-start; gap: 10px; /* ボタン間のスペース */ }
     .like-item {
         display: flex;
         align-items: center;
     }
 
     .like-button {
         padding: 5px 10px;
         background-color: #007bff;
         color: white;
         border: none;
         border-radius: 5px;
         cursor: pointer;
     }
 
     .like-button:hover {
         background-color: #0056b3;
     }
 
     .like-count {
         margin-left: 10px;
     }
 </style>
 2018年、2019年>2021年>2023年
 >タイ植物園リンク
 >2024城址公園桜リンク
 >2024/4/20ひたち海浜公園
 >2024/4/27マロニエプラザ絵画展
 >ちょい古&マニアック、羽黒山から無線した記録
 >2023年12月の富士山
 >2022年4月、羽黒山のツツジ
 >2024年5月、年に一度の田植え時期に見える、田んぼリフレクション
 >宇都宮郊外の意外な穴場スポット「こどものもり公園」
 >宇都宮市内、公園のお花が満開
 >Xアカウントリンク、ほぼ毎日更新中
 >県民の森にバイクでお出かけ>実は前の週にも県民の森
 >超マニアック、アマチュア無線のアンテナの話
 >梅雨入り直前のお花たちを集めました
 >梅雨時のしっとりしたお花たちです
 >2023年、タイの日常風景
 >2024年7月、お隣の家が建て替えで取り壊し
 >2024年8月、高校の同級生（Bruce君）が訪れたフランスの写真集
 >2024年8月10日、益子ひまわり祭り写真集
 >2024年8月17日、羽黒山にお詣りと関東平野一望
 >2024年8月31日、42年間勤めたHondaを無事退職
 >NHK9.11特集番組より、2001年9月11日アメリカ同時多発テロの直後に起こった出来事
 >2024年8月23日、お隣の敷地が地鎮祭〜新築工事
 >2024年9月30日、彼岸花の季節に羽黒山
 >2024年10月3日、メタバース空間のcluster主催者からCluster Acceleratorに推薦されたとの連絡！
 >2024年10月4日、定年退職１ヶ月後に旧職場のメンバーが飲み会を開催してくれました！
 >2024年10月14日、鬼怒川グリーンパークのコスモスが綺麗！
 >2024年10月23日、銀座散策と品川から屋形船あそび！
 >2024年11月3日、バイクツーリング、背景画像の３台目は女性ライダー！
 >2024年11月16日、メタバース内で開催された音楽イベント。マイティヤさんの曲はTVで放送できるレベル！
 >2024年11月18日、20日のタイ旅行に先立ち、羽黒山神社で安全祈願！
 >2024年11月20日、宇都宮からマロニエバスで成田に移動、バンコクから北部チェンライまでの旅！  いいね0
 >2024年11月29日、ドイツ人男性と現地人女性の結婚式に出席  いいね0
 >2024年11月30日 、チェンライ近郊にスイミングプール見つけました)  いいね0
 >2024/11/29〜12/02 、チェンライ近郊の散策状況  いいね0
 >2024/12/03〜12/04 、チェンライで過ごす日々のまとめ  いいね0
 >2024/12/05〜12/07 、チェンライ周辺のお花などまとめました  いいね0
 >2024/12/08〜12/09 、チェンライ、日常の一コマ  いいね0
 >2024/12/10 、チェンライ郊外、メーチャン、チャンチャワー町の市場  いいね0
 
 情報発信が一方通行だったので、タイ関連のリンクにいいねボタンを付けてみました。
 クリックなどは、お気軽にどうぞ！
 
 
 HPに関するご意見などはこちらをクリック
 
     <!-- 10個のいいねボタン --> <!--
     <div class="like-item">
         <button class="like-button">いいね</button>
         <span class="like-count">0</span>
     </div>
     <div class="like-item">
         <button class="like-button">いいね</button>
         <span class="like-count">0</span>
     </div>
    <div class="like-item">
         <button class="like-button">いいね</button>
         <span class="like-count">0</span>
     </div>
     <div class="like-item">
         <button class="like-button">いいね</button>
         <span class="like-count">0</span>
     </div>
     <div class="like-item">
         <button class="like-button">いいね</button>
         <span class="like-count">0</span>
     </div>
     <div class="like-item">
         <button class="like-button">いいね</button>
         <span class="like-count">0</span>
     </div>
     <div class="like-item">
         <button class="like-button">いいね</button>
         <span class="like-count">0</span>
     </div>
     <div class="like-item">
         <button class="like-button">いいね</button>
         <span class="like-count">0</span>
     </div>
     <div class="like-item">
         <button class="like-button">いいね</button>
         <span class="like-count">0</span>
     </div>
     <div class="like-item">
         <button class="like-button">いいね</button>
         <span class="like-count">0</span>
     </div>
 </div>-->
 <script src="https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js"></script> <script src="https://www.gstatic.com/firebasejs/9.17.1/firebase-database.j
 s"></script> <script> // Firebaseの設定 const firebaseConfig = { apiKey: "AIzaSyAI6PagpO-f8VC1yr3hNadU0Us7YLVM8o8", authDomain: "iine-76635.firebaseapp.com"
 , databaseURL: "https://iine-76635.firebaseio.com", projectId: "iine-76635", storageBucket: "iine-76635.firebasestorage.app", messagingSenderId: "5475162448
 77", appId: "1:547516244877:web:da260d23f79b78d90e53c4" }; // Firebase初期化 const app = firebase.initializeApp(firebaseConfig); const database = firebase.d
 atabase(); document.addEventListener('DOMContentLoaded', () => { const likeButtons = document.querySelectorAll('.like-button'); const counts = document.quer
... ySelectorAll('.like-count'); // データベースから初期カウントを取得 database.ref('likes').once('value', (snapshot) => { const data = snapshot.val() || []; da
... ta.forEach((count, index) => { if (counts[index]) { counts[index].textContent = count; } }); }); // ボタンクリック時にカウントを更新 likeButtons.forEach((bu
... tton, index) => { button.addEventListener('click', () => { const countSpan = counts[index]; let currentCount = parseInt(countSpan.textContent, 10) || 0; cur
... rentCount++; // カウントを画面に反映 countSpan.textContent = currentCount; // Firebaseにカウントを保存 database.ref(`likes/${index}`).set(currentCount); });
...  }); }); </script>
