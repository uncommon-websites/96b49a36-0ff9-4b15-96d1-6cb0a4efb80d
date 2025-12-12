<script lang="ts">
  import { scrollFade } from '$lib/actions/scrollFade';

  const photos = [
    {
      title: "Digital Infrastructure",
      desc: "Resident Portal, Partner Portal, and FixFlo integration ensure seamless communication and efficient operations.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Proactive Service",
      desc: "Regular inspections, sustainability audits, and tenant satisfaction surveys keep us ahead of issues.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Strategic Partnerships",
      desc: "We build long-term relationships with property investors through transparency and consistent performance.",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=400"
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
        Technology-enabled, relationship-focused
      </h2>
      <p 
        use:scrollFade={{ delay: 100, duration: 800 }}
        class="text-xl text-gray-500 leading-relaxed"
      >
        We combine cutting-edge digital tools with personal service. Our approach balances data-driven insights with human expertise, ensuring every property receives the strategic attention it deserves while maintaining operational efficiency at scale.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each photos as photo, i}
        <div 
          use:scrollFade={{ delay: i * 150, duration: 800 }}
          class="group cursor-pointer"
        >
          <div class="aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
            <img src={photo.img} alt={photo.title} class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          </div>
          <h4 class="text-sm uppercase tracking-wider text-gray-400 mb-2">{photo.title}</h4>
          <p class="text-sm text-gray-600 leading-relaxed">{photo.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
