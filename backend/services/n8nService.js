const axios = require("axios");

const sendIncident = async (data) => {

    try {

        console.log("Sending incident to n8n...");

        // Get webhook URL from .env file
        const webhookURL = process.env.N8N_WEBHOOK_URL;

        // Send incident data to n8n
        const response = await axios.post(
            webhookURL,
            data
        );

        console.log("AI response received.");

        // Return AI response
        return {

            success: true,
            data: response.data

        };

    }

    catch (error) {

        console.log("Error while sending incident.");

        return {

            success: false,
            message: error.message

        };

    }

};

module.exports = {

    sendIncident

};