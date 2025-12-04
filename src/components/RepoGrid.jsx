import { useState, useEffect } from 'react';
import RepoCard from './RepoCard';

const RepoGrid = ({ username = 'Berke' }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://api.github.com/users/berkehazar/repos?sort=updated&per_page=6`);

                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }

                const data = await response.json();
                setRepos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [username]);

    if (loading) {
        return (
            <div className="text-center text-white/60">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-white/20 border-t-white/60"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-400 bg-red-500/10 backdrop-blur-xl rounded-3xl p-6 border border-red-500/20">
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-6xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                GitHub Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {repos.map((repo) => (
                    <RepoCard key={repo.id} repo={repo} />
                ))}
            </div>
        </div>
    );
};

export default RepoGrid;
