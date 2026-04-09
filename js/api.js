const API = {
    /**
     * Fetch products from the mock JSON backend
     * @returns {Promise<Array>} List of product objects
     */
    async getProducts() {
        try {
            const response = await fetch('./data/products.json');
            if (!response.ok) throw new Error('Failed to fetch products');
            // Adding artificial delay to simulate real network request
            await new Promise(resolve => setTimeout(resolve, 600)); 
            return await response.json();
        } catch (error) {
            console.error(error);
            return [];
        }
    },

    /**
     * Fetch community posts from the mock JSON backend
     * @returns {Promise<Array>} List of post objects
     */
    async getPosts() {
        try {
            const response = await fetch('./data/posts.json');
            if (!response.ok) throw new Error('Failed to fetch posts');
            await new Promise(resolve => setTimeout(resolve, 500));
            return await response.json();
        } catch (error) {
            console.error(error);
            return [];
        }
    }
};

window.API = API;
