// import React from 'react';

// export default function HomeBanner({ banners }) {
//     return (
//         <section className="home-section">
//             <div className="skitter-large-box">
//                 <div className="skitter skitter-large with-dots">
//                     <ul>
//                         {banners.map((banner, index) => (
//                             <li key={index}>
//                                 <a href={banner.link}>
//                                     <img src={banner.image} alt="" className="downBars" />
//                                 </a>
//                                 <div className="label_text">
//                                     <div className="container">
//                                         <div className="text-box">
//                                             <h1>{banner.title}<span /></h1>
//                                             <p>{banner.description}</p>
//                                             <button className="btn-custom">{banner.buttonText}</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </section>
//     );
// }


import React from 'react';

export default function HomeBanner({ banners }) {
    return (
        <section className="home-section">
            <div className="skitter-large-box">
                <div className="skitter skitter-large with-dots">
                    <ul>
                        {banners.map((banner, index) => (
                            <li key={index} className="relative">
                                <a href={banner.link} className="block">
                                    <img
                                        src={banner?.image}
                                        alt=""
                                        className="downBars w-full h-auto object-cover"
                                    />
                                </a>
                                <div className="label_text absolute inset-0 flex flex-col justify-center items-center p-4 bg-black bg-opacity-50 text-white">
                                    <div className="container max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-center">
                                   
                                    <div className="text-box p-0" style={{marginBottom:"2rem"}}>
                                   
                                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold"
                                    style={{color:"#E20613"}}>
  {banner.title}
</h1>
<p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
  {banner.description}
</p>
<button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
style={{background:"#E20613", color:"white"}}
>
  {banner.buttonText}
</button>

</div>

                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
