import React from 'react';
import './SimilarJobs.css';

interface SimilarJob {
  id: number;
  initials: string;
  color: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  jobType: string;
  postedTime: string;
}

const similarJobs: SimilarJob[] = [
  {
    id: 1,
    initials: 'BW',
    color: '#2454FF',
    title: 'Brand Manager',
    company: 'BrightWave Solutions',
    location: 'Dayton, OH',
    salary: '$85K – $75K / year',
    jobType: 'Full-time',
    postedTime: '2h ago',
  },
  {
    id: 2,
    initials: 'GR',
    color: '#F59E0B',
    title: 'Growth Marketing Specialist',
    company: 'GreenLeaf Inc.',
    location: 'Dayton, OH',
    salary: '$50K – $70K / year',
    jobType: 'Full-time',
    postedTime: '1d ago',
  },
  {
    id: 3,
    initials: 'MK',
    color: '#14B87A',
    title: 'Marketing Coordinator',
    company: 'MarketWise Co.',
    location: 'Dayton, OH',
    salary: '$42K – $55K / year',
    jobType: 'Full-time',
    postedTime: '2d ago',
  },
  {
    id: 4,
    initials: 'CM',
    color: '#7B3EFF',
    title: 'Content Marketing Manager',
    company: 'CreativeMinds',
    location: 'Dayton, OH',
    salary: '$60K – $80K / year',
    jobType: 'Full-time',
    postedTime: '3d ago',
  },
];

const SimilarJobs: React.FC = () => (
  <section className="sj-section" aria-labelledby="sj-heading">
    <div className="sj-header">
      <h2 className="sj-heading" id="sj-heading">Similar Jobs</h2>
      <a href="/jobs" className="sj-view-all" id="sj-view-all">
        View all jobs <i className="bi bi-arrow-right" />
      </a>
    </div>

    <div className="sj-grid">
      {similarJobs.map((job) => (
        <article key={job.id} className="sj-card" id={`sj-card-${job.id}`} aria-label={`${job.title} at ${job.company}`}>
          <div className="sj-card-header">
            <div
              className="sj-logo"
              style={{ background: `${job.color}18`, border: `1px solid ${job.color}30` }}
            >
              <span style={{ color: job.color }}>{job.initials}</span>
            </div>
            <span className="sj-posted">{job.postedTime}</span>
          </div>
          <div className="sj-card-body">
            <h3 className="sj-title">{job.title}</h3>
            <p className="sj-company">{job.company}</p>
            <p className="sj-location">
              <i className="bi bi-geo-alt" />
              {job.location}
            </p>
            <p className="sj-salary">
              <i className="bi bi-currency-dollar" />
              {job.salary}
            </p>
          </div>
          <div className="sj-card-footer">
            <span className="sj-type-chip">{job.jobType}</span>
            <a
              href={`/jobs/${job.id}`}
              className="sj-apply-btn"
              id={`sj-apply-${job.id}`}
              aria-label={`Apply for ${job.title}`}
            >
              Apply <i className="bi bi-arrow-right" />
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default SimilarJobs;
