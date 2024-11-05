<script lang="ts">
  import { ExpansionPanel } from 'svelte-ux';

  const faqs = [
    {
      question: "What services do we offer?",
      answer: "Detailed answer about your services..."
    },
    {
      question: "How can we help you?",
      answer: "Information about your value proposition..."
    }
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <!-- Left Column -->
  <div class="space-y-6">
    <!-- Logo -->
    <div class="w-32 h-32 bg-surface-200 flex items-center justify-center rounded-lg">
      <span class="text-xl font-bold">LOGO</span>
    </div>

    <!-- Welcome Message -->
    <div class="prose">
      <h1 class="text-3xl font-bold text-surface-content">Welcome to BizzyBox</h1>
      <p class="text-surface-content/80">
        We're excited to showcase our services and solutions.
      </p>
    </div>

    <!-- Video Player -->
    <div class="aspect-w-16 aspect-h-9">
      <iframe
        class="w-full h-full rounded-lg"
        src="https://www.youtube.com/embed/your-video-id"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>

  <!-- Right Column -->
  <div class="bg-surface-100 p-6 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-6 text-surface-content">Frequently Asked Questions</h2>
    {#each faqs as faq}
      <ExpansionPanel class="mb-2">
        <svelte:fragment slot="header">
          {faq.question}
        </svelte:fragment>
        <p class="text-surface-content/80 p-4">{faq.answer}</p>
      </ExpansionPanel>
    {/each}
  </div>
</div>