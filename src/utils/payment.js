export async function loadRazorpay() {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export async function initiateRazorpayPayment(options) {
  return new Promise((resolve) => {
    const rzp = new window.Razorpay(options);
    rzp.open();
    rzp.on("payment.failed", (response) => {
      resolve({ success: false, response });
    });
  });
}
