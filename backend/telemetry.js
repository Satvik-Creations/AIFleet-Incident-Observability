require("dotenv").config();

console.log("==================================");
console.log("OpenTelemetry Starting...");
console.log("Service:", process.env.OTEL_SERVICE_NAME);
console.log("Endpoint:", process.env.SIGNOZ_OTLP_ENDPOINT);
console.log(
  "Ingestion Key Exists:",
  !!process.env.SIGNOZ_INGESTION_KEY
);
console.log("==================================");

const { NodeSDK } = require("@opentelemetry/sdk-node");
const {
  getNodeAutoInstrumentations,
} = require("@opentelemetry/auto-instrumentations-node");

const {
  OTLPTraceExporter,
} = require("@opentelemetry/exporter-trace-otlp-http");

const traceExporter = new OTLPTraceExporter({
  url: process.env.SIGNOZ_OTLP_ENDPOINT,

  headers: {
    "signoz-ingestion-key":
      process.env.SIGNOZ_INGESTION_KEY,
  },
});

const sdk = new NodeSDK({
  traceExporter,

  instrumentations: [
    getNodeAutoInstrumentations(),
  ],
});

sdk.start();

console.log("✅ OpenTelemetry Started Successfully");

async function shutdown() {
  try {
    await sdk.shutdown();
    console.log("✅ Telemetry Shutdown Successfully");
  } catch (error) {
    console.log(
      "❌ Telemetry Shutdown Error:",
      error
    );
  }
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

module.exports = sdk;