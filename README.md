Reroll
A small business manager that runs as a web app on your iPhone. It tracks stock, sales, expenses, receipts, customers, commissions and partners for one or more businesses, and works offline once installed.

All data is stored on your own device. There is no account and no server.

Features
Multiple businesses, each with its own sales, stock, expenses, receipts, customers and reports, and its own accent colour
Stock with holders (people, places or storage locations), low-stock alerts, stock value, restocking and moving stock between holders
Sales linked to stock, with stock deducted automatically and restored on edit, delete or return
Returns, unpaid sales and payment tracking, kept out of revenue and profit until paid
Reports by month, tax year or custom range, with sharing
Insights: best sellers, profit by source and channel, slow movers
Tools: profit goal, mileage log, pricing and break-even calculator
Receipts with photos, and optional expense creation
Customers list with notes and repeat-buyer tracking
Business partners with commission tracking across businesses
Calculator and notes on the home screen
Activity log and a storage meter
PIN lock, auto-lock, and dark or light mode
Backup and restore to a file you can save anywhere
Install on iPhone
Open the site address in Safari.
Tap Share, then Add to Home Screen.
Open it from the new home screen icon.
To update the icon or app name, delete the old home screen icon and add it again.

Backups
Your data lives in the browser's storage on your phone. If the app is deleted or the website data is cleared, it is lost, so back up regularly.

Use Export backup on the home screen and save the file to Files or iCloud Drive.
Use Import backup to restore. This replaces the data on the device.
Do not upload backup files to this repository.
Files
File	Purpose
index.html	The whole app
manifest.json	Install details (name, colours, icons)
sw.js	Service worker for offline use
icon-192.png, icon-512.png	App icons
Updating
Replace index.html (and any other changed files) in the repository, wait for GitHub Pages to redeploy, then fully close and reopen the app. If the old version still shows, open it once more.

If sw.js changes, increase the version in CACHE_NAME so devices drop the old cache.

Privacy and limits
The PIN is a privacy screen, not encryption. Keep your phone's own passcode turned on.
Browser storage has a size limit of roughly 5 MB. Photos and receipts use the most space, so watch the storage meter.
Reports are estimates based on what you enter, not accounting or tax advice.

