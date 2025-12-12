<script lang="ts">
  const stats = [
    {
      label: "2,000+ Properties",
      desc: "Our portfolio spans residential, commercial, mixed-use developments, and freehold management across Greater London and Southeast England. From studio apartments to large commercial portfolios, we deliver comprehensive asset management at scale.",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=200"
    },
    {
      label: "Expert Leadership Team",
      desc: "Led by experienced department heads in Asset Management, Property Management, Facilities Management, and Leasing. Our 17+ strong team brings deep expertise in repositioning underperforming assets and delivering consistent returns.",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=200"
    },
    {
      label: "Finchley, North London",
      desc: "Based in Finchley (N3), we're strategically positioned to serve property investors across Greater London and Southeast England. Our local presence ensures responsive service and deep market knowledge across all our operating regions.",
      img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=200"
    },
    {
      label: "RICS Standards",
      desc: "We adhere to RICS provisions for client money handling and maintain the highest standards of compliance, health and safety, and professional conduct. Our commitment to transparency and accountability sets us apart in the property management sector.",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=200"
    }
  ];
</script>

<section class="py-24 px-6 md:px-12 bg-white border-t border-gray-100">
  <div class="mb-16">
    <p class="text-gray-500 max-w-xl">
      Curious about Woodfell? Here's a snapshot of our scale, expertise, and the standards that drive everything we do.
    </p>
  </div>

  <div class="space-y-16">
    {#each stats as stat}
      <div class="flex flex-col md:flex-row md:items-start justify-between gap-8 border-b border-gray-100 pb-16 last:border-0">
        <h3 class="text-2xl md:text-4xl font-medium w-full md:w-1/3">{stat.label}</h3>
        <div class="w-full md:w-1/3">
           <p class="text-xs leading-relaxed text-gray-500">{stat.desc}</p>
        </div>
        <div class="w-full md:w-1/6 flex justify-end">
           <img src={stat.img} alt={stat.label} class="w-20 h-20 object-cover rounded bg-gray-100" />
        </div>
      </div>
    {/each}
  </div>
</section>
