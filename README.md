# Buy me a coffee clone

This is a simple demo "blog app", showing how to integrate [NextJS](https://nextjs.org) API functions with [Stripe](https://stripe.com) payments and [Airtable](https://airtable.com). In the form on right side, a user can select amount of donation in USD, fill in his/her name and leave optional message. After submitting the form, user is redirected to Stripe checkout page, where after filling out the payment
info and submitting is redirected back to original site. In the background, the data about donation are sent to Airtable service and displayed in the sidebar in "Last donations" list.

Main purpose of this mini project was to try out Stripe CLI and its new feature of mocking events and triggering webhooks in localhost environment.

## Stripe CLI event triggering

### 1. Install Stripe CLI

How to: [https://stripe.com/docs/stripe-cli](https://stripe.com/docs/stripe-cli)

### 2. Install dependencies and run the app in dev mode:

<code>npm install</code>

<code>npm run dev</code>

or

<code>yarn install</code>

<code>yarn dev</code>

### 3. In different terminal run:

<code>stripe listen --forward-to localhost:3000/api/checkout-complete</code>

### 4. In another terminal, run the following command for triggering Stripe service events:

<code>stripe trigger checkout.session.completed --add checkout_session:metadata.name=John --add checkout_session:metadata.message="Good luck"</code>

For example, this triggers event that is fired after successful checkout happens (with optional form metadata).

More info in [Stripe docs](https://stripe.com/docs/cli/trigger)
