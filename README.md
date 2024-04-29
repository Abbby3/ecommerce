# eCommerce website

This web application is a mock e-commerce website, built in react, using a firestore database to store information.

## tools used

- React for frontend
- React router dom for navigation
- SASS for styling
- Firestore for data storage
- DreamStudio for image generation
- Imgur for image hosting

## features

On startup, users are presented with items as cards in various sections. Users are able to click on buttons to add the item to the cart/wishlist, or the card to bring up a modal with more information on the product. Users can also navigate to the cart or wishlist pages, which each show a list of items in each set that can also be interacted with.

Other features include:

- navbar hides on scroll down, shows on scroll up
- error page that accounts for incorrect urls
- basic purchase page that presents the foundation of a purchasing system
- developer tools that allow developers to add or remove data from the database with ease
- carousel of images that can be interacted with to show other images
- a boolean context, that is changed when an update to the database occurs, prompting other components to rerender globally without chaining states

Data is stored in two separate collections. The 'items' collection represents the static data that won't be changed by the user at any point. This is stored as a context for components to call on to avoid making multiple api calls. Within this collection, the items are stored as documents that contain the item information, and sorted by the item's ID.

The id is based on 9 character string in three parts, sorted by category-type-item. For example, cl1-pa1-je1 is the id for clothes>pants>jeans.

The other collection, 'users', represents the dynamic data, that can be changed by the user. Inside, are the user documents, that store the items in the wishlist and cart for each user.

## future features

Mobile First Design: making sure the content fits on all screen sizes will be an essential priority.

Error Handling: currently, the application assumes the firestore database will function correctly, and will break if errors occur.

Purchase Functionality: the purchase button should remove all items in the cart, reduce stock levels for each item, and could open up the possibility of mock payment systems using stripe integration.

Improved Cart Page: the cart page should include total price.

Variant Properties: each variant should have its own stock levels, price and place on the wishlist/cart pages. This would need to be accounted for in potential purchase functionality.

Contact Page: allows users to contact the store with complaints/reviews/inquiries/etc through a form.

Searchbar: component that could allow users to search for items, types, categories, etc, and could make use of filters set by the user.

User System: having multiple users stored as separate documents in firestore. This would require a login/sign up page, and may prompt security systems. This would open up the possibility of having individual wishlist/cart sets and reviews.

Improved Navbar: dropdown button that lists categories, and individual category pages. A currency conversion option could also be included on the navbar, with a default potentially tied to a user system.

Improved Featured Section: items should fade in/out rather than change instantly.

Related Items: related items, based on type, variants, or category, could be included in the modal/wishlist page/cart page.

Wishlist Folders: wishlist items could be sorted into folders that are managed by the user.

Recommended Algorithm: a system that affects the random item selection in the home page. Based on previous purchases, it would increase the likelyhood of types/categories/variants appearing in the recommended section, where the scope of the influence scales with the amount of that property being purchased.

## changelog

V2:

- How data is structured has been updated to two collections based on static/dynamic data.
- The way data is stored in the browser has changed to context or simply database pulls.
- Everything that uses that data have been updated to account for this.
- The old method of pushing/pulling data to an object stored on the browser has been kept for the purposes of creating new data.
- Item card has been updated to accept child components to reduce props.
- Item detail components have been implemented.
- Rerenders based on changes to cart/wishlist is now managed with context.
- Item modal has now been implemented.
- Minor changes to styles.
