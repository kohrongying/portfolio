<script>
	const src = "pic.png";
</script>

<style>
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