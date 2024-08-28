import React from 'react';
import { Chart } from 'primereact/chart';

const BloodPressureChart = () => {
    const data = {
        labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
        datasets: [
            {
                label: 'Systolic Pressure',
                data: [120, 130, 125, 140, 135, 130],
                borderColor: '#FF5733',
                backgroundColor: 'rgba(255, 87, 51, 0.2)',
                borderWidth: 2,
                tension: 0.4, // This makes the line curve
                fill: true
            },
            {
                label: 'Diastolic Pressure',
                data: [80, 85, 82, 90, 88, 84],
                borderColor: '#33C4FF',
                backgroundColor: 'rgba(51, 196, 255, 0.2)',
                borderWidth: 2,
                tension: 0.4, // This makes the line curve
                fill: true
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.dataset.label + ': ' + tooltipItem.raw + ' mmHg';
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                max: 180,
                ticks: {
                    stepSize: 10
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }
        }
    };

    return (
        <div className="chart-container">
            <h3>Blood Pressure Chart</h3>
            <Chart type="line" data={data} options={options} />
        </div>
    );
};

export default BloodPressureChart;
