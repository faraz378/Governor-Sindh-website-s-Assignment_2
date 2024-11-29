import React from "react";
import Image from "next/image";

const Heroo_1 = () => {
    return(
        <section className="w-full h-[100vh] pt-20 border-b-2 border-x-amber-100">
            <div className="flex justify-between">
                <div className="w-[60%] h-full">
                    <div className="pt-20 pl-28">
                        <h1 className="text-5xl text-[#044E83] font-extrabold tracking-wide">
                            Governor Sindh Pakistan
                        </h1>
                        <h2 className="text-4xl text-[#044E83] pb-3 tracking-wider">
                            Kamran Khan Tessori
                        </h2>
                        <h2 className="w-[390px] text-[#2EB6E8] text-[2.2rem] font-[800] leading-[40px] pb-4">
                            Certified Cloud Applied Generative AI Engineer (GenEng)
                        </h2>

                        <p className="text-[#044E83] font-[800] text-xl pb-3">
                            Earn up to $5,000 / Month{""}
                        </p>
                        <p className="text-[#044E83] font-[800] text-2xl w-[340px] pb-6">
                            Now Admission are Open in Karachi
                        </p>
                        <div className="flex gap-32">
                            <button className="pt-2 pb-2 pl-12 pr-12 bg-[#044E83] text-white text-center border-none font-[700] rounded-[6px]">
                                Apply Now
                            </button>
                            <div>
                                <p className="text-[#044E83] font-extrabold text-3xl">500,000</p>
                                <p>Accepted Applications</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Image
                        className="h-[34rem] w-[34rem] object-cover object-center "
                        src={require("../../../images/picture/governor.png")}
                        alt={"logo"}
                        height={600}
                        width={600}
                        >
                    </Image>
                </div>
            </div>
        </section>
    );
};

export default Heroo_1;