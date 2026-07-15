# Playwright Mobile Automation

This repository contains a lightweight Playwright + TypeScript framework for demoing a mobile-browser order review flow against Ticket Fairy.

## What it covers
- Mobile browser emulation for a modern iPhone profile
- A page-object-style test flow for the Ticket Fairy event order review scenario
- A simple, readable structure for showing to a manager or stakeholder

## Test scenario
The current automation targets the event:
- Dubai Attractions Unlimited Pass
- Date: 31 July
- Adult 1x: AED 2,100
- Child 1x: AED 1,899
- Expected order total: AED 3,999

## Run the test
1. Install dependencies if needed:
   - npm install
2. Run the test in a visible browser window:
   - npm run test:headed
3. Open the HTML report after the run:
   - npm run test:report

## Notes
- The framework uses the already installed Node, TypeScript, and Playwright dependencies in the workspace.
- The test is intentionally simple and readable for a demo.
