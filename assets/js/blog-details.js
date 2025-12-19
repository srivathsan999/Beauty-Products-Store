// Blog Posts Data
const blogPosts = {
    featured: {
        id: 'featured',
        category: 'FEATURED ARTICLE',
        title: '10 Essential Skincare Tips for Glowing Skin',
        image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800',
        author: 'Sarah Johnson',
        authorRole: 'Beauty Expert',
        date: 'January 15, 2025',
        content: `
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">Discover expert skincare secrets that will transform your routine and give you that radiant glow you've been dreaming of. From morning to night, learn the best practices for healthy, beautiful skin.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">1. Cleanse Twice Daily</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Start your day with a gentle cleanser to remove overnight impurities, and end your day with a deeper cleanse to remove makeup, sunscreen, and environmental pollutants. Choose a cleanser suited for your skin type—gel for oily skin, cream for dry skin, and foam for combination skin.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">2. Exfoliate Regularly</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Exfoliation removes dead skin cells, revealing fresh, glowing skin underneath. Use a gentle exfoliant 2-3 times per week. Avoid over-exfoliating as it can damage your skin barrier and cause irritation.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">3. Never Skip Sunscreen</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">UV protection is the most important step in preventing premature aging. Apply a broad-spectrum sunscreen with at least SPF 30 every single day, even when it's cloudy or you're indoors near windows.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">4. Hydrate from Within</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Drink at least 8 glasses of water daily to keep your skin hydrated from the inside out. Hydrated skin appears plump, supple, and naturally glowing.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">5. Use Vitamin C Serum</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Vitamin C is a powerful antioxidant that brightens skin, reduces dark spots, and protects against environmental damage. Apply a vitamin C serum in the morning before your moisturizer and sunscreen.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">6. Get Enough Sleep</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Beauty sleep is real! Your skin repairs itself while you sleep. Aim for 7-9 hours of quality sleep each night to allow your skin cells to regenerate and recover.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">7. Moisturize Daily</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Keep your skin barrier healthy by moisturizing both morning and night. Choose a moisturizer with ingredients like hyaluronic acid, ceramides, or glycerin that lock in moisture.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">8. Eat a Balanced Diet</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Your diet directly impacts your skin. Include plenty of fruits, vegetables, healthy fats, and antioxidants in your meals. Foods rich in omega-3s, vitamin E, and beta-carotene promote healthy, glowing skin.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">9. Remove Makeup Before Bed</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Never go to bed with makeup on. It clogs pores, prevents your skin from breathing, and can lead to breakouts and premature aging. Always use a proper makeup remover followed by a cleanser.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">10. Be Consistent</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Consistency is key to achieving glowing skin. Stick to your skincare routine and give products time to work. Most skincare products take 4-6 weeks to show visible results.</p>
        `
    },
    1: {
        id: 1,
        category: 'SKINCARE',
        title: 'How to Build the Perfect Skincare Routine',
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
        author: 'Emma Wilson',
        authorRole: 'Skincare Specialist',
        date: 'January 12, 2025',
        content: `
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">Learn the step-by-step process of creating a skincare routine that works for your unique skin type and concerns.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Understanding Your Skin Type</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Before building your routine, it's essential to identify your skin type. Common types include oily, dry, combination, and sensitive. Each requires different products and approaches.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Morning Routine</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Start with a gentle cleanser, followed by a toner to balance pH levels. Apply a vitamin C serum for antioxidant protection, then a lightweight moisturizer, and always finish with SPF 30+ sunscreen.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Evening Routine</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">In the evening, double cleanse to remove makeup and dirt. Use an exfoliant (2-3 times per week), apply treatment serums like retinol or niacinamide, then lock everything in with a nourishing night cream.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Weekly Treatments</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Incorporate weekly masks, exfoliation, and treatments based on your skin's needs. Clay masks for oily skin, hydrating masks for dry skin, and gentle exfoliants for all types.</p>
        `
    },
    2: {
        id: 2,
        category: 'MAKEUP',
        title: 'Makeup Trends for 2025',
        image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400',
        author: 'Jessica Martinez',
        authorRole: 'Makeup Artist',
        date: 'January 10, 2025',
        content: `
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">Explore the hottest makeup trends that are taking the beauty world by storm this year.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Natural Glow</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">The "no-makeup makeup" look continues to dominate. Focus on dewy, hydrated skin with minimal coverage, allowing your natural beauty to shine through. Use lightweight foundations and cream products for a fresh, luminous finish.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Bold Eyes</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Statement eyes are back with graphic liners, colorful shadows, and dramatic lashes. Experiment with bold colors, metallic finishes, and creative shapes to make your eyes the focal point.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Glossy Lips</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Shiny, glossy lips are replacing matte finishes. Tinted lip balms, clear glosses, and hydrating lip oils are trending for a plump, juicy look that's both comfortable and stylish.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Blush Placement</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Cream blushes applied high on the cheeks and across the nose create a youthful, sun-kissed appearance. The "sunburn blush" trend adds warmth and dimension to the face.</p>
        `
    },
    3: {
        id: 3,
        category: 'HAIRCARE',
        title: 'Natural Hair Care Remedies',
        image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400',
        author: 'Maya Patel',
        authorRole: 'Hair Care Expert',
        date: 'January 8, 2025',
        content: `
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">Discover natural ingredients and DIY treatments that can transform your hair health.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Coconut Oil Treatment</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Coconut oil is rich in lauric acid, which penetrates the hair shaft and prevents protein loss. Warm some coconut oil and apply it to your hair from roots to ends. Leave it on for 30 minutes to overnight, then shampoo as usual.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Aloe Vera for Scalp Health</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Aloe vera soothes the scalp and promotes hair growth. Apply fresh aloe vera gel directly to your scalp, massage gently, and leave it on for 30 minutes before washing. It's especially beneficial for dry, itchy scalps.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Apple Cider Vinegar Rinse</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">An apple cider vinegar rinse helps balance pH, remove buildup, and add shine. Mix 2-3 tablespoons with a cup of water and pour over your hair after shampooing. Rinse with cool water after a few minutes.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Avocado Hair Mask</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Avocados are packed with healthy fats and vitamins that nourish dry, damaged hair. Mash a ripe avocado and mix with a tablespoon of olive oil. Apply to damp hair, leave for 20-30 minutes, then rinse thoroughly.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Honey and Yogurt Treatment</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">This combination hydrates and strengthens hair. Mix 2 tablespoons of honey with 3 tablespoons of plain yogurt. Apply to hair, focusing on ends, leave for 20 minutes, then shampoo and condition normally.</p>
        `
    },
    4: {
        id: 4,
        category: 'WELLNESS',
        title: 'Beauty From Within: Nutrition Tips',
        image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400',
        author: 'Dr. Rachel Green',
        authorRole: 'Nutritionist',
        date: 'January 5, 2025',
        content: `
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">How your diet affects your skin and hair, plus foods that promote natural beauty.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Hydrating Foods</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Water-rich foods like cucumbers, watermelon, and citrus fruits help keep your skin hydrated. They also provide essential vitamins and antioxidants that support skin health from the inside out.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Omega-3 Fatty Acids</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Found in fatty fish, walnuts, and flaxseeds, omega-3s help maintain skin's lipid barrier, keeping it soft and supple. They also reduce inflammation, which can help with acne and other skin conditions.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Antioxidant-Rich Foods</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Berries, dark leafy greens, and green tea are packed with antioxidants that fight free radicals and protect against premature aging. They help maintain collagen production and skin elasticity.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Vitamin C Sources</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Vitamin C is crucial for collagen synthesis. Include citrus fruits, bell peppers, strawberries, and broccoli in your diet to support skin structure and brighten your complexion naturally.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Protein for Hair Health</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Hair is made of protein, so adequate protein intake is essential for strong, healthy hair. Include lean meats, eggs, legumes, and quinoa to provide the building blocks for beautiful hair.</p>
        `
    },
    5: {
        id: 5,
        category: 'TUTORIAL',
        title: '5-Minute Morning Beauty Routine',
        image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400',
        author: 'Sophie Lee',
        authorRole: 'Beauty Influencer',
        date: 'January 3, 2025',
        content: `
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">Quick and effective beauty routine for busy mornings that keeps you looking great.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Minute 1: Cleanse and Tone</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Start with a quick splash of water and a gentle cleanser. Pat dry and apply a hydrating toner with a cotton pad to refresh and prepare your skin.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Minute 2: Moisturize and Prime</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Apply a lightweight moisturizer with SPF to hydrate and protect. If you're wearing makeup, use a primer to create a smooth base and extend wear time.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Minute 3: Base Makeup</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Use a tinted moisturizer or BB cream for light coverage that evens out your skin tone. Apply with fingers or a sponge for quick, natural-looking coverage.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Minute 4: Quick Eye and Cheek</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Use a cream shadow stick in a neutral shade for a quick eye look. Add a swipe of mascara and a dab of cream blush on your cheeks for instant color and glow.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Minute 5: Finishing Touches</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Complete your look with a tinted lip balm or lip gloss. Brush your brows into place, and you're ready to go! This routine keeps you polished without taking up your entire morning.</p>
        `
    },
    6: {
        id: 6,
        category: 'FRAGRANCE',
        title: 'How to Choose Your Signature Scent',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400',
        author: 'Olivia Brown',
        authorRole: 'Fragrance Consultant',
        date: 'January 1, 2025',
        content: `
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">A complete guide to finding the perfect fragrance that matches your personality.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Understanding Fragrance Notes</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Every fragrance has three layers: top notes (what you smell first), middle notes (the heart of the fragrance), and base notes (what lingers). Understanding these helps you find scents that evolve beautifully on your skin.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Testing Fragrances</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Never test more than 3-4 fragrances at a time, as your nose becomes overwhelmed. Spray on pulse points like wrists and neck, then wait at least 30 minutes to experience how the scent develops on your skin chemistry.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Consider Your Lifestyle</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Your signature scent should match your lifestyle. Light, fresh scents work well for daytime and office settings, while richer, warmer scents are perfect for evening events and special occasions.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Seasonal Considerations</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Consider having different scents for different seasons. Light florals and citrus scents shine in spring and summer, while woody and spicy notes complement fall and winter perfectly.</p>
            
            <h2 class="text-2xl font-heading font-bold mt-8 mb-4">Trust Your Instincts</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">Ultimately, the best fragrance is one that makes you feel confident and happy. Don't be swayed by trends—choose a scent that resonates with you personally and becomes part of your identity.</p>
        `
    }
};

// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to load blog post
function loadBlogPost() {
    try {
        const postId = getUrlParameter('id') || 'featured';
        const post = blogPosts[postId];
        
        if (!post) {
            // If post not found, redirect to blog page
            window.location.href = 'blog.html';
            return;
        }
        
        // Update page title
        document.title = `${post.title} - Beauty Store`;
        
        // Update blog content
        const blogImage = document.getElementById('blog-image');
        const blogCategory = document.getElementById('blog-category');
        const blogTitle = document.getElementById('blog-title');
        const blogAuthor = document.getElementById('blog-author');
        const blogAuthorRole = document.getElementById('blog-author-role');
        const blogDate = document.getElementById('blog-date');
        const blogContent = document.getElementById('blog-content');
        
        if (blogImage) blogImage.src = post.image;
        if (blogImage) blogImage.alt = post.title;
        if (blogCategory) blogCategory.textContent = post.category;
        if (blogTitle) blogTitle.textContent = post.title;
        if (blogAuthor) blogAuthor.textContent = post.author;
        if (blogAuthorRole) blogAuthorRole.textContent = post.authorRole;
        if (blogDate) blogDate.textContent = post.date;
        if (blogContent) blogContent.innerHTML = post.content;
        
        // Load related posts (exclude current post)
        loadRelatedPosts(postId);
    } catch (error) {
        console.error('Error loading blog post:', error);
        // Redirect to blog page on error
        window.location.href = 'blog.html';
    }
}

