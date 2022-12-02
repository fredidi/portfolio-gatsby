import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import HeroArea from "@containers/hero/layout-10";
import AboutArea from "@containers/about/layout-03";
import SkillArea from "@containers/skill/layout-02";
import EducationArea from "@containers/experience/layout-05";
import PortfolioArea from "@containers/portfolio/layout-05";
import BlogArea from "@containers/blog/layout-03";
import TestimonialArea from "@containers/testimonial/layout-02";
import ContactArea from "@containers/contact/layout-03";
import ServiceArea from "@containers/service/layout-05";

const IndexFreelencerPage = ({ data }) => {
    const content = normalizedData(data?.homePage?.content || []);
    return (
        <Layout pageTitle="Fredrik">
            <main className="main-page-wrapper">
                <div className="rn-slider-area">
                    <div className="container">
                        <div className="row row--30 pt--100 pt_sm--50">
                            <div className="col-lg-6">
                                <HeroArea data={content["hero-section"]}
                                />
                            </div>
                            <div className="col-lg-6">
                                <div className="sticky-home-wrapper">
                                    <AboutArea
                                        data={content["about-section"]}
                                    />
                                    <SkillArea
                                        data={content["skill-section"]}
                                    />
                                    <EducationArea
                                        data={content["education-section"]}
                                    />
                                    <PortfolioArea
                                        data={content["portfolio-section"]}
                                    />
                                    <EducationArea
                                        data={content["experience-section"]}
                                    />
                                    <ServiceArea
                                        data={content["service-section"]}
                                    />
                                    <BlogArea
                                        data={{
                                            ...content["blog-section"],
                                            blogs: data?.allArticle?.nodes,
                                        }}
                                    />
                                    <section id="contact-me">
                                         <ContactArea
                                    data={{
                                        ...content["contact-section"],
                                        socials: data.site.siteMetadata.socials,
                                        phone: data.site.siteMetadata?.contact?.phone,
                                        email: data.site.siteMetadata?.contact?.email,
                                    }}
                                    />
                                    </section>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export const query = graphql`
    query FreelencerPageQuery {
        site {
            siteMetadata {
                contact {
                    phone
                    email
                }
                socials {
                    id
                    title
                    icon
                    path
                }
            }
        }
        homePage(title: { eq: "freelencer-home" }) {
            content {
                ...Content01
            }
        }
        allArticle(limit: 3) {
            nodes {
                ...Article
            }
        }
    }
`;

IndexFreelencerPage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                socials: PropTypes.arrayOf(PropTypes.shape({})),
                contact: PropTypes.shape({
                    phone: PropTypes.string,
                    email: PropTypes.string,
                }),
                getform_url: PropTypes.string,
            }),
        }),
        homePage: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allArticle: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export default IndexFreelencerPage;
