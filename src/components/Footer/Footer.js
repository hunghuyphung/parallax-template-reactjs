import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons/faArrowUp";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faPinterest,
    faTiktok,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className="padding-64-0 bc-black text-center">
            <button className="h-button hover-gray">
                <FontAwesomeIcon icon={faArrowUp} style={{marginRight: '16px'}} />
                To the top
            </button>
            <div className="margin-16-0 font-24">
                <FontAwesomeIcon icon={faFacebook} style={{margin: '0 2px'}}/>
                <FontAwesomeIcon icon={faInstagram} style={{margin: '0 2px'}}/>
                <FontAwesomeIcon icon={faTiktok} style={{margin: '0 2px'}}/>
                <FontAwesomeIcon icon={faPinterest} style={{margin: '0 2px'}}/>
                <FontAwesomeIcon icon={faTwitter} style={{margin: '0 2px'}}/>
                <FontAwesomeIcon icon={faLinkedin} style={{margin: '0 2px'}}/>
            </div>
            <p className="margin-15-0">
                Powered by w3.css
            </p>
        </div>
    );
}

export default Footer;