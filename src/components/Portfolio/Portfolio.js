import parallax2 from '../../assets/parallax2.jpg';

const style = {
    background: `url(${parallax2}) center center / cover no-repeat`,
    minHeight: '400px',
    opacity: '0.75'
};


function Portfolio() {
    return (
        <div
            className="display-container"
            style={style}
        >
            <span className="display-middle font-36 color-white letter-spacing-10 no-wrap line-height-min">
                PORTFOLIO
            </span>
        </div>
    );
}

export default Portfolio;