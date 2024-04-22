# eCommerce website
This website is a react based web application that mocks an online shopping platform.
  

### future updates should include
- ### modal
  - should appear when clicking item name
  - prefunctionality is already in place

- ### navbar features
  - navbar appears on scroll up
    - change 'mode' (display fixed/absolute) on scroll up/down 
      - looks for down on fixed, looks for up on absolute 
    - turn to fixed on middle click?
  - drop down for extra features
    - could also include list for searching specific category or types

- ### user system
  - link/icon in navbar
  - login/sign up page
    - hashing
    - sign up should add to firestore 
      - enables options like recommended, wishlist
        - saved across account
  - should default to logged out
  - login in shouldn't clear cart (i hate when it does)

- ### currency conversion
  - displayed on navbar
  - saved on user account

- ### individual variant properties
  - stock, price, etc
  - should be able to purchases an item, and only have that specific variant stock change

- ### smooth featured scrolling
  - should fade new items in, fade previous items out.

- ### contact page
  - form
  - type - review, complaint, inquiry, etc

- ### search page
  - filters by category/type/variant
  - search bar separate to filters
    - should look for matches in all name, category, type, variants
  - part of navbar

- ### payment with stripe integration
  - payment screen from cart page
  - interact with stock in firestore
  - purchase history page
  - number sold on item
  - changes to this page should pull api to ensure correct data

- ### recommended 'algorithm'
  - algorith shows random items
    - number of items in wishlist/cart/purchased increases the chance of the associated category and variants appearing
      - maximum increase in chance increases with more items, size variant max chance goes up faster
  - recommended section to replace main section
  - 'something new' section for opposites of recommended?

- ### related items
  - based on type+variants, then category

- ### reviews
  - default reviews stored on firestore
    - number of pregenerated reviews inversely proportional to stock levels/number sold? only initial no., doesnt change with stock 
  - add reviews through a form
  - star rating based on average of reviews 
  - interacts with user system

- ### wishlist folders
  - adds to default section when on home page
  - adds to specific folder when on item modal
  - add and remove folders on wishlist page/item modal
    - removing brings up choice of moving all items to default list or removing from wishlist

- ### dev page
  - form to add items
  - change item information
  - see orders

- ### general backend improvements
  - current data pulls/pushes affect the whole collection. 
    - should affect specific part
      - eg adding to wishlist only needs to deal with the user document
  - especially btns and item card is quite complex and could be simplified
  - standard formatting across pages, features, etc


  
