# views

Our last folder is the `views` folder. The pages that we render on our websites are generally composed of many different individual components. The individual components that live in our `components` folder are used on these pages together to build our UI.

Think of a Home page in your app. The `Home.jsx` page would represent this page. The `Home.jsx` page will be comprised of many smaller components together. Each individual page in your app and the individual components needed to create that page will be in the views folder.


# Plan
Now, we need to add in Auth. 

in App.jsx - will need to run npm i react-router-dom@5
then pop in the routers
will also need to make pages a PrivateRouter

in Views- a login page will be added because the user will view it (maybe title it Auth or Login)


in Components- a PrivateRouter will be added where a lot of the magic will happen

then fix testing in all areas of this lab

context- will need to change up the UserContext and pop an login function thing