require("dotenv").config();

const { metrics } = require("@opentelemetry/api");

const meter = metrics.getMeter(
  "AIFleet-Metrics"
);

const incidentCounter =
  meter.createCounter(
    "incidents_generated_total",
    {
      description:
        "Total incidents generated",
    }
  );

module.exports = {
  incidentCounter,
};