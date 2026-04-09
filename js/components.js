class AppHeader extends HTMLElement {
    connectedCallback() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        
        const isCurrent = (path) => currentPath === path ? 'border-b-2 border-green-800 dark:border-green-400 text-green-900 border-b-2' : 'border-b-2 border-transparent hover:text-green-700 transition-colors text-stone-600 dark:text-stone-400';

        this.innerHTML = `
            <nav class="fixed top-0 w-full z-50 bg-white/70 dark:bg-stone-900/70 backdrop-blur-md shadow-[0_8px_32px_rgba(26,28,25,0.08)]">
                <div class="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
                    <div class="flex items-center gap-8">
                        <a href="index.html" class="text-2xl font-headline font-bold text-green-900 dark:text-green-50 tracking-tight">Blossom Bae</a>
                        <div class="hidden md:flex gap-6">
                            <a class="font-headline font-bold tracking-tight pb-1 ${isCurrent('index.html')}" href="index.html">Home</a>
                            <a class="font-headline font-bold tracking-tight pb-1 ${isCurrent('shop.html')}" href="shop.html">Shop</a>
                            <a class="font-headline font-bold tracking-tight pb-1 ${isCurrent('services.html')}" href="services.html">Services</a>
                            <a class="font-headline font-bold tracking-tight pb-1 ${isCurrent('community.html')}" href="community.html">Community</a>
                            <a class="font-headline font-bold tracking-tight pb-1 ${isCurrent('about.html')}" href="about.html">About</a>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="hidden lg:flex items-center bg-stone-100/50 dark:hover:bg-stone-800/50 rounded-lg px-3 py-1.5 transition-all duration-300 ease-in-out">
                            <span class="material-symbols-outlined text-stone-500 text-sm">search</span>
                            <input class="bg-transparent border-none focus:ring-0 text-sm w-48 font-label" placeholder="Search plants..." type="text" />
                        </div>
                        <button class="p-2 hover:bg-stone-100/50 dark:hover:bg-stone-800/50 rounded-lg transition-all">
                            <span class="material-symbols-outlined text-green-800 dark:text-green-400">shopping_cart</span>
                        </button>
                        <button class="p-2 hover:bg-stone-100/50 dark:hover:bg-stone-800/50 rounded-lg transition-all">
                            <span class="material-symbols-outlined text-green-800 dark:text-green-400">person</span>
                        </button>
                    </div>
                </div>
            </nav>
        `;
    }
}

class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-stone-100 dark:bg-stone-900 w-full py-12 px-8 mt-auto border-t-0">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <div>
                        <span class="font-headline italic text-xl text-green-900 dark:text-green-400 mb-6 block">Blossom Bae</span>
                        <p class="font-body text-xs uppercase tracking-widest text-stone-500 mb-6 leading-relaxed">
                            © 2024 Blossom Bae. Rooted in tranquility. Our mission is to reconnect urban spaces with the soul of nature through curated botanical experiences.
                        </p>
                        <div class="flex gap-4">
                            <span class="material-symbols-outlined text-green-800 cursor-pointer hover:opacity-100 opacity-80">social_leaderboard</span>
                            <span class="material-symbols-outlined text-green-800 cursor-pointer hover:opacity-100 opacity-80">camera</span>
                            <span class="material-symbols-outlined text-green-800 cursor-pointer hover:opacity-100 opacity-80">mail</span>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        <span class="font-body text-xs uppercase tracking-widest text-stone-900 dark:text-stone-100 font-bold">Quick Links</span>
                        <a class="font-body text-xs uppercase tracking-widest text-stone-500 hover:text-green-700 transition-opacity duration-200" href="#">Support</a>
                        <a class="font-body text-xs uppercase tracking-widest text-stone-500 hover:text-green-700 transition-opacity duration-200" href="#">Newsletter</a>
                        <a class="font-body text-xs uppercase tracking-widest text-stone-500 hover:text-green-700 transition-opacity duration-200" href="#">Shipping Info</a>
                        <a class="font-body text-xs uppercase tracking-widest text-stone-500 hover:text-green-700 transition-opacity duration-200" href="#">Privacy</a>
                    </div>
                    <div>
                        <span class="font-body text-xs uppercase tracking-widest text-stone-900 dark:text-stone-100 font-bold mb-4 block">Our Newsletter</span>
                        <p class="text-xs text-stone-500 mb-4 font-body uppercase tracking-widest">Join our garden club for tips and first access to rare drops.</p>
                        <div class="flex bg-white dark:bg-stone-800 rounded-lg overflow-hidden p-1 shadow-sm">
                            <input class="bg-transparent border-none focus:ring-0 text-xs flex-1 px-3" placeholder="email@address.com" type="email" />
                            <button class="bg-primary text-on-primary px-4 py-2 text-[10px] font-bold uppercase tracking-tighter rounded-md">Join</button>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);
