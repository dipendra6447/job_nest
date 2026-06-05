import React, { useState, useMemo, useCallback } from 'react';
import './JobListing.css';

// Shared components
import Navbar from '../../components/Navbar/Navbar';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';

// Listing-specific components
import ListingHero from '../../components/ListingHero/ListingHero';
import JobFilters, { FilterState, defaultFilters } from '../../components/JobFilters/JobFilters';
import ActiveFilters from '../../components/ActiveFilters/ActiveFilters';
import JobResultsHeader, { SortOption, ViewMode } from '../../components/JobResultsHeader/JobResultsHeader';
import JobListingGrid from '../../components/JobListingGrid/JobListingGrid';
import FeaturedCompanies from '../../components/FeaturedCompanies/FeaturedCompanies';
import CareerResources from '../../components/CareerResources/CareerResources';
import ListingCTA from '../../components/ListingCTA/ListingCTA';
import Pagination from '../../components/Pagination/Pagination';

import { mockJobs } from '../../utils/mockJobs';

const PER_PAGE = 12;
const TOTAL_MOCK_JOBS = 1248;
const TOTAL_PAGES = Math.ceil(TOTAL_MOCK_JOBS / PER_PAGE);

const NAVBAR_HEIGHT = 80; // keep in sync with --navbar-height

const JobListing: React.FC = () => {
  // State
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Simulate loading on filter/sort change
  const simulateLoad = useCallback(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 600);
  }, []);

  const handleFiltersChange = useCallback((newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
    simulateLoad();
  }, [simulateLoad]);

  const handleFilterRemove = useCallback((field: keyof FilterState, value: string) => {
    setFilters((prev) => {
      const arr = prev[field];
      if (Array.isArray(arr)) {
        return { ...prev, [field]: arr.filter((v: string) => v !== value) };
      }
      return { ...prev, [field]: '' };
    });
    setCurrentPage(1);
    simulateLoad();
  }, [simulateLoad]);

  const handleSearch = useCallback((_keyword: string, _location: string, _category: string) => {
    setCurrentPage(1);
    simulateLoad();
  }, [simulateLoad]);

  const handleSortChange = useCallback((sort: SortOption) => {
    setSortBy(sort);
    setCurrentPage(1);
    simulateLoad();
  }, [simulateLoad]);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 320, behavior: 'smooth' });
    simulateLoad();
  }, [simulateLoad]);

  // For demo, just show all mock jobs (with loading simulation)
  const displayedJobs = useMemo(() => {
    if (loading) return [];
    return mockJobs;
  }, [loading]);

  return (
    <>
      {/* Navbar */}
      <div className="jl-sticky-header">
        <Navbar />
      </div>

      <main className="jl-main" style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}>
        {/* Hero */}
        <ListingHero onSearch={handleSearch} />

        {/* Main content area */}
        <section className="jl-content-section" aria-label="Job listings and filters">
          <div className="container">
            <div className="jl-layout">
              {/* Sidebar */}
              <div className="jl-sidebar-col">
                <JobFilters
                  filters={filters}
                  onFiltersChange={handleFiltersChange}
                  mobileOpen={mobileFilterOpen}
                  onMobileClose={() => setMobileFilterOpen(false)}
                />
              </div>

              {/* Main column */}
              <div className="jl-main-col">
                {/* Active Filters */}
                <ActiveFilters
                  filters={filters}
                  onRemove={handleFilterRemove}
                  onClearAll={() => handleFiltersChange(defaultFilters)}
                />

                {/* Results Header */}
                <JobResultsHeader
                  totalJobs={TOTAL_MOCK_JOBS}
                  currentPage={currentPage}
                  perPage={PER_PAGE}
                  sortBy={sortBy}
                  viewMode={viewMode}
                  onSortChange={handleSortChange}
                  onViewChange={setViewMode}
                  onMobileFilterOpen={() => setMobileFilterOpen(true)}
                />

                {/* Job Grid */}
                <JobListingGrid
                  jobs={displayedJobs}
                  viewMode={viewMode}
                  loading={loading}
                />

                {/* Pagination */}
                {!loading && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={TOTAL_PAGES}
                    onPageChange={handlePageChange}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Companies */}
        <FeaturedCompanies />

        {/* Career Resources */}
        <CareerResources />

        {/* CTA Banner */}
        <ListingCTA />

        {/* Newsletter */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default JobListing;
