document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('posts-container');
    const loadState = document.getElementById('loading');
    
    try {
        const posts = await window.API.getPosts();
        
        loadState.classList.add('hidden');
        container.classList.remove('hidden');

        if (posts.length === 0) {
            container.innerHTML = '<p class="text-stone-500">No discussions found.</p>';
            return;
        }

        posts.forEach(post => {
            const card = document.createElement('div');
            // Adding a dynamic border based on categoryColor for visual distinction
            const borderClass = post.categoryColor === 'primary' ? 'border-primary' : 'border-secondary';
            
            card.className = `p-6 bg-surface-container-low rounded-xl border-l-4 ${borderClass} hover:translate-x-2 transition-transform cursor-pointer`;
            
            card.innerHTML = `
                <div class="flex justify-between items-start mb-2">
                    <h4 class="text-xl font-bold">${post.title}</h4>
                    <span class="text-xs text-on-surface-variant bg-surface-container px-2 py-1 rounded whitespace-nowrap ml-4">
                        ${post.timeAgo}
                    </span>
                </div>
                <div class="flex items-center gap-2 mb-3">
                    <span class="text-xs font-bold uppercase tracking-widest text-${post.categoryColor}">${post.category}</span>
                    <span class="text-stone-300">•</span>
                    <span class="text-xs text-stone-500">by ${post.author}</span>
                </div>
                <p class="text-sm text-on-surface-variant mb-4">${post.snippet}</p>
                <div class="flex items-center gap-4 text-xs font-bold text-primary">
                    <span class="flex items-center gap-1">
                        <span class="material-symbols-outlined text-sm">chat_bubble</span> ${post.replies} Replies
                    </span>
                    <span class="flex items-center gap-1">
                        <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">favorite</span> ${post.likes} Likes
                    </span>
                </div>
            `;
            container.appendChild(card);
        });

    } catch (e) {
        loadState.innerHTML = '<span class="text-secondary font-bold">Failed to load discussions.</span>';
    }
});
