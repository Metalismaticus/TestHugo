---
title: "Tourism"
---
[📍 Go to the list of cities →](/tourism/towns/)
## Top points of interest

{{< raw >}}
<div class="not-prose space-y-6">

  <!-- CTA: submit your place -->
  <div class="card-glass flex items-center justify-between gap-4">
    <p class="m-0">Want your place featured? You can submit it via the feedback form.</p>
    <a href="/call_me/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition">
      <span class="font-medium">Submit your place</span> →
    </a>
  </div>

  <!-- Place 1 -->
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div class="card-glass">
      <h3 class="text-lg font-semibold m-0">🏛️ Evangelion Temple</h3>
      <p class="mt-2 mb-3 opacity-90">Right at spawn. Say a prayer for the Evangelion end-wipe and head out. Easy to find: roads and signposts nearby, plus a large TL hub.</p>

      <div class="space-y-2">
        <div class="text-sm opacity-80">Navigation (TLPath required):</div>
        {{< tlcopy cmd=".tlpath find 524 437" >}}
        <div class="text-sm opacity-80 pt-2">Map waypoint:</div>
        {{< tlcopy cmd="/waypoint addati gear 524 110 437 false #FF0000 Evangelion Temple" >}}
      </div>

      <a href="/tourism/evangelion/" class="cta inline-flex mt-4">Learn more →</a>
    </div>

    <div class="card-glass p-0">
      {{< carousel items="1" height="300" unit="px" duration="6000" >}}
      <img src="/uploads/evangelion/1.png" alt="Evangelion Temple — view 1">
      <hr>
      <img src="/uploads/evangelion/2.png" alt="Evangelion Temple — view 2">
      <hr>
      <img src="/uploads/evangelion/3.png" alt="Evangelion Temple — view 3">
      <hr>
      <img src="/uploads/evangelion/4.png" alt="Evangelion Temple — view 4">
      {{< /carousel >}}
    </div>
  </section>

<!-- Place 2 -->
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div class="card-glass">
      <h3 class="text-lg font-semibold m-0">🔨 The Crossroads Zen Forge - Public high speed forge</h3>
      <p class="mt-2 mb-3 opacity-90">Located in the crossroads between Midhaven and Jestown, it offers 25x speed pulverizing and grinding, and two 10x speed helve hammers all powered by 64 windmills. Built into a natural glow worm cave, it's an atmospheric place to get your smithing done.</p>

      <div class="space-y-2">
        <div class="text-sm opacity-80">Navigation (TLPath required):</div>
        {{< tlcopy cmd=".tlpath find -2276 10037" >}}
        <div class="text-sm opacity-80 pt-2">Map waypoint:</div>
        {{< tlcopy cmd="/waypoint addati spiral -170 110 862 false purple TL to -5475, 7136" >}}
        {{< tlcopy cmd="/waypoint addati spiral -5747 110 6535 false purple TL to -2328, 10086" >}}
      </div>
    </div>

    <div class="card-glass p-0">
      {{< carousel items="1" height="300" unit="px" duration="6000" >}}
      <img src="/uploads/temporalwolf/1.jpeg" alt="Public forge — view 1">
      <hr>
      <img src="/uploads/temporalwolf/2.jpeg" alt="Public forge — view 2">
      <hr>
      <img src="/uploads/temporalwolf/3.jpeg" alt="Public forge — view 3">
      {{< /carousel >}}
    </div>
  </section>

</div>
{{< /raw >}}
