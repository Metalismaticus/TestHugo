---
title: "Туризм"
---
[📍 Перейти к списку городов →](/ru/tourism/towns/)
## Топ интересных мест

{{< raw >}}
<div class="not-prose space-y-6">

  <!-- CTA: добавить своё место -->
  <div class="card-glass flex items-center justify-between gap-4">
    <p class="m-0">Хотите, чтобы ваше место попало в список? Вы всегда можете предложить объект через форму обратной связи.</p>
    <a href="/ru/call_me/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition">
      <span class="font-medium">Добавить своё место</span> →
    </a>
  </div>

  <!-- Место 1 -->
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div class="card-glass">
      <h3 class="text-lg font-semibold m-0">🏛️ Храм Евангелиона</h3>
      <p class="mt-2 mb-3 opacity-90">Находится прямо у спавна, помолился за вайпофинал Евангелиона — и в путь! Найти легко, есть дороги и указатели, рядом большой хаб из ТЛ.</p>

      <div class="space-y-2">
        <div class="text-sm opacity-80">Навигация (нужен мод TLPath):</div>
        {{< tlcopy cmd=".tlpath find 524 437" >}}
        <div class="text-sm opacity-80 pt-2">Маркер на карту:</div>
        {{< tlcopy cmd="/waypoint addati gear 524 110 437 false #FF0000 Храм Евангелиона" >}}
      </div>

      <a href="/ru/tourism/evangelion/" class="cta inline-flex mt-4">Подробнее о храме →</a>
    </div>

    <div class="card-glass p-0">
      {{< carousel items="1" height="300" unit="px" duration="6000" >}}
      <img src="/uploads/evangelion/1.png" alt="Храм Евангелиона — вид 1">
      <hr>
      <img src="/uploads/evangelion/2.png" alt="Храм Евангелиона — вид 2">
      <hr>
      <img src="/uploads/evangelion/3.png" alt="Храм Евангелиона — вид 3">
      <hr>
      <img src="/uploads/evangelion/4.png" alt="Храм Евангелиона — вид 4">
      {{< /carousel >}}
    </div>
  </section>

<!-- Place 2 -->
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div class="card-glass">
      <h3 class="text-lg font-semibold m-0">🔨 Перекрёстная кузница Дзэн — публичная высокоскоростная кузница</h3>
      <p class="mt-2 mb-3 opacity-90">Расположена на перекрёстке между Мидхейвеном и Джестауном. Здесь есть измельчитель и дробилка со скоростью ×25, а также два молота-кузнеца ×10, всё это работает от 64 ветряков. Кузница встроена в естественную пещеру светящихся червей, создавая атмосферное место для ковки.</p>

      <div class="space-y-2">
        <div class="text-sm opacity-80">Навигация (нужен TLPath):</div>
        {{< tlcopy cmd=".tlpath find -2276 10037" >}}
        <div class="text-sm opacity-80 pt-2">Маркер на карту:</div>
        {{< tlcopy cmd="/waypoint addati spiral -170 110 862 false purple TL to -5475, 7136" >}}
        {{< tlcopy cmd="/waypoint addati spiral -5747 110 6535 false purple TL to -2328, 10086" >}}
      </div>
    </div>

    <div class="card-glass p-0">
      {{< carousel items="1" height="300" unit="px" duration="6000" >}}
      <img src="/uploads/temporalwolf/1.jpeg" alt="Публичная кузница — вид 1">
      <hr>
      <img src="/uploads/temporalwolf/2.jpeg" alt="Публичная кузница — вид 2">
      <hr>
      <img src="/uploads/temporalwolf/3.jpeg" alt="Публичная кузница — вид 3">
      {{< /carousel >}}
    </div>
  </section>


</div>
{{< /raw >}}
