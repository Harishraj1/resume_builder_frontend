import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline';
import '../styles/ats_page.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function AtsResult({ user }) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const atsResult = state?.atsResult || null;
  const template = state?.template || 'chronological';
  const resumeId = state?.resumeId || '';

  if (!atsResult) {
    return (
      <div className="no-results">
        <div className="no-results-card">
          <h2>No ATS Results</h2>
          <p>No ATS analysis results available. Please try again.</p>
          <button onClick={() => navigate('/dashboard')}>
            <HomeIcon />
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const chartData = {
    labels: ['Score', 'Remaining'],
    datasets: [
      {
        data: [atsResult.atsScore, 100 - atsResult.atsScore],
        backgroundColor: ['#10B981', '#E5E7EB'],
        borderWidth: 0,
        hoverOffset: 20,
      },
    ],
  };

  const chartOptions = {
    cutout: '75%',
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: '#1F2937',
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        borderColor: '#10B981',
        borderWidth: 1,
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
    },
  };

  return (
    <div className="ats-result-container">
      {/* Header */}
      <div className="header">
        <h1>Resume ATS Score</h1>
        <p>Discover how well your resume aligns with Applicant Tracking Systems for a MERN stack developer role.</p>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* ATS Score Chart */}
        <div className="score-card">
          <div className="chart-container">
            <Doughnut data={chartData} options={chartOptions} />
            <div className="chart-score">
              <span>{atsResult.atsScore}</span>
              <span>out of 100</span>
            </div>
          </div>
          <div className="score-details">
            <h3>ATS Compatibility Score</h3>
            <p>Your resume’s compatibility with ATS systems for a MERN stack developer role.</p>
          </div>
        </div>

        {/* Missing Keywords & Suggestions */}
        <div className="details-container">
          {/* Missing Keywords */}
          <div className="card">
            <h3>Missing Keywords</h3>
            {atsResult.missingKeywords.length === 0 ? (
              <p className="keywords-empty">All key keywords are present!</p>
            ) : (
              <ul className="keywords-list">
                {atsResult.missingKeywords.map((keyword, index) => (
                  <li key={index}>{keyword}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Improvement Suggestions */}
          <div className="card">
            <h3>Improvement Suggestions</h3>
            <ul className="suggestions-list">
              {atsResult.suggestions.map((suggestion, index) => (
                <li key={index}>
                  <span className="number">{index + 1}</span>
                  <span className="text">{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="actions">
        <button className="editor" onClick={() => navigate(`/editor/${template}/${resumeId}`)}>
          <ArrowLeftIcon />
          Back to Editor
        </button>
        <button className="dashboard" onClick={() => navigate('/dashboard')}>
          <HomeIcon />
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default AtsResult;