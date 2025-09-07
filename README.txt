TOPS – Clean Fix Pack
---------------------
Файлы:
- layouts/partials/head.html  — правильный css.PostCSS, фон и «glass».
- layouts/_default/baseof.html — оставляет шапку/футер темы, добавляет фон/подложку.

Установка:
1) Распакуй архив в корень проекта (перезапиши файлы).
2) Положи фон в static/images/vs-tavern.jpg или поменяй путь в head.html.
3) Очисти кэш:  Remove-Item -Recurse -Force .\resources\*
4) Запуск:      hugo server -D

Шапка берётся из темы и не ломается. Мультиязычность и меню работают как в теме.
