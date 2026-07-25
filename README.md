<p align="center">
  <img src="AIFleet_logo.png" alt="AI Fleet Logo" width="180">
</p>

<h1 align="center">🚨 AIFleet Incident Observability</h1>

<p align="center">
AI-Powered Production Incident Analysis with <b>n8n</b>, <b>Google Gemini</b>, <b>OpenTelemetry</b> & <b>SigNoz Cloud</b>
</p>

<p align="center">

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![n8n](https://img.shields.io/badge/n8n-Workflow-AE4BFF)
![Google Gemini](https://img.shields.io/badge/Google-Gemini-4285F4)
![OpenTelemetry](https://img.shields.io/badge/OpenTelemetry-Tracing-8A2BE2)
![SigNoz](https://img.shields.io/badge/SigNoz-Observability-0B5FFF)
![AI Agent](https://img.shields.io/badge/AI-Agent-success)
![Production Ready](https://img.shields.io/badge/Production-Ready-brightgreen)

</p>

<p align="center">

<a href="https://drive.google.com/file/d/1nJl1n8iqdNkWOQcm9sF74L9dLEs9RxlE/view?usp=sharing">
<img src="https://img.shields.io/badge/🎥-Project%20Demo-red?style=for-the-badge">
</a>

<a href="https://github.com/Satvik-Creations/AIFleet-Incident-Observability">
<img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge">
</a>

</p>

---

# 🚀 Overview

Modern production systems generate thousands of logs and alerts every day. During an incident, engineers often spend valuable time manually investigating logs, identifying root causes, and determining corrective actions.

**AIFleet Incident Observability** automates this process by combining the power of **AI Agents**, **workflow automation**, and **distributed tracing**.

Whenever a production incident is received through a webhook, the workflow:

- receives incident details
- structures the incoming payload
- analyzes the incident using Google Gemini
- generates an AI-powered incident report
- returns a structured response
- exports telemetry using OpenTelemetry
- visualizes complete execution inside SigNoz Cloud

Instead of only knowing **whether a workflow executed**, developers can observe:

- every workflow execution
- every node execution
- execution latency
- bottlenecks
- execution timeline
- distributed traces
- production health

---

# 🎯 Problem Statement

During production incidents, teams commonly face challenges such as:

- Manual incident investigation
- Slow root cause analysis
- Lack of workflow visibility
- Difficult debugging
- No execution timeline
- Limited production observability

Without tracing, identifying the exact node responsible for increased latency or workflow failure becomes significantly more difficult.

---

# 💡 Solution

This project combines four powerful technologies into a single production-ready workflow.

| Component | Responsibility |
|-----------|----------------|
| n8n | Workflow Orchestration |
| Google Gemini | AI Incident Analysis |
| OpenTelemetry | Distributed Tracing |
| SigNoz Cloud | Observability Platform |

Together, they create an AI-powered incident analysis pipeline with end-to-end observability.

---

# ✨ Features

## 🤖 AI Powered Incident Analysis

Automatically analyzes production incidents using Google Gemini.

The AI generates:

- Incident Severity
- Possible Root Cause
- Recommended Actions
- Executive Summary

---

## ⚡ Webhook Based Incident Ingestion

Production incidents are received through an HTTP Webhook, making integration simple with external monitoring systems.

---

## 🔄 Automated Workflow Orchestration

The entire incident lifecycle is automated using n8n.

No manual intervention is required.

---

## 📊 Production Observability

Integrated with SigNoz Cloud using OpenTelemetry.

Provides:

- Workflow traces
- Node traces
- Execution timelines
- Performance insights
- End-to-end visibility

---

## 🔍 Distributed Tracing

Every workflow execution generates distributed traces allowing complete execution analysis.

---

## 📈 Flame Graph Analysis

Visualizes execution time across every workflow node to quickly identify slow operations.

---

## 🌊 Waterfall View

Displays execution order together with latency, making bottleneck detection straightforward.

---

## 📡 OpenTelemetry Instrumentation

Native OpenTelemetry tracing captures workflow execution without modifying business logic.

---

# 🏗 Architecture

<p align="center">
<img src="assets/screenshots/architecture.png" width="900">
</p>

The complete execution flow follows the architecture below.

```text
                Production Incident

                        │

                        ▼

                HTTP Webhook Trigger

                        │

                        ▼

                  n8n Workflow Engine

                        │

            ┌───────────┴────────────┐

            ▼                        ▼

     Data Preparation         Google Gemini

            │                        │

            └───────────┬────────────┘

                        ▼

              AI Incident Analysis

                        │

                        ▼

             Structured JSON Response

                        │

                        ▼

              OpenTelemetry Exporter

                        │

                        ▼

                 SigNoz Cloud

                        │

                        ▼

       Trace Explorer • Flame Graph • Waterfall
```

---

# ⚙ Workflow Overview

The workflow has been designed as a production incident pipeline consisting of six logical stages.

<p align="center">
<img src="assets/screenshots/n8n-workflow.png" width="100%">
</p>

## 1️⃣ Webhook Trigger

Receives production incident payloads.

Example:

```json
{
  "service":"Payment Service",
  "status":"Critical",
  "error":"Database Connection Timeout",
  "environment":"Production"
}
```

---

## 2️⃣ Edit Fields

Normalizes incoming payloads before AI processing.

This ensures consistent data reaches the AI Agent.

---

## 3️⃣ AI Agent

Acts as an intelligent DevOps engineer.

The agent evaluates:

- severity
- impact
- probable root cause
- corrective actions
- summary

---

## 4️⃣ Google Gemini

Uses Google's Gemini model to generate production-grade incident analysis.

---

## 5️⃣ Code Node

Formats the AI response into a structured JSON payload.

Adds:

- timestamp
- execution status
- formatted response

---

## 6️⃣ Response

Returns the AI-generated incident report back to the client.

---

# 📊 Observability

One of the primary goals of this project is not only to automate incident analysis but also to make every execution observable.

Using OpenTelemetry, each workflow execution exports traces directly to SigNoz Cloud.

This enables complete visibility into workflow behavior without changing the workflow logic itself.

---

# 🔭 OpenTelemetry Observability

To achieve production-grade observability, this workflow is instrumented using **OpenTelemetry (OTel)**.

Instead of relying only on execution logs, OpenTelemetry captures complete execution traces across the workflow, enabling engineers to inspect every stage of execution with rich metadata and timing information.

The traces are exported directly from **n8n** to **SigNoz Cloud**, where they can be explored through multiple visualization tools.

### OpenTelemetry Configuration

The workflow has been configured with:

- ✅ Workflow Tracing
- ✅ Node-Level Tracing
- ✅ Published Workflow Tracking
- ✅ Trace Context Propagation
- ✅ OTLP Export
- ✅ SigNoz Cloud Integration

This configuration provides complete visibility into every workflow execution without modifying the business logic.

---

# ☁️ SigNoz Cloud Integration

<p align="center">
<img src="assets/screenshots/signoz-dashboard.png" width="100%">
</p>

SigNoz Cloud serves as the observability platform responsible for collecting, storing, and visualizing OpenTelemetry traces generated during workflow execution.

Each execution creates a distributed trace containing detailed metadata, execution timing, node spans, and workflow performance metrics.

Rather than manually inspecting logs, engineers can visualize the complete execution lifecycle in real time.

---

# 🔎 Trace Explorer

<p align="center">
<img src="assets/screenshots/trace-explorer.png" width="100%">
</p>

Trace Explorer provides a high-level overview of every workflow execution.

Each trace includes:

- Workflow execution status
- Total execution duration
- Trace timeline
- Span hierarchy
- Service information
- Workflow metadata

This allows engineers to quickly determine whether an execution completed successfully and identify the overall execution time before drilling into individual spans.

---

# 🔥 Flame Graph

<p align="center">
<img src="assets/screenshots/flamegraph.png" width="100%">
</p>

The Flame Graph visualizes how execution time is distributed across the workflow.

Each block represents a span generated during execution.

Benefits include:

- Identifying slow workflow nodes
- Understanding execution hierarchy
- Measuring latency contribution
- Detecting performance bottlenecks
- Optimizing workflow performance

Instead of searching through logs, latency hotspots become immediately visible.

---

# 🌊 Waterfall View

<p align="center">
<img src="assets/screenshots/waterfall.png" width="100%">
</p>

The Waterfall View displays workflow execution chronologically.

It provides visibility into:

- Node execution order
- Individual span duration
- Parent-child relationships
- Execution overlap
- Sequential workflow behavior

This makes it significantly easier to understand the lifecycle of every workflow execution.

---

# 📑 Curated Trace Metadata

Instead of exposing the complete OpenTelemetry payload, the project surfaces only the metadata that is useful for understanding workflow execution while avoiding unnecessary internal identifiers.

```json
{
  "workflow": "AIFleet Production Incident Analyzer",
  "service": "AIFleet-n8n",
  "execution_mode": "webhook",
  "status": "success",
  "runtime": "Node.js 24.16.0",
  "nodes": 6,
  "span": "workflow.execute",
  "duration_ms": 2866.41
}
```

This metadata demonstrates the observability capabilities of the workflow while keeping sensitive implementation details private.

---

# 📁 Repository Structure

```text
AIFleet-Incident-Observability
│
├── assets
│   ├── logo
│   ├── screenshots
│   ├── demo
│   ├── README.md
│   └── acknowledgements.md
│
├── workflow
│   └── Production Incident Analyzer n8n Workflow.json
│
├── README.md
├── LICENSE
└── .gitignore
```

The repository is organized to separate project documentation, workflow definitions, branding assets, screenshots, and supporting documentation for easier maintenance and collaboration.

---

# 🚀 Getting Started

## Prerequisites

Before running the project, ensure the following tools and services are available:

- n8n
- Google Gemini API
- SigNoz Cloud Workspace
- OpenTelemetry Support
- Git

---

# ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Satvik-Creations/AIFleet-Incident-Observability.git

cd AIFleet-Incident-Observability
```

---

### 2. Import the Workflow

Import the provided workflow JSON into your n8n instance.

```
workflow/
└── Production Incident Analyzer n8n Workflow.json
```

---

### 3. Configure Google Gemini Credentials

Create a Google Gemini credential inside n8n and attach it to the AI Agent.

---

### 4. Publish the Workflow

Publish the workflow to enable production execution and observability.

---

### 5. Configure OpenTelemetry

Enable OpenTelemetry from the n8n settings.

Recommended configuration:

| Setting | Value |
|----------|-------|
| Exporter | OTLP |
| Tracing | Enabled |
| Node Spans | Enabled |
| Published Workflow Tracking | Enabled |
| Trace Propagation | Enabled |

> **Note:** The actual OTLP endpoint and authentication details depend on your observability backend. Do not commit secrets or ingestion keys to the repository.

---

### 6. Execute the Workflow

Trigger the webhook with a production incident payload.

Example request:

```json
{
  "service": "Payment Service",
  "status": "Critical",
  "error": "Database Connection Timeout",
  "environment": "Production"
}
```

The workflow will:

- Receive the incident
- Analyze it using Gemini
- Generate recommendations
- Export OpenTelemetry traces
- Visualize execution in SigNoz Cloud

---

# 🎥 Project Demonstration

A complete walkthrough of the workflow, AI analysis, and observability pipeline is available below.

<p align="center">

### ▶️ Project Demo

https://drive.google.com/file/d/1nJl1n8iqdNkWOQcm9sF74L9dLEs9RxlE/view?usp=sharing

</p>

The demonstration covers:

- Workflow execution
- AI-powered incident analysis
- OpenTelemetry tracing
- SigNoz Trace Explorer
- Flame Graph
- Waterfall visualization
- End-to-end observability

---

# 🛡️ Security & Best Practices

This repository intentionally avoids exposing sensitive configuration.

The following are **not included**:

- API Keys
- Authorization Headers
- OTLP Authentication Tokens
- SigNoz Ingestion Keys
- Environment Secrets
- Internal Workspace Credentials

Only representative workflow metadata and screenshots are included to demonstrate the observability implementation while following secure sharing practices.

---

# 📸 Project Screenshots

The repository includes screenshots demonstrating different stages of workflow execution and observability.

Included visuals:

- Workflow Canvas
- Architecture Diagram
- Trace Explorer
- Flame Graph
- Waterfall View
- End-to-End Execution Flow

These screenshots provide a visual understanding of how production incidents move through the complete observability pipeline.

---

# 🛠️ Technology Stack

This project combines workflow automation, generative AI, distributed tracing, and cloud observability into a single production-ready incident analysis pipeline.

| Category | Technology |
|----------|------------|
| Workflow Automation | n8n |
| Artificial Intelligence | Google Gemini |
| Observability | SigNoz Cloud |
| Telemetry Standard | OpenTelemetry |
| Runtime | Node.js |
| Communication | HTTP Webhooks |
| Data Format | JSON |
| Version Control | Git & GitHub |

---

# ⚙️ Design Decisions

This project was built with production engineering principles in mind.

### AI-Assisted Incident Analysis

Instead of hardcoding incident responses, Google Gemini dynamically evaluates each production incident and generates contextual recommendations.

---

### Workflow Automation

Using n8n eliminates repetitive manual processes while keeping the workflow highly visual, maintainable, and extensible.

---

### OpenTelemetry Instrumentation

Observability has been implemented without modifying business logic.

This allows every workflow execution to be traced automatically while maintaining a clean workflow architecture.

---

### Cloud-Native Observability

Rather than relying on local logs, all workflow traces are exported directly to SigNoz Cloud, providing centralized monitoring and analysis.

---

### Security by Design

The repository intentionally excludes:

- API Keys
- Authorization Headers
- Environment Secrets
- OTLP Authentication Tokens
- SigNoz Ingestion Keys
- Internal Infrastructure Credentials

Only implementation details required to understand the project are included.

---

# 📊 Production Workflow Summary

```text
Production Incident
        │
        ▼
Webhook Trigger
        │
        ▼
Normalize Payload
        │
        ▼
Google Gemini AI
        │
        ▼
AI Incident Report
        │
        ▼
Structured JSON Response
        │
        ▼
OpenTelemetry Export
        │
        ▼
SigNoz Cloud
        │
        ▼
Trace Explorer
Flame Graph
Waterfall
```

---

# 🎯 Project Highlights

✔ AI-powered Production Incident Analysis

✔ Webhook-based Workflow Automation

✔ Google Gemini Integration

✔ OpenTelemetry Instrumentation

✔ SigNoz Cloud Observability

✔ Distributed Tracing

✔ Workflow-Level Visibility

✔ Node-Level Visibility

✔ Flame Graph Analysis

✔ Waterfall Timeline

✔ Production-Ready Architecture

---

# 🚀 Future Enhancements

Potential improvements for future iterations include:

- Multi-provider LLM support
- Slack / Microsoft Teams incident notifications
- Automated incident ticket creation
- Historical incident analytics
- Intelligent incident classification
- Service-level dashboards
- Real-time alerting
- Root cause correlation across multiple workflows
- Support for additional observability backends

---

# 🤝 Contributing

Contributions, ideas, improvements, and discussions are always welcome.

If you'd like to improve the project:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

Every contribution helps improve AI-powered observability.

---

# 📜 License

This project is licensed under the **MIT License**.

See the **LICENSE** file for additional details.

---

# 👥 About AI Fleet

AI Fleet is a collaborative initiative focused on building practical AI-powered solutions that combine automation, observability, and modern engineering practices.

The objective is to create intelligent systems that simplify real-world workflows while maintaining production-grade reliability, scalability, and transparency.

Learn more about the team behind this project:

📄 **[AI Fleet Team Documentation](assets/README.md)**

---

# 🙏 Acknowledgements

This project would not have been possible without the incredible open-source technologies and communities that continue to push modern software engineering forward.

Special thanks to:

- **SigNoz** — Open-source observability platform for distributed tracing and monitoring.
- **n8n** — Powerful workflow automation platform.
- **Google Gemini** — Large Language Model powering AI-driven incident analysis.
- **OpenTelemetry** — Vendor-neutral standard for telemetry generation.
- **GitHub** — Platform for collaboration and version control.

A dedicated acknowledgements document is available here:

📄 **[Acknowledgements](assets/acknowledgements.md)**

---

# ⭐ If You Found This Project Useful

If you enjoyed exploring this project or found it useful, consider giving the repository a ⭐.

It helps support the project and encourages further development.

---

# 📬 Connect

If you'd like to discuss AI Agents, Workflow Automation, Observability, OpenTelemetry, or Production Engineering, feel free to connect and collaborate.

---

<p align="center">

## Built with ❤️ by Team AI Fleet

</p>

<p align="center">
<img src="assets/logo/AIFleet-Logo.png" width="220" alt="AI Fleet Logo">
</p>

---

<p align="center">

### Acknowledgements

<img src="assets/acknowledgements.png" width="900" alt="Acknowledgements">

</p>

---

<p align="center">

### 🚀 Empowering Intelligent Automation with AI, Observability & Production-Grade Engineering

**AI Fleet**

</p>

