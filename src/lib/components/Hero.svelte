<script lang="ts">
  // Partner and client logos
  const partners = [
    "RICS",
    "Property Mark",
    "SafeAgent"
  ];
</script>

<section class="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 bg-white">
  <div class="max-w-7xl mx-auto w-full py-32">
    <h1 class="text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight mb-12">
      Transforming underperforming property assets into high-value investments
    </h1>
    
    <p class="text-xl md:text-2xl text-gray-500 max-w-3xl leading-relaxed">
      Through data-led stewardship and strategic repositioning, we deliver consistent returns for property investors across Greater London and Southeast England.
    </p>
  </div>

  <div class="absolute bottom-12 left-6 md:left-16 lg:left-24 right-6 md:right-16 lg:right-24 border-t border-gray-200 pt-6 flex flex-wrap gap-6 md:gap-12 items-center text-xs uppercase tracking-wider text-gray-400">
    <div>Trusted by property investors</div>
    {#each partners as partner}
      <div class="font-medium text-gray-600">{partner}</div>
    {/each}
    <div class="ml-auto text-gray-600">2,000+ Assets Under Management</div>
  </div>
</section>
