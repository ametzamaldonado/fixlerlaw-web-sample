# Sample Law Firm Website (Create React App)

This project was created to redesign the original website at the law firm where I am currently employed, [Fixler & LaGattuta, LLP](https://fixlerlaw.com/index.html).

### ** **Click here for [Deployed Site](https://fixlerlaw-sample.netlify.app/)** **

## Packages Installed:
- For icons : `npm i react-bootstrap-icons`
- For front-end builds: `npm i bootstrap@5.3.0-alpha1`
- Add. front-end builds: `npm install react-bootstrap bootstrap`
- For routing library: `npm i react-router-dom`

## To open the app locally.. 
1. Fork  repository
2. Run `npm install` to download all packages
3. Create a `.env` file in the root direactory and perform the following tasks to ensure the 'Contact Us' component sends you a confirmation mesasge upon completion.
    - create an account with [EmailJS](https://www.emailjs.com/) and follow their steps to ensure connectivity.
    - once created, the `.env` file must include the following variables with your respective keys.
        >  
            REACT_APP_SERVICE_ID='YOUR_SERVICE_ID'
            REACT_APP_TEMPLATE_ID='YOUR_EMAIL_TEMPLATE_ID'
            REACT_APP_PUBLIC_KEY='YOUR_PUBLIC_KEY'
        >
    - additionally open the `index.html` and add the `REACT_APP_PUBLIC_KEY` value into the last script tag which enables the use of EmailJS throughout the site.
4. If all values are replaced as stated above, your app should be fully functional! Run `npm install` to open the project locally.





