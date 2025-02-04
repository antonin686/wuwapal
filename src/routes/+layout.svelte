<script lang="ts">
	import '../app.postcss';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { initializeStores } from '@skeletonlabs/skeleton';
	import { SvelteKitTopLoader } from 'sveltekit-top-loader';
	import Sidebar from '$lib/components/sidebar.svelte';

	initializeStores();
	let { children } = $props();
</script>

<div class="flex">
	<SvelteKitTopLoader color="#D4163C" />
	<Sidebar />
	<main class="flex flex-col md:h-screen container mx-auto p-10 gap-10">
		{@render children()}
	</main>
</div>
