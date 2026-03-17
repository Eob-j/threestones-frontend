export async function createCheckoutSession() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const response = await fetch(`${apiUrl}/api/payments/create-checkout-session`, {
    method: "POST"
  });

  if (!response.ok) {
    throw new Error("Failed to create checkout session");
  }

  return response.json(); // { url }
}
