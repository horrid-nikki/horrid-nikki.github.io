document.addEventListener('DOMContentLoaded', async () => {
    const grid = document.getElementById('product-grid');
    const loadState = document.getElementById('loading');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    let allProducts = [];

    // Fetch and render initial products
    try {
        allProducts = await window.API.getProducts();
        renderProducts(allProducts);
        
        loadState.classList.add('hidden');
        grid.classList.remove('hidden');
    } catch (e) {
        loadState.innerHTML = '<span class="text-secondary font-bold">Failed to load products.</span>';
    }

    // Filter logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => {
                b.classList.remove('active', 'border-primary', 'text-primary');
                b.classList.add('border-outline-variant', 'text-stone-500');
            });
            btn.classList.add('active', 'border-primary', 'text-primary');
            btn.classList.remove('border-outline-variant', 'text-stone-500');

            // Apply filter
            const category = btn.dataset.category;
            if (category === 'all') {
                renderProducts(allProducts);
            } else {
                const filtered = allProducts.filter(p => p.category === category);
                renderProducts(filtered);
            }
        });
    });

    function renderProducts(products) {
        grid.innerHTML = '';
        if (products.length === 0) {
            grid.innerHTML = '<p class="col-span-full text-center text-stone-500">No products found in this category.</p>';
            return;
        }

        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col';
            card.innerHTML = `
                <div class="h-64 overflow-hidden relative">
                    <img src="${product.image}" alt="${product.alt}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-primary drop-shadow-sm">
                        ${product.category}
                    </div>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-headline font-bold mb-2">${product.name}</h3>
                    <div class="mt-auto flex justify-between items-center pt-4">
                        <span class="text-lg font-bold text-primary">₹${product.price.toFixed(2)}</span>
                        <button class="bg-primary/10 text-primary p-2 rounded-lg hover:bg-primary hover:text-white transition-colors">
                            <span class="material-symbols-outlined text-sm">add_shopping_cart</span>
                        </button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }
});
