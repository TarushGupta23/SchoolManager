import BaseButton from "../Button/BaseButton";

export default function UnimplementedProfilePopup(props) {
    return (<div className="popup">
        <section>
            <h2 className="section-heading">Person's Name</h2>
            <div className="tab-content">
                <div className="tab-buttons">
                    <BaseButton text={'view profile'} func={() => {window.open('/'+props.page, '_blank')} }/>
                </div>
                <h2 className="tab-explain-heading">
                    relevent and editable information about person/school is displayed here
                </h2>
            </div>
        </section>
    </div>)
}