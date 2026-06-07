import React from 'react';
import { Opportunity } from '../../utils/mockOpportunities';
import OpportunityCard from '../OpportunityCard/OpportunityCard';
import './TopPicksSection.css';

interface TopPicksSectionProps {
  opportunities: Opportunity[];
}

const TopPicksSection: React.FC<TopPicksSectionProps> = ({ opportunities }) => {
  return (
    <section className="mp-top-picks" aria-label="Top picks for you" id="mp-top-picks">
      <div className="mp-top-picks-header">
        <h2 className="mp-top-picks-title">Top picks for you</h2>
        <a href="#" className="mp-view-all" id="mp-top-picks-view-all">View all</a>
      </div>
      <div className="mp-top-picks-grid">
        {opportunities.map((opp) => (
          <OpportunityCard key={opp.id} opportunity={opp} />
        ))}
      </div>
    </section>
  );
};

export default TopPicksSection;
