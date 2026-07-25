require("dotenv").config();
require("./telemetry");

const axios = require("axios");
const { incidentCounter } = require("./metrics");

const WEBHOOK_URL = process.env.WEBHOOK_URL;

console.log("=".repeat(55));
console.log("AIFleet - Fake Production Incident Generator");
console.log("=".repeat(55));

const payload = {
  service: "payment-api",
  status: 500,
  error: "Internal Server Error",
  environment: "production",

  priority: "P1",
  incidentID: "INC-001",
};

async function sendIncident() {
  try {

    // Increment metric
    incidentCounter.add(1, {
      service: payload.service,
      priority: payload.priority,
      environment: payload.environment,
    });

    console.log(
      "📊 Metric incremented: incidents_generated_total"
    );

    console.log("Incident Generated Successfully.");

    const response = await axios.post(
      WEBHOOK_URL,
      payload
    );

    console.log("\nStatus Code :", response.status);

    console.log("\nAI Response :");

    console.log(
      JSON.stringify(
        response.data,
        null,
        4
      )
    );

  } catch (error) {

    console.log("\nSomething went wrong!");

    if (error.response) {

      console.log(
        "Status Code :",
        error.response.status
      );

      console.log(
        JSON.stringify(
          error.response.data,
          null,
          4
        )
      );

    } else {

      console.log(error.message);

    }
  }
}

async function main() {

  await sendIncident();

  console.log(
    "\nWaiting 15 seconds for traces and metrics to export..."
  );

await new Promise((resolve) =>
  setTimeout(resolve, 20000)
);

  console.log(
    "✅ Telemetry export completed."
  );

  process.exit(0);
}

main();