import React from "react";
import PropTypes from "prop-types";
import ContactForm from "@components/contact-form";
import ContactInfoCard from "@components/contact-info-card";
import {
    SectionTitleType,
    HeadingType,
    TextType,
    ImageType,
    SocialType,
} from "@utils/types";

const ContactArea = ({ data, id }) => {
    return (
        <div
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
            data-aos-once="true"
            className="rn-contact-area section-height" id={id}
        >
            <div className="inner">
                <h5 className="title">Contact Me</h5>
                <ContactInfoCard
                    image={data?.images?.[0]}
                    title={data?.headings?.[0].content}
                    subtitle={data?.headings?.[1].content}
                    desc={data?.texts?.[0].content}
                    phone={data?.phone}
                    email={data?.email}
                    socials={data?.socials}
                />
            </div>
        </div>
    );
};

ContactArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
        phone: PropTypes.string,
        email: PropTypes.string,
        getform_url: PropTypes.string,
    }),
};

ContactArea.defaultProps = {
    id: "contacts",
};

export default ContactArea;
