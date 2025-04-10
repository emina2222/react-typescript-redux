const ShimmerCard = () => {
    return(
        <div className="animate-pulse bg-gray-200 rounded-xl w-full max-w-xs h-64 p-4">
            <div className="bg-gray-300 h-40 w-full rounded-lg mb-4" />
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-300 rounded w-1/2" />
        </div>
    )
}

export default ShimmerCard;