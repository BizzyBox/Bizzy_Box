<script lang="ts">
  import "../app.css";
  import { AppBar } from 'svelte-ux';
</script>

<AppBar class="bg-surface-200">
  <svelte:fragment slot="title">
    <span class="text-xl font-bold">BizzyBox</span>
  </svelte:fragment>
  
  <svelte:fragment slot="actions">
    <a href="#contact" class="text-surface-content hover:text-primary">Contact</a>
  </svelte:fragment>
</AppBar>

<main class="container mx-auto px-4 py-8">
  <slot />
</main>