---
title: "TOPS Server Fan Portal"
---

{{< carousel items="1" height="500" unit="px" duration="7000" />}}

{{< raw >}}
<div class="not-prose space-y-8 mt-8">

  <div class="card-glass prose prose-invert max-w-none">
    <p><strong>TOPS GUIDE</strong> — news, guides, routes, and handy tools for players.</p>
    <p>The site is useful for both newcomers and veterans: popular places and towns of the server, plus a guide to the ancient world of TOPS.</p>
  </div>

  <section>
    <h3 class="mb-3 text-lg font-semibold">What’s inside</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="card-glass">
        <div class="font-semibold">Guides</div>
        <ul class="text-sm mt-2 list-disc list-inside space-y-1">
          <li>Chisel, claims, transportation</li>
          <li>Step-by-step how-tos and quick cheat sheets</li>
        </ul>
        <a class="cta inline-flex mt-3" href="{{< relref "guide/_index.md" >}}">Browse guides →</a>
      </div>

      <div class="card-glass">
        <div class="font-semibold">Towns & routes</div>
        <ul class="text-sm mt-2 list-disc list-inside space-y-1">
          <li>Settlement overviews</li>
          <li>Ready-to-use navigation commands</li>
        </ul>
        <a class="cta inline-flex mt-3" href="{{< relref "tourism/towns/_index.md" >}}">Open towns list →</a>
      </div>

      <div class="card-glass">
        <div class="font-semibold">Mods</div>
        <ul class="text-sm mt-2 list-disc list-inside space-y-1">
          <li>Must-have picks</li>
          <li>Install & updates</li>
        </ul>
        <a class="cta inline-flex mt-3" href="{{< relref "mods/_index.md" >}}">Mods →</a>
      </div>
    </div>
  </section>

  <section>
    <h3 class="mb-3 text-lg font-semibold">Install TLPath (recommended)</h3>
    <div class="card-glass">
      <p class="mb-3">The server map is huge and routes are often complex. The <strong>TLPath</strong> mod is recommended for navigation: it builds the shortest path from your coordinates, guides you point-to-point, and helps find Translocators. Without it, route-building commands from this site won’t work.</p>

      <a href="https://mods.vintagestory.at/show/mod/27985" target="_blank" rel="noopener"
         class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-80" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4.007 4.007a1 1 0 0 1-1.414 0L7.28 11.707a1 1 0 1 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1z"/><path d="M5 15a1 1 0 1 0-2 0v2a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-2a1 1 0 1 0-2 0v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2z"/></svg>
        <span class="font-medium">Download TLPath</span>
      </a>
    </div>
  </section>

  <section>
    <h3 class="mb-3 text-lg font-semibold">Quick start</h3>
    <div class="card-glass">
      <p class="mb-3">Paste this command in chat to build a route to <strong>Bronze City</strong>:</p>
      <p class="text-sm mb-2"><strong>TLPath mod required.</strong></p>
      {{< tlcopy cmd=".tlpath find -700 17028" mod="TLPath" link="https://mods.vintagestory.at/show/mod/27985" >}}
      <p class="text-sm opacity-80 mt-3">Tip: follow roads and wayposts — that’s often the fastest path.</p>
      <p class="mt-3">Server map: <a href="https://map.tops.vintagestory.at/?x=-1&y=17&zoom=10" target="_blank" rel="noopener">map.tops.vintagestory.at</a></p>
    </div>
  </section>

<section>
  <h3 class="mb-3 text-lg font-semibold">Contact</h3>
  <div class="card-glass p-6 space-y-4 text-center">
    <p class="opacity-90">
      Got server news, an interesting place, or want to add your city here? Write to me.
    </p>
    <a href="/ru/call_me/" class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition">
      <span class="font-medium">✉️ Contact me</span>
    </a>
  </div>
</section>

</div>
{{< /raw >}}
