
# CODOS

A react app built using create-react-app and typescript.

The app hits public APIs of Practo Order with user's search text and shows medicines found for the result.

User can then add medicines to their cart.

Users can also see the total amount to pay to purchase the medicines, and add more or remove medicines from the cart

The app is live at [https://frozen-island-98934.herokuapp.com/](https://frozen-island-98934.herokuapp.com/)

### Building and running

- yarn install
- yarn start

### TODO:
- use redux 


### CORS Info:
- The APIs are proxied through [cors-anywhere](https://cors-anywhere.herokuapp.com) to bypass CORS on heroku

- To bypass CORS when working on this locally, install and use this [chrome extension](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)