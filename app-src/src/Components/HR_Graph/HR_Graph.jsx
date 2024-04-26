import React, { useEffect } from "react";
import Papa from "papaparse";
import Chart from "chart.js/auto";

export default function HR_Graph() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch the CSV data
                const response = await fetch("/src/assets/data.csv");
                const csvString = await response.text();
                // Use Papa Parse to convert string to array of objects
                const parsedData = Papa.parse(csvString, {
                    header: true,
                    dynamicTyping: true,
                    skipEmptyLines: true
                }).data;

                const slicedData = parsedData.slice(0, 200);
  
                // Extract heart rate values
                const heartRateData = slicedData.map(row => row.hear_rate);
                // Generate labels for the X-axis as 1, 2, 3, ..., N
                const labels = heartRateData.map((_, index) => index + 1);
                // Create the chart
                const ctx = document.getElementById('caloriesChart');
                if (!ctx) {
                    console.error("Canvas element not found.");
                    return;
                }
                const chart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Heart Rate',
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgb(255, 99, 132)',
                            data: heartRateData,
                            fill: false,
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                type: 'linear',
                                display: true,
                                position: 'left',
                                title: {
                                    display: true,
                                    text: 'Heart Rate'
                                }
                            },
                            x: {
                                type: 'linear',
                                display: true,
                                position: 'bottom',
                                title: {
                                    display: true,
                                    text: 'Entry Number'
                                }
                            }
                        }
                    }
                    
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

    }, []); // Empty dependency array ensures that this effect runs only once on component mount

    return (
        <canvas id="caloriesChart" />
    );
}

