<script>
	const src = "pic.png";
</script>

<style>
	#left-fixed {
		background-color: mediumturquoise;
	}
	#left-wrapper {
		display: flex;
		align-items: center;
		flex-direction: column;
		top: 0;
		position: sticky;
	}
	#me {
		padding-top: 50px;
	}
	#contactme {
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding-bottom: 50px;
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
	<div id="left-wrapper">
		<img id="me" {src} alt="pic" width=100 />
		<div id="contactme">
			<a class="contact-link" href="https://blog.rongying.co">
				<img src="face-icon.png" alt='person' width=30 />
			</a>
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
	</div>
</section>