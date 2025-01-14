// import React from 'react';

// export default function PricingSection({ pricingPlans, backgroundImage }) {
//     return (
//         <section className="pricing-section">
//             <div className="pricing-banner" style={{ background: `url(${backgroundImage})` }}>
//                 <div className="overlay">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col">
//                                 <div className="header-text text-center mx-auto">
//                                     <h5>Our Pricing</h5>
//                                     <h2>Choose a package which suits you best</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="pricing-plans">
//                 <div className="container">
//                     <div className="row g-4">
//                         {pricingPlans.map((plan, index) => (
//                             <div className="col-lg-4" key={index}>
//                                 <div className={`pricing-box ${plan.highlighted ? 'box-2' : ''}`} data-aos="fade-up" data-aos-duration={1000} data-aos-anchor-placement="center-bottom">
//                                     <div className="pricing-header">
//                                         <h4>{plan.name}</h4>
//                                         <h2>{plan.price}<span>$</span></h2>
//                                         <h4>Per Month</h4>
//                                     </div>
//                                     <div className="pricing-body">
//                                         <ul>
//                                             {plan.features.map((feature, i) => (
//                                                 <li key={i}>{feature}</li>
//                                             ))}
//                                         </ul>
//                                         <a href="#" className={`btn-custom ${plan.highlighted ? '' : 'btn-dark'}`}>Buy Now</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }



import React from 'react';

export default function PricingSection({ pricingPlans, backgroundImage }) {
    return (
        <section className="pricing-section" style={{ backgroundColor: '#F4F4F4' }}>
            <div className="pricing-banner" style={{ background: `url(${backgroundImage}) no-repeat center center/cover` }}>
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="header-text text-center mx-auto">
                                    <h5>Our Pricing</h5>
                                    <h2>Choose a package which suits you best</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricing-plans">
                <div className="container">
                    <div className="row g-4">
                        {pricingPlans.map((plan, index) => (
                            <div className="col-lg-4" key={index}>
                                <div className={`pricing-box ${plan.highlighted ? 'box-2' : ''}`} data-aos="fade-up" data-aos-duration={1000} data-aos-anchor-placement="center-bottom">
                                    <div className="pricing-header">
                                        <h4>{plan.name}</h4>
                                        <h2>{plan.price}<span>$</span></h2>
                                        <h4>Per Month</h4>
                                    </div>
                                    <div className="pricing-body">
                                        <ul>
                                            {plan.features.map((feature, i) => (
                                                <li key={i}>{feature}</li>
                                            ))}
                                        </ul>
                                        <a href="#" className={`btn-custom ${plan.highlighted ? '' : 'btn-dark'}`}>Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
