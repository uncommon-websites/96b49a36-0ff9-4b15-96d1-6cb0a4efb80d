<script lang="ts">
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

<section class="py-24 px-6 md:px-12 bg-white">
  <div class="max-w-xl mb-16">
    <h3 class="text-lg font-bold mb-2">Technology-enabled, relationship-focused.</h3>
    <p class="text-gray-500 text-sm leading-relaxed">
      We combine cutting-edge digital tools with personal service. Our approach balances data-driven insights with human expertise, ensuring every property receives the strategic attention it deserves while maintaining operational efficiency at scale.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each photos as photo}
      <div>
        <div class="aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-gray-100">
          <img src={photo.img} alt={photo.title} class="w-full h-full object-cover" />
        </div>
        <h4 class="text-xs font-bold mb-1">{photo.title}</h4>
        <p class="text-[10px] text-gray-500 leading-relaxed">{photo.desc}</p>
      </div>
    {/each}
  </div>
</section>
