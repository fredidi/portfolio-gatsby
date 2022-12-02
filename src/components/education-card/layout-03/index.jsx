import React, { useState } from "react";
import PropTypes from "prop-types";
import { ImageType, TextType } from "@utils/types";
import { CardListItem } from "@ui/card-list";
import PortfolioModal from "@components/modal-portfolio";
import EducationModal from "@components/modal-experience";

const EducationCard = ({ title, category, image, path, texts }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <CardListItem
                onClick={() => setShow(true)}
                onKeyPress={() => setShow(true)}
            >
                {title}
            </CardListItem>
            <EducationModal
                show={show}
                setShow={setShow}
                title={title}
                category={category}
                image={image}
                texts={texts}
                path={path}
            />
        </>
    );
};

EducationCard.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.shape(ImageType).isRequired,
    path: PropTypes.string.isRequired,
    texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
};

export default EducationCard;
