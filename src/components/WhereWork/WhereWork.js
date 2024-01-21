import map from '../../assets/map.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLocationDot, faMugSaucer, faPhone} from "@fortawesome/free-solid-svg-icons";

function WhereWork() {
    return (
        <div>
            <div className="h-content margin-auto padding-64-16 color-dark-gray">
                <h3 className="text-center">WHERE I WORK</h3>
                <p className="margin-15-0 text-center">
                    <em>I'd love your feedback!</em>
                </p>
                <div className="margin-16-0 padding-32-0 display-flex flex-column-small">
                        <div className="width-third padding-0-16 width-100-small">
                            <img src={map} className="width-100 border-radius-4" alt=""/>
                        </div>
                        <div className="width-second-third margin-16-0 padding-0-16 width-100-small">
                            <div className="margin-bottom-16 font-18">
                                <FontAwesomeIcon icon={faLocationDot} style={{marginRight: '16px', fontSize: '22px'}}/>
                                Chicago, US
                                <br/>
                                <FontAwesomeIcon icon={faPhone} style={{marginRight: '16px', fontSize: '22px'}}/>
                                Phone: +00 151515
                                <br/>
                                <FontAwesomeIcon icon={faEnvelope} style={{marginRight: '16px', fontSize: '22px'}}/>
                                Email: mail@mail.com
                            </div>
                            <p className="margin-15-0">
                                Swing by for a cup of <FontAwesomeIcon icon={faMugSaucer} style={{fontSize: '12px'}} />, or leave me a note:
                            </p>
                            <div className="display-flex margin-bottom-8 flex-column-small">
                                <input type="text" placeholder="Name" className="h-input width-50 width-100-small"/>
                                <div className="padding-0-8"></div>
                                <input type="text" placeholder="Email" className="h-input width-50 width-100-small"/>
                            </div>
                            <input type="text" placeholder="Message" className="h-input"/>
                            <div className="display-flex flex-end">
                                <button className="h-button margin-16-0 bc-black hover-gray">SEND MESSAGE</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default WhereWork;