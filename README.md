# ReRoll Business Suite

**A locally focused business management PWA for tracking sales, stock, expenses, partners, and orders across multiple businesses.**

ReRoll Business Suite is designed to help organise day-to-day reselling and small-business activity in one place, with a dark interface and black, white, and red branding.

## Features

- **Multiple businesses** — keep separate records for different business activities.
- **Sales and orders** — record transactions and track order progress.
- **Stock management** — keep track of inventory and product costs.
- **Expenses and commissions** — record business costs and partner-related amounts.
- **Reports and receipts** — review business activity and connect sales with receipt records.
- **Online-store account options** — organise sales activity across supported marketplaces or custom account types.
- **Cloud account tools** — sign in, create an account, upload local data, restore cloud data, and check cloud status when cloud services are configured.
- **Local data and backups** — keep locally stored records on the device and use the app's backup tools to export or restore data.
- **App lock** — use the local PIN feature to help prevent casual access on the device.
- **Installable PWA** — add ReRoll to a compatible phone or computer from the browser.

> **Important:** ReRoll's cloud features depend on the associated Supabase project and deployed Edge Functions being configured correctly. Features that rely on cloud services will not work if those services are unavailable or misconfigured.

## Open ReRoll

**Live app:**  
https://heartlucid-dotcom.github.io/reroll-business-manager/

## Using the app

1. Open the live app in a compatible browser.
2. Add a business and enter its sales, stock, expenses, and other records.
3. Use the Account page to manage sign-in and cloud tools, if configured.
4. Use the built-in backup/export option regularly to keep a separate copy of important records.
5. To install the PWA, open the app in a supported browser and choose its **Add to Home Screen** or **Install** option.

The exact options available can vary by device, browser, and the current app version.

## Data and privacy

- Business information may be stored locally in the browser on the device where it was entered.
- Local browser data can be lost if site data is cleared, the app is removed, or the device is reset. Keep backups of important information.
- Cloud storage and account deletion depend on the cloud backend being configured and functioning correctly.
- Deleting a cloud account should not be assumed to delete copies of data stored locally on a device.
- Do not enter passwords, payment-card details, or other sensitive information into notes or fields that are not intended for them.

## Development

This repository contains the files used to publish ReRoll Business Suite through GitHub Pages.

To make a change:
1. Back up the current working `index.html`.
2. Edit the relevant file in the repository.
3. Commit the change to the publishing branch.
4. Wait for GitHub Pages to publish the update, then refresh the app. A previously installed PWA may temporarily show cached content.

Keep the existing manifest, icons, service-worker files, and other assets unless you know a change requires them.

## Disclaimer

ReRoll is a record-keeping tool. Check your own sales, costs, payouts, and tax obligations independently. Marketplace balances and order statuses shown in the app are not necessarily live marketplace data unless a verified integration explicitly provides it.

## License

No license is specified in this repository unless one is added separately. Do not assume the source code is licensed for reuse.
