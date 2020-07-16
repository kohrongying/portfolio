<script>
	import TailwindStyles from './TailwindStyles.svelte';
  let isDarkMode = true;
  

const toggle = () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    document.documentElement.style.setProperty('--bg-color', 'black');
    document.documentElement.style.setProperty('--color', 'white');
  } else {
    document.documentElement.style.setProperty('--bg-color', 'white');
    document.documentElement.style.setProperty('--color', 'black');
  }
}

</script>

<style>
:root {
  --bg-color: black;
  --color: white;
}

:global(body) {
	background-color: var(--bg-color);
  color: var(--color);
}

@media only screen and (max-width: 860px) {	
  #hero {
    height: 50vh;
  }
}

#hero {
  height: 80vh;
  background-image: linear-gradient(to bottom, rgba(255, 255,255, 0.3), var(--bg-color)), url('hero.jpg');
  background-size: cover;
  background-position-x: center;
  background-position-y: 85%;
}
#about .bg-image {
	background-image:  url('about.jpg');
	background-size: cover;
}

#portfolio .bg-image {
	background-image: url('works.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

#contact .bg-image {
	background-image: url('contact.jpg');
  background-size: cover;
  background-position: right;
}

a:hover {
  border-color: var(--color);
}

.my-link {
  @apply border-transparent border-solid border-b-2;
}

.section-title {
  @apply text-4xl font-bold leading-tight;
}

.form-label {
 @apply block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2;
}

.my-btn {
  @apply bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow;
}

</style>

<div class="max-w-screen-xl mx-auto">
  <ul class="fixed flex p-8 justify-end">
    <li class="mr-6 ">
      <a class="my-link" href="https://blog.rongying.co/">Blog</a>
    </li>
    <li class="mr-6">
      <a class="my-link" href="#contact">Contact</a>
    </li>
    <li class="mr-6">
      <a class="my-link" href="#about">About</a>
    </li>

    <li class="mr-6">
    {#if isDarkMode}
      <!-- Show sun -->
      <button on:click={toggle}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <circle cx="12" cy="12" r="4" />
          <path d="M3 12h1M12 3v1M20 12h1M12 20v1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7M17.7 17.7l.7 .7M6.3 17.7l-.7 .7" />
        </svg>
      </button>
      
    {:else}
    <!-- Show moon -->
    <button on:click={toggle}>
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
      </svg>
      </button>
    {/if}
    </li>
  </ul>
  </div>


<section id="hero" class=" bg-gray-100 flex items-center">
	<div class="max-w-screen-xl mx-auto w-full text-center md:text-left px-20 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">Hello you've reached<br> Rong Ying</div>
</section>

<section id="about" class="max-w-screen-xl mx-auto flex flex-wrap mt-16">
	<div class="w-full lg:w-1/2 bg-image h-64 lg:h-auto"></div>
	
	<div class="w-full lg:w-1/2 p-20 md:p-24 lg:p-32">
		<div class="section-title">New phone. Who dis?</div>
		<div class="text-2xl pt-8">She/her. A frontend software person. Singapore.</div>
	</div>
</section>

<section id="portfolio" class="max-w-screen-xl mx-auto flex flex-wrap mt-16 flex-col-reverse lg:flex-row">
	<div class="w-full lg:w-1/2 p-20 md:p-24 lg:p-32">
		<div class="section-title">I like building web products</div>
		<div class="text-2xl py-8">React. Svelte. Flutter. Firebase. Deno.</div>
    <button class="my-btn">Portfolio coming soon</button>
	</div>

  <div class="bg-image w-full lg:w-1/2 h-64 lg:h-auto"></div>
</section>

<section id="contact" class="max-w-screen-xl mx-auto flex flex-wrap mt-16">
	<div class="bg-image w-full lg:w-1/3 h-64 lg:h-auto"></div>
	
	<div class="w-full lg:w-2/3 p-20">
		<div class="section-title pb-8">Leave a message</div>
    <form name="contact-form" method="POST" netlify-honeypot="bot-field" netlify>
      <input type="hidden" name="form-name" value="contact-form" />

      <p class="hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </p>

       <div class="mb-6">
        <label class="form-label" for="name">
          Name
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="Name">
      </div>

      <div class="mb-6">
        <label class="form-label" for="email">
          Email
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" type="email" placeholder="example@abc.sg">
      </div>

      <div class="mb-6">
        <label class="form-label" for="message">
          Message
        </label>
        <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="message" placeholder="Say what you wanna say!"></textarea>
      </div>

      <button class="my-btn" type="submit">Send</button>

    </form>
	</div>
</section>

<section id="footer" class="max-w-screen-xl mx-auto flex flex-wrap px-20 mt-20 mb-10">
  <div class="w-full md:w-1/4 mb-10">
		<div class="section-title">Ok. Bye now.</div>
	</div>

  <div class="w-full md:w-3/4 flex flex-row justify-between items-center md:pl-16 mb-10">
    <a class="my-link" href="https://github.com/kohrongying">github</a>
    <a class="my-link" href="https://twitter.com/RongRunBuild">twitter</a>
    <a class="my-link" href="https://sg.linkedin.com/in/rongyingkoh">linkedin</a>
    <a class="my-link" href="https://codepen.io/kohrongying">codepen</a>
    <a class="my-link" href="https://blog.rongying.co/">blog</a>
  </div>
</section>