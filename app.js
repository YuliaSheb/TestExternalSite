const APP_ID = '1Usg50000000DGbCAM';

const FRONTDOOR_URL =
    'https://mindful-koala-rysqkc-dev-ed.trailblaze.my.salesforce.com/secur/frontdoor.jsp?otp=00DWU00000e2rVq%21AQEAQOMrWAyAWlevkJ36L6b36iLfvI4eO59ICIrw6XeB_uktbneJOPwUdKwdmPzDCpEtVPlEVhPbAb9cba26hDRFCBAose13&cshc=U0000119jG9U00000e2rVq';

const app = document.createElement(
    'lightning-out-application'
);

app.setAttribute(
    'app-id',
    APP_ID
);

app.setAttribute(
    'frontdoor-url',
    FRONTDOOR_URL
);

app.setAttribute(
    'components',
    'c-simple-test-lightning-out'
);

const reportExport =
    document.createElement('c-simple-test-lightning-out');

app.appendChild(reportExport);

const container =
    document.getElementById('lightning-container');

container.appendChild(app);
