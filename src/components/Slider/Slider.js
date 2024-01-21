import parallax1 from '../../assets/parallax1.jpg';

const style = {
    background: `url(${parallax1}) center center / cover no-repeat`,
    minHeight: '400px',
    opacity: '0.75'
};


function Slider() {
    return (
        <div
            className="display-container"
            style={style}
        >
            <span className="display-middle padding-12-24 bc-black font-24 letter-spacing-10 no-wrap line-height-min">
                MY <span className="hide-small">WEBSITE</span> LOGO
            </span>
        </div>
    );
}

export default Slider;