<script>
	const name = 'world'
	const src = "pic.png";
	const MAX_HEIGHT = window.innerHeight;

	const repos = [
		{
			name: "Expense Tracker",
			desc: "PWA that helps to keep track of your daily expenses",
			url: "https://imma-save-more-money.netlify.com/",
			github_url: "https://github.com/kohrongying/expenses-tracker"
		},
		{
			name: "Telegram News Bot",
			desc: "A Telegram bot that delivers news",
			url: "https://telegram.me/ry_news_chat_bot",
			github_url: "https://github.com/kohrongying/telegram-news-bot"
		},
		{
			name: "Hex 2 RGB",
			desc: "Convert rgba to hex (with transparency support)",
			url: "https://kohrongying.github.io/hex-to-rgba/",
			github_url: "https://github.com/kohrongying/hex-to-rgba"
		},
		{
			name: "Avatar Generator",
			desc: "A python CLI tool to generate avatar sprites",
			url: "https://github.com/kohrongying/avatar-generator",
			github_url: "https://github.com/kohrongying/avatar-generator"
		},
		{
			name: "CSS Battle",
			desc: "My participation in cssbattle.dev",
			url: "https://github.com/kohrongying/css-battle",
			github_url: "https://github.com/kohrongying/css-battle"
		},
		{
			name: "CSS Images",
			desc: "Images made from pure CSS",
			url: "https://kohrongying.github.io/css-images",
			github_url: "https://github.com/kohrongying/css-images"
		},
		{
			name: "Danang",
			desc: "A video journey of my trip to Danang, Vietnam",
			url: "https://kohrongying.github.io/danang/",
			github_url: "https://github.com/kohrongying/danang"
		},
		{
			name: "Spotlight",
			desc: "A fully CSS solution that creates new insight when you hover over the picture.",
			url: "https://kohrongying.github.io/spotlight/",
			github_url: "https://github.com/kohrongying/spotlight"
		},
		{
			name: "Hoppip",
			desc: "A framework-less solution to full page transitions",
			url: "https://kohrongying.github.io/hoppip/",
			github_url: "https://github.com/kohrongying/hoppip"
		},		
	]
</script>

<style>
	@media screen and (prefers-color-scheme: light) {
		body {
			background-color: white;
			color: black;
		}
	}
	#left-fixed {
		background-color: salmon;
		height: 100vh;
		width: 30vw;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: fixed;
	}

	#right-fixed {
		width: 70vw;
		float: right;
	}

	#card-container {
		margin: 20px;
		display: flex;
		flex-wrap: wrap;
		padding: 25px;
		justify-content: space-between;
	}

	.card {
		width: 40%;
		margin: 15px;
		padding: 15px;
		box-shadow: #cccccc63 1px 1px 6px 2px;
	}

	.title-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	#contactme {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.contact-link {
		width: 50px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

</style>

<div>
	<section id="left-fixed">
		<img {src} alt="pic" width=100 />
		<div id="contactme">
		<a class="contact-link" href="https://github.com/kohrongying">
			<img src="github-icon.png" alt='github' width=40 />
		</a>
		<a class="contact-link" href="mailto:kohrongying@gmail.com?Subject=Hello">
			<img src="mail-icon.png" alt='mail' width=25 />
		</a>
		<a class="contact-link" href="https://sg.linkedin.com/in/rongyingkoh">
			<img src="lnkedin-icon.png" alt='linkedin' width=30 />
		</a>
		</div>
	</section>

	<section id="right-fixed">
		<div id="card-container">
			{#each repos as repo}
				<div class="card">

					<div class="title-container">

						<a href={repo.url}>
							{repo.name}
						</a>
							<a href={repo.github_url}>
								<img src="github-icon.png" alt='github' width=40 />
							</a>
					</div>
					<span>{repo.desc}</span>



				</div>
			{/each}
		</div>
	</section>
</div>