import React, { useEffect, useState } from 'react';
import { ExternalLink, Activity } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../backend/data/portfolioData';
import { TechLogo } from './TechLogos';

export const CodingProfiles: React.FC = () => {
  // GitHub repository count
  const [githubRepoCount, setGithubRepoCount] = useState<number | null>(null);

  // GitHub username
  const GITHUB_USERNAME = 'HibaShaik13';

  useEffect(() => {
    const fetchGitHubRepositories = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data');
        }

        const data = await response.json();

        // GitHub provides the number of public repositories
        setGithubRepoCount(data.public_repos);
      } catch (error) {
        console.error('GitHub API Error:', error);

        // Keep null so the original portfolio value can be used
        setGithubRepoCount(null);
      }
    };

    fetchGitHubRepositories();
  }, []);

  return (
    <section
      id="profiles"
      className="py-24 bg-[#020617] relative border-t border-slate-900 bg-pcb-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ============================= */}
        {/* SECTION HEADER */}
        {/* ============================= */}

        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/50 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Activity className="w-3.5 h-3.5 text-amber-400" />

            <span>CODING PROFILES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Competitive Programming & Code Activity
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Verified stats and active profiles across GitHub, LeetCode,
            CodeChef, LinkedIn, TryHackMe, and Hack The Box.
          </p>

        </div>

        {/* ============================= */}
        {/* PROFILE CARDS */}
        {/* ============================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {PORTFOLIO_DATA.codingProfiles.map((prof, idx) => {

            // Check whether this card is GitHub
            const isGitHub =
              prof.platform.toLowerCase() === 'github';

            // Use live GitHub count when available.
            // Otherwise use the original portfolio data.
            const primaryStat =
              isGitHub && githubRepoCount !== null
                ? `${githubRepoCount} Repositories`
                : prof.statPrimary;

            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 bg-slate-900/60 backdrop-blur-md shadow-xl"
              >

                {/* ============================= */}
                {/* CARD TOP */}
                {/* ============================= */}

                <div className="space-y-4">

                  <div className="flex items-center justify-between">

                    {/* Platform Icon */}
                    <div className="p-3 rounded-2xl bg-slate-950 border border-white/10 shadow-inner group-hover:scale-105 transition-transform">

                      <TechLogo
                        name={prof.icon || prof.platform}
                        className="w-6 h-6"
                      />

                    </div>

                    {/* Username */}
                    <span className="text-xs font-mono text-purple-300/80 bg-purple-950/50 px-2.5 py-1 rounded-lg border border-purple-800/40">
                      {prof.username}
                    </span>

                  </div>

                  {/* ============================= */}
                  {/* CARD CONTENT */}
                  {/* ============================= */}

                  <div className="space-y-1">

                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {prof.platform}
                    </h3>

                    <p className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-indigo-300">

                      {primaryStat}

                    </p>

                    <p className="text-xs text-slate-400 font-medium">
                      {prof.statSecondary}
                    </p>

                  </div>

                </div>

                {/* ============================= */}
                {/* VISIT PROFILE BUTTON */}
                {/* ============================= */}

                <div className="pt-4 mt-4 border-t border-slate-800/80">

                  <a
                    href={prof.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-800/80 transition-all shadow-sm active:scale-98"
                  >

                    <span>Visit Profile</span>

                    <ExternalLink className="w-3.5 h-3.5 text-purple-400" />

                  </a>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};