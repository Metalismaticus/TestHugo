---
title: "Первые шаги"
---

Новенький на сервере? Начни с настроек чата и базовых команд.

## Подключи русский чат
```
/group join russian
```

## Размер окна чата
```
.chatsize 550 600
```

<h3 class="mt-6 mb-2 text-base font-semibold">Отключаем автопоказ главного чата</h3>
<div class="flex flex-wrap items-center gap-2 text-sm my-2">
  <span class="px-3 py-1 rounded-md bg-slate-100 font-medium">Настройки</span>
  <span class="text-slate-400">→</span>
  <span class="px-3 py-1 rounded-md bg-slate-100 font-medium">Интерфейс</span>
  <span class="text-slate-400">→</span>
  <span class="px-3 py-1 rounded-md bg-slate-100 font-medium">Автопоказ чата</span>
</div>
<p class="text-slate-600 text-sm">Отключите переключатель «Автопоказ чата».</p>

{{< raw >}}
<div class="not-prose mt-10">
  <h3 class="mb-3 text-lg font-semibold">Обязательные моды</h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

    <a href="https://mods.vintagestory.at/pingme" target="_blank" rel="noopener" class="card-glass">
      <div class="flex items-start gap-3">
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">🔔</span>
        <div>
          <div class="font-semibold">PingMe — уведомления о сообщениях</div>
          <p class="text-sm mt-1">Звуки и всплывающие уведомления, чтобы не пропускать чат.</p>
          <span class="mt-2 inline-flex cta text-sm">Скачать →</span>
        </div>
      </div>
    </a>

    <a href="https://mods.vintagestory.at/show/mod/27985" target="_blank" rel="noopener" class="card-glass">
      <div class="flex items-start gap-3">
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">🧭</span>
        <div>
          <div class="font-semibold">Навигатор ТЛ — не путайтесь в телепортах</div>
          <p class="text-sm mt-1">Метки, маршруты и быстрый поиск нужного телепорта.</p>
          <span class="mt-2 inline-flex cta text-sm">Скачать →</span>
        </div>
      </div>
    </a>

    <a href="https://mods.vintagestory.at/playerlist" target="_blank" rel="noopener" class="card-glass">
      <div class="flex items-start gap-3">
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">👥</span>
        <div>
          <div class="font-semibold">PlayerList — список игроков</div>
          <p class="text-sm mt-1">Удобный список онлайн-игроков с быстрым доступом к инфо.</p>
          <span class="mt-2 inline-flex cta text-sm">Скачать →</span>
        </div>
      </div>
    </a>

    <a href="https://mods.vintagestory.at/extrainfo" target="_blank" rel="noopener" class="card-glass">
      <div class="flex items-start gap-3">
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">ℹ️</span>
        <div>
          <div class="font-semibold">ExtraInfo — полезная информация на экране</div>
          <p class="text-sm mt-1">Координаты, время и другие параметры рядом с HUD.</p>
          <span class="mt-2 inline-flex cta text-sm">Скачать →</span>
        </div>
      </div>
    </a>

    <a href="https://mods.vintagestory.at/show/mod/9817" target="_blank" rel="noopener" class="card-glass">
      <div class="flex items-start gap-3">
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">📊</span>
        <div>
          <div class="font-semibold">Status Hud Continued</div>
          <p class="text-sm mt-1">Панель статусов на HUD: здоровье, сытость и прочие индикаторы.</p>
          <span class="mt-2 inline-flex cta text-sm">Скачать →</span>
        </div>
      </div>
    </a>

    <a href="https://mods.vintagestory.at/claimsradar" target="_blank" rel="noopener" class="card-glass">
      <div class="flex items-start gap-3">
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">🛡️</span>
        <div>
          <div class="font-semibold">ClaimsRadar — радары приватов</div>
          <p class="text-sm mt-1">Подсветка близлежащих приватов, чтобы не залезть случайно.</p>
          <span class="mt-2 inline-flex cta text-sm">Скачать →</span>
        </div>
      </div>
    </a>

  </div>
</div>
{{< /raw >}}

## Где поселится?

Скачиваем и устанавливаем моды, на странице с [городами]({{< relref "tourism/towns/_index.md" >}})  выбираем нас интересющий маршрут, копируем команды для мода по типу:

.tlpath find -700 17028

вставляем ее в чат и идем по маркеру до конечной точки. Обратите внимание, что мод TLPath не только указывает направление, но и пишет точные координаты транслокатора, чтобы вы могли его с легкостью найти. Полезный совет - всегда старайтесь идти по дорогам и следовать указателям, так как это в итоге может быть самый быстрый и простой маршрут

## Как приватить
Все команды по привату: <https://wiki.vintagestory.at/Land_claiming/ru>

## Полезные ссылки
РУ‑сообщество: <https://t.me/mylesvintagestory>

Карта сервера TOPS: <https://map.tops.vintagestory.at/?x=-1&y=17&zoom=10>

Навигатор ТЛ: <https://translocator.moe/>

Помощник для чизла: <https://chisel-beta.vercel.app/>
