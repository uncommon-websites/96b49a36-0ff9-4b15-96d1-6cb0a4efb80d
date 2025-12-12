<script lang="ts">
  const projects = [
    {
      client: "Zenith House, Hampshire",
      desc: "Energy-efficient new development near Fleet Pond Nature Reserve with modern rental apartments.",
      bg: "bg-gray-100",
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
      dark: false
    },
    {
      client: "Heather Court, South London",
      desc: "Strategic repositioning of residential block delivering enhanced tenant satisfaction and value.",
      bg: "bg-gray-200",
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800",
      dark: false
    },
    {
      client: "The Spires, Surrey",
      desc: "Premium residential management with focus on community living and asset optimization.",
      bg: "bg-gray-100",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      dark: false
    },
    {
      client: "Pico Wharf, Essex",
      desc: "Mixed-use development repositioned for long-term value through data-led stewardship.",
      bg: "bg-gray-200",
      img: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=800",
      dark: false
    },
    {
      client: "Commercial Portfolio, Central London",
      desc: "Comprehensive asset management across 200+ commercial properties with sustainability focus.",
      bg: "bg-gray-100",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      dark: false,
      full: true
    },
    {
      client: "Sussex Mansions, East Sussex",
      desc: "Freehold management delivering exceptional community living and consistent returns.",
      bg: "bg-gray-200",
      img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
      dark: false
    },
    {
      client: "Bedford Park, South London",
      desc: "Block management with proactive maintenance and transparent performance reporting.",
      bg: "bg-gray-100",
      img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
      dark: false
    }
  ];
</script>

<section class="px-6 md:px-16 lg:px-24 py-32 bg-white">
  <div class="max-w-7xl mx-auto">
    <div class="mb-24">
      <h2 class="text-4xl md:text-6xl font-medium leading-tight mb-8">
        Featured properties
      </h2>
      <p class="text-xl text-gray-500 max-w-3xl">
        We manage 2,000+ properties across Greater London and Southeast England, transforming underperforming assets into high-value investments through strategic repositioning and data-led stewardship.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each projects as project}
        <div class="group cursor-pointer {project.full ? 'md:col-span-2' : ''}">
          <div class={`aspect-[4/3] w-full overflow-hidden relative bg-gray-100 mb-6 ${project.full ? 'md:aspect-[2.5/1]' : ''}`}>
            {#if project.img}
               <img src={project.img} alt={project.client} class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
            {:else}
               <!-- Placeholder for logos on solid bg -->
               <div class="w-full h-full flex items-center justify-center">
                  <span class={`text-2xl font-bold ${project.dark ? 'text-white' : 'text-black'}`}>{project.client} Logo</span>
               </div>
            {/if}
          </div>
          <h3 class="text-base font-medium mb-2">{project.client}</h3>
          <p class="text-sm text-gray-500 leading-relaxed">{project.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
