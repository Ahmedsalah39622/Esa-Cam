import Stripe from "stripe";

export function getStripe(): Stripe {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    throw new Error("Stripe is not configured. Set STRIPE_SECRET_KEY in the server environment.");
  }

  return new Stripe(stripeSecretKey, {
    typescript: true,
  });
}
