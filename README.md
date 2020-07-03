This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Approach used in the project

### `Styled Components`
I have used styled components to render basic UI elements like input, button, card etc. These components can be further configured to exhibit different behavior based on the props passed to it. All the styled components are in the folder components.

### `Centralised HttpService`
I have used a centralised HTTP Service, which allow us to intercept request and response, and further give us the ability to write a universal error handler as well as appending 'Common Headers' to the request.

### `JWT Token`
It is stored in session storage. It might not be the safest place to store a token but this is what I have done here.


### `Environment Variable`
.env has been used to store the config on project level to provide it with flexibility to run across servers without any code manipulation.

### `Models`
Models are used to extend the functionality of an entity provided by the server.

### `Styles`
I have used SASS to style the components. All of the styles are in a common folder called Styles.

### `Services`
Anything which can be used across the components are put in a folder called services.
