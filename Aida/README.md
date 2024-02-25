# File Structure

The file structure of this project follows a modular approach and is organized based on functionality. Here's a brief overview of the main folders:

# Assets

This folder contains all the static assets used in the project, including images and icons. It is further divided into subfolders based on the type of asset.

# Authentication

This folder contains the login and signup pages for both vendors and users.

# Cart

This folder contains all the components related to the shopping cart functionality.

CartPage: The page that displays the contents of the shopping cart.
CartItem: A reusable component that displays a single item in the shopping cart.
CartSummary: A component that displays the summary of the shopping cart, including the total price and tax.

# Products

This folder contains all the components abd pages related to the product.

Home Page
ProductPage: The page that displays a single product.
ProductList: A reusable component that displays a list of products.
ProductCategory: A reusable component that displays a single product category.

# UI

This folder contains all the reusable UI components used throughout the application like the Footer, NavBar, SearchBar and Button.

# User

This folder contains all the components related to the user pages.

UserProfilePage: The page that displays the user's profile information.
UserOrdersPage: The page that displays the user's order history.
UserSettingsPage: The page that allows the user to update their settings.

# Vendor

This folder contains all the components related to the vendor pages.

VendorDashboardPage: The page that displays the vendor's dashboard.
VendorProductsPage: The page that allows the vendor to manage their products.
VendorOrdersPage: The page that displays the vendor's order history.

# Routes

This folder contains the route configuration for the application.

index.js: The file that exports an array of route objects, where each object represents a route in the application.

By organizing the project in this way, we can ensure that each component has a clear and well-defined purpose, making it easier to maintain and scale the application over time.


@TODO:
What is left in the Login page:
   > The button to make the password visible.
   > Adjusting the font to be Roboto but it is not working for some reason
   > The image needs to be changed as it has low quality!