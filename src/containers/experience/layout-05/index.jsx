import React from "react";
import PropTypes from "prop-types";
import { CardList } from "@ui/card-list";
import EducationCard from "@components/education-card/layout-03";
import PortfolioCard from "@components/portfolio-card/layout-03";
import { ItemType } from "@utils/types";

const EducationArea = ({ data }) => {
    return (
        <div
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
            data-aos-once="true"
            className="rn-portfolio-area single-card-sticky section-height"
        >
            <div className="inner">
                {data?.title && <h5 className="title">{data.title}</h5>}
                {data?.items && (
                    <CardList>
                        {data.items?.map((item) => (
                            <EducationCard
                                key={item.id}
                                title={item.title}
                                category={item.category}
                                image={item.images?.[0]}
                                texts={item.texts}
                                path={item.path}
                            />
                        ))}
                    </CardList>
                )}
            </div>
        </div>
    );
};

EducationArea.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default EducationArea;
