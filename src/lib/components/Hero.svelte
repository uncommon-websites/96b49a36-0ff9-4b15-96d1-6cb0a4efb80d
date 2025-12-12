<script lang="ts">
  // Partner and client logos
  const partners = [
    "RICS",
    "Property Mark",
    "SafeAgent"
  ];
</script>

<section class="relative min-h-screen flex flex-col justify-end pb-20 px-6 md:px-12 bg-gradient-to-b from-gray-900 via-gray-700 to-white text-[#1a1a1a]">
  <!-- Gradient overlay/background handling -->
  <div class="absolute inset-0 z-[-1] bg-[linear-gradient(180deg,#0a0a0a_0%,#2a2a2a_30%,#6a6a6a_60%,#fff_100%)]"></div>

  <div class="max-w-4xl mb-32 pt-40">
    <h1 class="text-3xl md:text-5xl font-medium leading-[1.15] tracking-tight">
      Transforming underperforming property assets into high-value investments. <span class="text-gray-500">Through data-led stewardship and strategic repositioning, we deliver consistent returns for property investors across Greater London and Southeast England.</span>
    </h1>
  </div>

  <div class="border-t border-gray-300 pt-8 flex flex-wrap gap-8 md:gap-16 items-center opacity-60">
    <div class="text-xs uppercase tracking-wide text-gray-600 font-medium">Trusted by property investors</div>
    {#each partners as partner}
      <div class="h-8 flex items-center justify-center font-semibold text-sm text-gray-700">{partner}</div>
    {/each}
    <div class="h-8 flex items-center justify-center text-sm text-gray-600">2,000+ Assets Under Management</div>
  </div>
</section>