// Function to load related posts
function loadRelatedPosts(currentPostId) {
    try {
        const relatedPostsContainer = document.getElementById('related-posts');
        if (!relatedPostsContainer) return;
        
        const postIds = Object.keys(blogPosts).filter(id => id !== String(currentPostId) && id !== 'featured').slice(0, 3);
        
        relatedPostsContainer.innerHTML = '';
        
        postIds.forEach(postId => {
            const post = blogPosts[postId];
            if (!post) return;
            
            const postCard = document.createElement('article');
            postCard.className = 'product-card fade-on-scroll flex flex-col h-full cursor-pointer';
            postCard.onclick = () => window.location.href = `blog-details.html?id=${postId}`;
            
            postCard.innerHTML = `
                <a href="blog-details.html?id=${postId}" class="flex-shrink-0">
                    <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover">
                </a>
                <div class="p-6 flex flex-col flex-grow">
                    <span class="text-accent font-semibold text-xs">${post.category}</span>
                    <a href="blog-details.html?id=${postId}"><h3 class="text-xl font-heading font-bold mt-2 mb-3 hover:text-accent">${post.title}</h3></a>
                    <div class="text-sm text-gray-500 mt-auto">
                        <span>${post.date}</span>
                    </div>
                </div>
            `;
            
            relatedPostsContainer.appendChild(postCard);
        });
    } catch (error) {
        console.error('Error loading related posts:', error);
    }
}

// Load blog post when page loads
document.addEventListener('DOMContentLoaded', loadBlogPost);

