# React e-cShop Website

## Outline

This project is designed to reinforce your React learnings and make sure that you are comfortable with most aspect of the framework.
With this project you will practice how to:

- Fetch Data within a React App
- Use react-router-dom
- Use Firebase/Firestore

## MVP

At a minimum your e-shop website should have two pages:

- Home Page
  - This will contain:
    - A Grid of products
    - Carousel of featured products
    - Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants
- All products should be stored in Firestore:
  - You should store the following information:
    - quantity
    - variants (could be colors, sizes, etc)
    - price per unit
    - name
    - image url
    - favourited or not (boolean)
      All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application

### Bonus

Using Firestore and react, create a cart system. Create a cart page in your react app 
Add logic to prevent users from adding items to cart that are no longer in stock. 
You will have to check the current cart and the product quantity 
Cart page should have the following:

- List of products in cart

  - Ability to change quantity of products in cart
  - Ability to remove items from cart

### Bonus extra bonus

- Try and add Stripe integration to "pay" for the items in the cart (TEST MODE)
  - 4242 4242 4242 4242
- TIPS :

1. Make sure your site is scoped to one category of products

## Useful links

- [React-router-dom](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [Dummy JSON](https://dummyjson.com/)
- [Fake Store](https://fakestoreapi.com/)





## base features
# page
- home page
  - navbar 
    - logo
    - cart
    - wishlist
  - featured section
    - carousel
      - scrolls periodically
        - smooth animation
      - buttons to manually scroll
        - resets auto scroll time and increases time until next scroll
  - sale section
    - can be removed if no items are on sale
  - main section
    - randomly selects items
    - button to load more items
  - item modal
    - carousel, images can be clicked on to view
    - name, price, variants, add to cart/wishlist
  - footer 
- wishlist page
  - navbar
  - item list
    - same item modal from home page
  - footer
- cart page
  - navbar
  - lists items
    - remove button
      - should promp user with modal; are you sure
    - qty buttons
      - less than one should act as remove button
  - changes to this page should send to db, but not take info from it to save time (qty should be counter, etc). purchase page can verify info.
- 404 page
  - for incorrect routing
- under construction page
  - for payment if not implemented


# data
- item list
  - item
    - id
    - name
    - thumbnail
    - sale
    - stock
    - price
    - category for search
    - type for search
    - colour for recommended
    - size for recommended
  - review list (?)
    - item rating
    - review
      - user
      - rating
      - review  
- images
  - item id
- cart
  - item id
- wishlist
  - item id
- users(?)

# backend
- id should be category-type-name-variants
  - eg: clo-sho-hee-red-016 for clothes, shoes, heeled shoe, red colour, size 16

- reusable stuff
  - button styling
    - use class, styling in app.scss
  - cart button
  - wishlist button
  - item card component
  - modal component
    - takes item id prop, displays item info
  - wishlist and card is more or less same, function to add/view that takes in wishlist/cart prop?
  - api pull function
    - takes item list/wishlist/cart
    - should be called by list/wishlist/cart function that formats the data
    - data formatter should be passed as a prop to container
  - loading anim
  - navbar
  - footer


    
  

## optionals
- # navbar features
  - navbar appears on scroll up
    - change 'mode' (display fixed/absolute) on scroll up/down 
      - looks for down on fixed, looks for up on absolute 
    - turn to fixed on middle click?
  - drop down for extra features
    - could also include list for searching specific category or types?

- # user system
  - link/icon in navbar
  - login/sign up page
    - hashing
    - sign up should add to firestore 
      - enables options like recommended, wishlist
        - saved across account
  - should default to logged out
  - login in shouldn't clear cart (i hate when it does)

- # currency conversion
  - displayed on navbar

- # individual variant properties
  - stock, price, etc

- # contact page
  - form
  - type - review, complaint inquiry?
  - store on firestore

- # search page
  - filters by category/type/variant
  - search bar separate to filters
    - should look for matches in all name, category, type, variants
  - part of navbar?

- # payment with stripe integration
  - payment screen from cart page
  - interact with stock in firestore
  - purchase history page
  - number sold on item
  - changes to this page should pull api to ensure correct data

- # recommended 'algorithm'
  - algorith shows random items
    - number of items in wishlist/cart/purchased increases the chance of the associated category and variants appearing
      - maximum increase in chance increases with more items, size variant max chance goes up faster
  - recommended section to replace main section
  - 'something new' section for opposites of recommended?

- # related items
  - based on type+variants, then category

- # reviews
  - default reviews stored on firestore
    - number of pregenerated reviews inversely proportional to stock levels/number sold? only initial no., doesnt change with stock 
  - add reviews through a form
  - star rating based on average of reviews 
  - interacts with user system?

- # wishlist folders
  - adds to default section when on home page
  - adds to specific folder when on item modal
  - add and remove folders on wishlist page/item modal
    - removing brings up choice of moving all items to default list or removing from wishlist

- # dev page
  - form to add items
  - change item information
  - see orders

- # efficient api usage
  - current data pulls/pushes affect the whole collection. 
  - should affect specific part
    - eg adding to wishlist only needs to deal with the user document


  
