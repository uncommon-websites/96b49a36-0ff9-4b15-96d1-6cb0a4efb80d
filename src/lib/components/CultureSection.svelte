<script lang="ts">
  import { scrollFade } from '$lib/actions/scrollFade';

  const cards = [
    {
      title: "Performance",
      subtitle: "Setting a New Benchmark for Long-Term Value",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Integrity",
      subtitle: "Transparent Reporting, Honest Communication",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Excellence",
      subtitle: "Exceeding Expectations in Every Detail",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
    }
  ];
</script>

<section class="py-32 px-6 md:px-16 lg:px-24 bg-white">
  <div class="max-w-7xl mx-auto">
    <div class="max-w-3xl mb-24">
      <h2 
        use:scrollFade={{ delay: 0, duration: 800 }}
        class="text-4xl md:text-6xl font-medium leading-tight mb-8"
      >
        Our core values
      </h2>
      <p 
        use:scrollFade={{ delay: 100, duration: 800 }}
        class="text-xl text-gray-500 leading-relaxed"
      >
        We're not just property managers—we're strategic partners committed to strengthening your assets, enhancing lives, and exceeding expectations through care, clarity, and insight.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each cards as card, i}
        <div 
          use:scrollFade={{ delay: i * 150, duration: 800 }}
          class="group cursor-pointer"
        >
          <div class="aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
            <img src={card.image} alt={card.title} class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105" />
          </div>
          <h3 class="text-sm uppercase tracking-wider text-gray-400 mb-2">{card.title}</h3>
          <p class="text-base font-medium">{card.subtitle}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
