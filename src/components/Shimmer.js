const Shimmer = () => {
    return (
        <div className="shimmer-container">
            <div className="shimmer-left-container">
                <div className="shine box"></div>

                <div className="line-container">
                    <div className="shine lines"></div>
                    <div className="shine lines"></div>
                    <div className="shine lines"></div>
                </div>

                <div className="shine photo"></div>
                <div className="shine photo"></div>

                <div className="shine box"></div>

                <div className="line-container">
                    <div className="shine lines"></div>
                    <div className="shine lines"></div>
                    <div className="shine lines"></div>
                </div>
            </div>
            <div className="shimmer-right-container">
                {Array(6)
                    .fill("")
                    .map((e, index) => (
                        <div key={index} className="shimmer-card shine"></div>
                    ))}
            </div>


        </div>
    )
}

export default Shimmer;