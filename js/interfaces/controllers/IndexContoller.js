
import Index from '/js/interfaces/presenters/Index.svelte';


class IndexController {

	constructor() {

	}


	index(context) {
		document.getElementById('app').innerText = ''
		const app = new Index({
			target: document.getElementById('app'),
			props: {
				category: 'index',
				article: 'index',
			},
		})
		// console.log(hljs)
		// hljs.highlightAll()
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightBlock(block);
		});
	}

}


export default IndexController;
