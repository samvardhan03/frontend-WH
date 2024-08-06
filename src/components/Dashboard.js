import React, { useEffect, useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import MapChart from './MapChart';
import apiService from '../services/apiService';

Chart.register(...registerables);

const Dashboard = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const data = await apiService.getReports();
                setReports(data);
            } catch (error) {
                setError("Error fetching reports");
                console.error("Error fetching reports:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchReports();
    }, []);

    const chartData = {
        labels: reports.map(report => report.district),
        datasets: [
            {
                label: 'Order Quantity',
                data: reports.map(report => report.orders.reduce((acc, order) => acc + order.quantity, 0)),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Dashboard</h1>
            <Bar data={chartData} />
            <Pie data={chartData} />
            <Line data={chartData} />
            <MapChart data={chartData} />
        </div>
    );
};

export default Dashboard;
