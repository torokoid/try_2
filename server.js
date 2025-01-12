{\rtf1\ansi\ansicpg932\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const express = require('express');\
const sqlite3 = require('sqlite3').verbose();\
const cors = require('cors');\
\
const app = express();\
const port = 3000;\
\
// \uc0\u12511 \u12489 \u12523 \u12454 \u12455 \u12450 \u35373 \u23450 \
app.use(cors());\
app.use(express.json());\
\
// SQLite \uc0\u12487 \u12540 \u12479 \u12505 \u12540 \u12473 \u12398 \u35373 \u23450 \
const db = new sqlite3.Database(':memory:'); // \uc0\u12513 \u12514 \u12522 \u19978 \u12398 DB\u12290 \u27704 \u32154 \u21270 \u12377 \u12427 \u22580 \u21512 \u12399 \u12501 \u12449 \u12452 \u12523 \u21517 \u12434 \u25351 \u23450 \u12290 \
db.serialize(() => \{\
    db.run('CREATE TABLE likes (id INTEGER PRIMARY KEY, count INTEGER)');\
    db.run('INSERT INTO likes (id, count) VALUES (1, 0)');\
\});\
\
// \uc0\u12356 \u12356 \u12397 \u25968 \u12434 \u21462 \u24471 \u12377 \u12427 \u12456 \u12531 \u12489 \u12509 \u12452 \u12531 \u12488 \
app.get('/likes', (req, res) => \{\
    db.get('SELECT count FROM likes WHERE id = 1', (err, row) => \{\
        if (err) \{\
            res.status(500).send('\uc0\u12487 \u12540 \u12479 \u12505 \u12540 \u12473 \u12456 \u12521 \u12540 ');\
        \} else \{\
            res.json(\{ count: row.count \});\
        \}\
    \});\
\});\
\
// \uc0\u12356 \u12356 \u12397 \u25968 \u12434 \u26356 \u26032 \u12377 \u12427 \u12456 \u12531 \u12489 \u12509 \u12452 \u12531 \u12488 \
app.post('/likes', (req, res) => \{\
    db.run('UPDATE likes SET count = count + 1 WHERE id = 1', function (err) \{\
        if (err) \{\
            res.status(500).send('\uc0\u12487 \u12540 \u12479 \u12505 \u12540 \u12473 \u12456 \u12521 \u12540 ');\
        \} else \{\
            db.get('SELECT count FROM likes WHERE id = 1', (err, row) => \{\
                if (err) \{\
                    res.status(500).send('\uc0\u12487 \u12540 \u12479 \u12505 \u12540 \u12473 \u12456 \u12521 \u12540 ');\
                \} else \{\
                    res.json(\{ count: row.count \});\
                \}\
            \});\
        \}\
    \});\
\});\
\
// \uc0\u12469 \u12540 \u12496 \u12540 \u36215 \u21205 \
app.listen(port, () => \{\
    console.log(`\uc0\u12469 \u12540 \u12496 \u12540 \u12364  http://localhost:$\{port\} \u12391 \u36215 \u21205 \u20013 `);\
\});\
}