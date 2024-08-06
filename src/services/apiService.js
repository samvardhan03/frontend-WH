import axios from 'axios';

const apiService = {
    getReports: async () => {
        try {
            const response = await axios.get('YOUR_API_BASE_URL/api/reports');
            return response.data;
        } catch (error) {
            console.error('Error fetching reports:', error);
            throw error;
        }
    },
    createReport: async (report) => {
        try {
            const response = await axios.post('YOUR_API_BASE_URL/api/reports/generate', report);
            return response.data;
        } catch (error) {
            console.error('Error creating report:', error);
            throw error;
        }
    }
};

export default apiService;
