# Ecommerce React App

This project is a frontend implementation of an ecommerce website using React and Redux. It provides a fully functional user interface for managing products, adding them to a cart, and handling user interactions with the product data. The app is designed to interact with a dummy ecommerce API and features various functionalities including inline editing, sorting, and persistent state management.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Setup Instructions](#setup-instructions)
4. [Usage](#usage)
5. [Functionality Details](#functionality-details)
    - [Navbar](#navbar)
    - [All Products Page](#all-products-page)
    - [Product Detail Page](#product-detail-page)
    - [Cart Page](#cart-page)
6. [State Management with Redux](#state-management-with-redux)
7. [Error Handling](#error-handling)
8. [Persistent State](#persistent-state)
9. [Live Demo](#live-demo)
10. [Demo Video](#demo-video)
11. [Contributing](#contributing)
12. [License](#license)

## Features
- Display a list of products retrieved from a dummy API.
- Edit product details inline and save changes.
- Delete products and display notifications.
- Sort products by price with the ability to remove sorting.
- Add products to the cart and display cart item count.
- View detailed information about a product.
- Persistent cart state using Redux.

## Technologies Used
- React
- Redux
- React Router
- Axios
- Material-UI (for styling)
- my-json-server (for dummy API)

## Setup Instructions
1. Clone the repository:
    ```bash
    git clone https://github.com/MERNDevTinkal/Ecommerce-React-app.git
    cd Ecommerce-React-app
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```
4. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Usage
- **Navbar**: Displays navigation links and the cart items count.
- **All Products Page**: Lists all products with options to edit, delete, and add to cart.
- **Product Detail Page**: Shows detailed information about a specific product.
- **Cart Page**: Displays all items added to the cart with options to remove items.

## Functionality Details

### Navbar
- Displays the number of items in the cart.
- Provides navigation links to different sections of the app.

### All Products Page
- Fetches and displays a list of products from the dummy API.
- Each product can be edited inline by clicking the “pencil” button.
- Deleting a product shows a notification.
- A sort button allows sorting products by price, with an option to remove the sort.
- Products can be added to the cart.

### Product Detail Page
- Displays detailed information about a selected product.
- Includes a button to add the product to the cart.

### Cart Page
- Lists all products added to the cart.
- Allows removal of products from the cart.
- Displays notifications for successful operations.

## State Management with Redux
- **Products State**: Manages the list of products fetched from the API.
- **Cart State**: Manages the items added to the cart.
- **Sort State**: Manages the sorting state for products.

## Error Handling
- Handles API errors and displays appropriate notifications.
- Provides feedback for successful and failed operations.

## Persistent State
- Uses Redux persist to maintain cart state across page reloads.

## Live Demo
Check out the live demo: [Ecommerce React App](https://merndevtinkal.github.io/Ecommerce-React-app/)

## Demo Video
Watch the demo video to see the app in action: [Demo Video](VIDEO_URL)

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to explore the code, suggest improvements, and contribute to the project! If you encounter any issues or have any questions, please open an issue on GitHub.
