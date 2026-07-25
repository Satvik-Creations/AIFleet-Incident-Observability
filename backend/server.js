require("dotenv").config();
require("./telemetry");

const express = require("express");
const path = require("path");
const axios = require("axios");
const cors = require("cors");

const WEBHOOK_URL = process.env.WEBHOOK_URL;

if (!WEBHOOK_URL) {
  console.error("ERROR: WEBHOOK_URL is not set in .env");
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());

// Serve static frontend assets from the repository root.
app.use(express.static(path.join(__dirname, "..")));

app.post("/api/webhook", async (req, res) => {
  try {
    const response = await axios.post(WEBHOOK_URL, req.body, {
      headers: { "Content-Type": "application/json" },
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ success: false, error: error.message });
    }
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend proxy listening on http://localhost:${port}`);
});


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