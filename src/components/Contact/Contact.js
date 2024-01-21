import parallax3 from '../../assets/parallax3.jpg';

const style = {
    background: `url(${parallax3}) center center / cover no-repeat`,
    minHeight: '400px',
    opacity: '0.75'
};


function Contact() {
    return (
        <div
            className="display-container"
            style={style}
        >
            <span className="display-middle font-36 color-white letter-spacing-10 no-wrap line-height-min">
                CONTACT
            </span>
        </div>
    );
}

export default Contact;