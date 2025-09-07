---
title: "Дополнить информацию на сайте"
layout: single
showHero: true
heroStyle: "background"
showAuthor: false
showDate: false
showWordCount: false
showReadingTime: false
layoutBackgroundHeaderSpace: false
---

Хотите добавить точку на карте, маршрут, город или новость? Отправьте заявку — модераторы проверят и опубликуют.

{{< raw >}}
<div class="not-prose max-w-3xl mx-auto">

  <div class="grid sm:grid-cols-2 gap-4 mb-8">
    <div class="rounded-xl ring-1 ring-slate-200 bg-white p-4">
      <div class="text-sm text-slate-500">Что прислать</div>
      <ul class="mt-2 text-sm list-disc list-inside text-slate-700 space-y-1">
        <li>Название и краткое описание</li>
        <li>Координаты/ссылки, если есть</li>
        <li>Скриншоты или источники</li>
      </ul>
    </div>
    <div class="rounded-xl ring-1 ring-slate-200 bg-white p-4">
      <div class="text-sm text-slate-500">После отправки</div>
      <ul class="mt-2 text-sm list-disc list-inside text-slate-700 space-y-1">
        <li>Проверка модератором</li>
        <li>Уточнение деталей</li>
        <li>Публикация на сайте</li>
      </ul>
    </div>
  </div>

  <div id="alert" class="hidden mb-4 rounded-lg p-3 text-sm" role="status" aria-live="polite"></div>

  <form id="feedbackForm" class="rounded-2xl ring-1 ring-slate-200 bg-white p-5">
    <h3 class="mb-4 text-lg font-semibold">💡 Предложения и пожелания</h3>

    <!-- honeypot -->
    <input type="text" name="website" class="hidden" tabindex="-1" autocomplete="off" aria-hidden="true">

    <label class="block mb-4">
      <span class="block text-sm font-medium text-slate-700">Ник в игре</span>
      <input type="text" name="name" required
             class="mt-1 w-full p-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500">
      <div data-err="name" class="hidden mt-1 text-xs text-red-600"></div>
    </label>

    <label class="block mb-4">
      <span class="block text-sm font-medium text-slate-700">Ник в Telegram (необязательно)</span>
      <input type="text" name="telegram" placeholder="@nickname"
             class="mt-1 w-full p-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500">
      <div data-err="telegram" class="hidden mt-1 text-xs text-red-600"></div>
    </label>

    <label class="block mb-4">
      <div class="flex items-center justify-between">
        <span class="block text-sm font-medium text-slate-700">Описание</span>
        <span id="counter" class="text-xs text-slate-400">0/2000</span>
      </div>
      <textarea name="message" rows="6" required maxlength="2000"
                class="mt-1 w-full p-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"></textarea>
      <div data-err="message" class="hidden mt-1 text-xs text-red-600"></div>
    </label>

    <div class="text-xs text-slate-500 mb-3">Отправляя форму, вы соглашаетесь с модерацией и публикацией.</div>

    <button type="submit" id="submitBtn"
      class="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-5 rounded-xl shadow transition disabled:opacity-60">
      <svg id="spinner" class="hidden animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
      </svg>
      <span id="btnText">Отправить</span>
    </button>
  </form>
</div>

<script>
(function(){
  const form = document.getElementById("feedbackForm");
  const btn  = document.getElementById("submitBtn");
  const spin = document.getElementById("spinner");
  const txt  = document.getElementById("btnText");
  const alertBox = document.getElementById("alert");
  const counter = document.getElementById("counter");
  const endpoint = "https://obratka.vercel.app/api/send";
  const tgRe = /^@?[A-Za-z0-9_]{3,32}$/; // своя валидация, без HTML pattern

  form.message.addEventListener("input", () => {
    counter.textContent = form.message.value.length + "/2000";
  });

  function setErr(field, msg){
    const el = form.querySelector('[data-err="'+field+'"]');
    if (!el) return;
    if (msg){ el.textContent = msg; el.classList.remove("hidden"); }
    else    { el.textContent = "";  el.classList.add("hidden"); }
  }
  function showAlert(ok, msg){
    alertBox.className = "mb-4 rounded-lg p-3 text-sm " + (ok
      ? "bg-green-50 text-green-700 ring-1 ring-green-200"
      : "bg-red-50 text-red-700 ring-1 ring-red-200");
    alertBox.textContent = msg;
    alertBox.classList.remove("hidden");
  }

  form.addEventListener("submit", async (e)=>{
    e.preventDefault();

    // honeypot
    if (form.website.value) return;

    const name = form.name.value.trim();
    const message = form.message.value.trim();
    let telegram  = form.telegram.value.trim();

    setErr("name"); setErr("message"); setErr("telegram");

    if (!name){ setErr("name","Укажите ник."); form.name.focus(); return; }
    if (!message){ setErr("message","Опишите предложение."); form.message.focus(); return; }
    if (telegram && !tgRe.test(telegram)){ setErr("telegram","Формат: @nickname"); form.telegram.focus(); return; }
    if (telegram && telegram[0] !== "@") telegram = "@"+telegram;

    // простая защита от спама
    const now = Date.now();
    const last = +localStorage.getItem("callme_last_ru")||0;
    if (now - last < 30000){ showAlert(false,"Слишком часто. Попробуйте позже."); return; }

    btn.disabled = true; spin.classList.remove("hidden"); txt.textContent = "Отправка…";
    try{
      const res = await fetch(endpoint, {
        method:"POST", headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ name, telegram, message })
      });
      if (res.ok){
        showAlert(true,"Готово! Мы получили вашу заявку.");
        form.reset(); counter.textContent = "0/2000";
        localStorage.setItem("callme_last_ru", String(now));
      }else{
        showAlert(false,"Ошибка сервера. Попробуйте позже.");
      }
    }catch{
      showAlert(false,"Ошибка сети.");
    }finally{
      btn.disabled = false; spin.classList.add("hidden"); txt.textContent = "Отправить";
    }
  });
})();
</script>
{{< /raw >}}
