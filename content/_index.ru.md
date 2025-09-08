---
title: "Фанатский портал сервера TOPS"
---

{{< carousel items="1" height="500" unit="px" duration="7000" />}}

{{< raw >}}
<div class="not-prose space-y-8 mt-8">

  <div class="card-glass prose prose-invert max-w-none">
    <p><strong>TOPS Portal</strong> — новости, гайды, маршруты и удобные инструменты для игроков.</p>
    <p>Сайт полезен не только новичкам, но и бывалым: здесь собраны популярные места и города сервера, а также путеводитель по древнему миру TOPS.</p>
  </div>

  <section>
    <h3 class="mb-3 text-lg font-semibold">Что внутри</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="card-glass">
        <div class="font-semibold">Гайды</div>
        <ul class="text-sm mt-2 list-disc list-inside space-y-1">
          <li>Чизл, приваты, транспорт</li>
          <li>Шаг-за-шагом и короткие шпаргалки</li>
        </ul>
        <a class="cta inline-flex mt-3" href="{{< relref "guide/_index.md" >}}">Перейти к гайдам →</a>
      </div>

      <div class="card-glass">
        <div class="font-semibold">Города и маршруты</div>
        <ul class="text-sm mt-2 list-disc list-inside space-y-1">
          <li>Описания поселений</li>
          <li>Готовые команды для навигатора</li>
        </ul>
        <a class="cta inline-flex mt-3" href="{{< relref "tourism/towns/_index.md" >}}">Открыть список городов →</a>
      </div>

      <div class="card-glass">
        <div class="font-semibold">Моды</div>
        <ul class="text-sm mt-2 list-disc list-inside space-y-1">
          <li>Подборка must-have модов</li>
          <li>Установка и обновления</li>
        </ul>
        <a class="cta inline-flex mt-3" href="{{< relref "mods/_index.md" >}}">Моды →</a>
      </div>
    </div>
  </section>

  <section>
    <h3 class="mb-3 text-lg font-semibold">Установите TLPath (рекомендуется)</h3>
    <div class="card-glass">
      <p class="mb-3">Так как карта на сервере очень большая и маршруты часто бывают сильно запутанными, рекомендуется мод <strong>TLPath</strong> для навигации по серверу, он строит самый короткий и быстрый маршрут по вашим координатам, ведет от точки к точке и помогает найти Транслокаторы. Без него команды на построение маршрута с этого сайта работать не будут.</p>

      <!-- стеклянная кнопка под общий стиль -->
      <a href="https://mods.vintagestory.at/show/mod/27985" target="_blank" rel="noopener"
         class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-80" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4.007 4.007a1 1 0 0 1-1.414 0L7.28 11.707a1 1 0 1 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1z"/><path d="M5 15a1 1 0 1 0-2 0v2a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-2a1 1 0 1 0-2 0v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2z"/></svg>
        <span class="font-medium">Скачать TLPath</span>
      </a>

      <p class="text-sm opacity-80 mt-3"></p>
    </div>
  </section>

  <section>
    <h3 class="mb-3 text-lg font-semibold">Быстрый старт</h3>
    <div class="card-glass">
      <p class="mb-3">Вставьте команду в чат, чтобы построить маршрут до Бронзового города:</p>
      <p class="text-sm mb-2"><strong>Требуется мод TLPath.</strong></p>
      {{< tlcopy cmd=".tlpath find -700 17028" mod="TLPath" link="https://mods.vintagestory.at/show/mod/27985" >}}
      <p class="text-sm opacity-80 mt-3">Совет: идите по дорогам и указателям — часто это самый быстрый путь.</p>
      <p class="mt-3">Карта сервера: <a href="https://map.tops.vintagestory.at/?x=-1&y=17&zoom=10" target="_blank" rel="noopener">map.tops.vintagestory.at</a></p>
    </div>
  </section>

  <section>
    <h3 class="mb-3 text-lg font-semibold">Сообщество</h3>
    <div class="card-glass">
      <p>RU-чат: <a href="https://t.me/mylesvintagestory" target="_blank" rel="noopener">@mylesvintagestory</a></p>
      <p class="text-sm opacity-80">Присоединяйтесь, задавайте вопросы, делитесь находками и скриншотами.</p>
    </div>
  </section>

</div>
{{< /raw >}}
