{\rtf1\ansi\ansicpg932\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab560
\pard\pardeftab560\slleading20\pardirnatural\partightenfactor0

\f0\fs26 \cf0 fetch('/data.json')\
    .then(response => response.json())\
    .then(data => \{\
        const counts = document.querySelectorAll('.like-count');\
        const likeButtons = document.querySelectorAll('.like-button');\
\
        likeButtons.forEach((button, index) => \{\
            button.addEventListener('click', () => \{\
                const countSpan = counts[index];\
                let currentCount = parseInt(countSpan.textContent, 10) || 0;\
                currentCount++;\
\
                // \uc0\u12459 \u12454 \u12531 \u12488 \u12434 \u30011 \u38754 \u12395 \u21453 \u26144 \
                countSpan.textContent = currentCount;\
\
                // Firebase\uc0\u12395 \u12459 \u12454 \u12531 \u12488 \u12434 \u20445 \u23384 \
                database.ref(`likes/$\{index\}`).transaction((current) => \{\
                    return (current || 0) + 1;\
                \});\
            \});\
        \});\
\
        counts.forEach((count, index) => \{\
            count.textContent = data[index] || 0;\
        \});\
    \})\
    .catch(error => console.error(error));}