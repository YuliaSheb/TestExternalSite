const APP_ID = '1Usg50000000DGbCAM';

const FRONTDOOR_URL =
    'YOUR_FRONTDOOR_URL';

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
    'c-report-export'
);

const reportExport =
    document.createElement('c-report-export');

app.appendChild(reportExport);

const container =
    document.getElementById('lightning-container');

container.appendChild(app);