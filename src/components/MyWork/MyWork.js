import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';
import p4 from '../../assets/p4.jpg';
import p5 from '../../assets/p5.jpg';
import p6 from '../../assets/p6.jpg';
import p7 from '../../assets/p7.jpg';
import p8 from '../../assets/p8.jpg';
import Image from "./Image/Image";

const imgListOne = [p1, p2, p3, p4];
const imgListTwo = [p5, p6, p7, p8];


function MyWork() {
    return (
        <div>
            <div className="h-content margin-auto padding-64-16 color-dark-gray">
                <h3 className="text-center">MY WORK</h3>
                <p className="margin-15-0 text-center">
                    <em>Here are some of my latest lorem work ipsum tipsum.
                        Click on the images to make them bigger</em>
                </p>
                <br/>
                <div className="padding-0-8 display-flex flex-column-small">
                    {imgListOne.map(img => <Image src={img}></Image>)}
                </div>
                <div className="margin-16-0 text-center">
                    <div className="padding-0-8 display-flex flex-column-small">
                        {imgListTwo.map(img => <Image src={img}></Image>)}
                    </div>
                    <button className="h-button margin-top-64 padding-12-24 bc-light-grey hover-gray">LOAD MORE</button>
                </div>
            </div>
        </div>
    );
}

export default MyWork;