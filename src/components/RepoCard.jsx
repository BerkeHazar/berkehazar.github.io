const RepoCard = ({ repo }) => {
    return (
        <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white/10 backdrop-blur-xl rounded-3xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-white/20"
        >
            <h3 className="text-xl font-semibold text-white mb-2 truncate">
                {repo.name}
            </h3>
            <p className="text-sm text-white/60 line-clamp-2 min-h-[2.5rem]">
                {repo.description || 'No description available'}
            </p>
            <div className="flex gap-4 mt-4 text-xs text-white/50">
                {repo.language && (
                    <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                        {repo.language}
                    </span>
                )}
                {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                        ⭐ {repo.stargazers_count}
                    </span>
                )}
            </div>
        </a>
    );
};

export default RepoCard;
