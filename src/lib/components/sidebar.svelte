<script lang="ts">
    import { NAVS } from '@/constants/navs';
    import { page } from '$app/state';
</script>

<aside>
	<nav class="sidebar">
		<ul class="sidebar-nav">
			<li class="logo bg-[#141418]">
				<a href="/" class="logo-link">
					<div class="link-text logo-text ml-10 overflow-visible h-11 flex items-center">
						<div>WuWaPal</div>
						<div class="absolute top-5 right-0 text-[.5rem] text-primary-500 font-bold">.com</div>
					</div>
					<img
						alt="Brand Logo"
						loading="lazy"
						decoding="async"
						class="w-10 min-w-10 mx-7"
						src="/android-chrome-192x192.png"
					/>
				</a>
			</li>
			{#each Object.entries(NAVS) as [category, items]}
				{#each items as { title, path, icon: Icon }}
					<li class="nav-item">
						<a
							href={path}
							class={`flex gap-3 text-xl items-center nav-link ${page.url.pathname.includes(path) ? 'bg-primary-500' : 'hover:bg-primary-500/20'}`}
						>
							<Icon class="w-8 min-w-8 md:ml-8" />
							<span class="link-text">
								{title}
							</span>
						</a>
					</li>
				{/each}
			{/each}
		</ul>
	</nav>
</aside>

<style>
	:root {
		--text-primary: #b6b6b6;
		--text-secondary: #ececec;
		--bg-primary: #23232e;
		--bg-secondary: #141418;
		--transition-speed: 600ms;
	}

	.sidebar {
		background-color: var(--bg-primary);
		transition: width 600ms ease;
		border-radius: 0.375rem; 
	}

	.sidebar-nav {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
	}

	.nav-item {
		width: 100%;
	}

	.nav-item:last-child {
		margin-top: auto;
	}

	.nav-link {
		display: flex;
		align-items: center;
		height: 5rem;
		text-decoration: none;
		/* filter: grayscale(100%) opacity(0.7); */
		transition: var(--transition-speed);
	}

	.logo-link {
		display: flex;
		align-items: center;
		height: 5rem;
		text-decoration: none;
		transition: var(--transition-speed);
	}

	.link-text {
		display: none;
		white-space: nowrap;
		overflow: hidden;
	}

	.logo {
		font-weight: bold;
		text-transform: uppercase;
		text-align: center;
		font-size: 1.5rem;
		letter-spacing: 0.3ch;
		width: 100%;
	}

	.logo img {
		transform: rotate(0deg);
		transition: var(--transition-speed);
	}

	.logo-text {
		display: inline;
		position: absolute;
		left: -999px;
		transition: var(--transition-speed);
	}

	.sidebar:hover .logo img {
		transform: rotate(-360deg);
	}

	/* Small screens */
	@media only screen and (max-width: 600px) {
		.sidebar {
			bottom: 0;
			width: 100vw;
			height: 5rem;
			position: fixed;
			overflow: scroll;
		}

		.logo {
			display: none;
		}

		.sidebar-nav {
			flex-direction: row;
		}

		.nav-link {
			justify-content: center;
		}

		.nav-item:last-child {
			margin-top: 0%;
		}
	}

	/* Large screens */
	@media only screen and (min-width: 600px) {
		.sidebar {
			top: 0;
			width: 6rem;
			height: 100vh;
		}

		.sidebar:hover {
			width: 16rem;
		}

		.sidebar:hover .link-text {
			display: inline;
		}

		.sidebar:hover .logo img {
			margin-left: 12rem;
		}

		.sidebar:hover .logo-text {
			left: -0.75rem;
			top: 1.65rem;
		}
	}
</style>
