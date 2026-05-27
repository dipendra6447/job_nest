import React from 'react';
import './TrendingJobs.css';
import JobCard from './JobCard';

export interface Job {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: string;
  salary: string;
  bgColor: string;
  featured: boolean;
  tags: string[];
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Senior Product Designer',
    company: 'Figma Inc.',
    logo: 'bi-vector-pen',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120K – $160K',
    bgColor: '#F3F0FF',
    featured: true,
    tags: ['UI/UX', 'Remote', 'Senior'],
  },
  {
    id: 2,
    title: 'Senior React Developer',
    company: 'Vercel Corp.',
    logo: 'bi-code-slash',
    location: 'Remote, Worldwide',
    type: 'Full-time',
    salary: '$140K – $180K',
    bgColor: '#EFF6FF',
    featured: true,
    tags: ['React', 'TypeScript', 'Remote'],
  },
  {
    id: 3,
    title: 'AI/ML Engineer',
    company: 'OpenAI',
    logo: 'bi-cpu',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$180K – $240K',
    bgColor: '#ECFDF5',
    featured: false,
    tags: ['Python', 'LLM', 'Senior'],
  },
  {
    id: 4,
    title: 'Growth Marketing Lead',
    company: 'Stripe',
    logo: 'bi-graph-up',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$100K – $130K',
    bgColor: '#FFF7ED',
    featured: false,
    tags: ['Marketing', 'Growth', 'B2B'],
  },
  {
    id: 5,
    title: 'Cloud Solutions Architect',
    company: 'Amazon AWS',
    logo: 'bi-cloud',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$160K – $220K',
    bgColor: '#FFF0F5',
    featured: false,
    tags: ['AWS', 'Cloud', 'Architecture'],
  },
  {
    id: 6,
    title: 'Head of Product',
    company: 'Linear',
    logo: 'bi-diagram-3',
    location: 'Remote, US',
    type: 'Full-time',
    salary: '$170K – $210K',
    bgColor: '#F0F7FF',
    featured: true,
    tags: ['Product', 'Strategy', 'Remote'],
  },
];

const TrendingJobs: React.FC = () => {
  return (
    <section className="trending-section section-padding" id="trending" aria-label="Trending jobs">
      <div className="container">
        {/* Header */}
        <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-5">
          <div>
            <div className="section-label">
              <i className="bi bi-fire"></i> Trending Now
            </div>
            <h2 className="section-heading mb-2">
              Most <span className="gradient-text">Trending Jobs</span>
            </h2>
            <p className="section-subtext" style={{ margin: 0 }}>
              Handpicked top opportunities at leading companies
            </p>
          </div>
          <a href="#" className="btn-outline-custom" id="view-all-jobs-btn">
            View All Jobs <i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div>

        {/* Jobs Grid */}
        <div className="jobs-grid">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingJobs;
