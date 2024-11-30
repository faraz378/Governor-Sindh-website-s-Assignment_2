import React from "react";
import Image from "next/image";


const Heroo_2 = () => {
    return (
        <div className="h-full m-28 text-center">
            <h1 className="text-[#044E83] font-bold text-3xl">
            Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
            Developing Billion-Dollar Valued Developers and Solopreneurs
            </h1>
            <p className="pt-9 pb-6 text-xl text-justify">
                The pace of technological change is accelerating, big players like
                Microsoft, Amazon, Google, and OpenAI are winning by providing
                infrastructure, large AI foundation models, frameworks, 3D Metaverse
                experiences, and massive distribution networks. Solopreneurs trained in
                this program will win by automating work typically outsourced to
                employees, by directly connecting to customers by eliminating the
                middleman, and by developing vertical metaverses, thus paving the way
                for the first billion-dollar valued solopreneur businesses. This program
                has the objective to train this new breed of billion-dollar
                solopreneurs. These solopreneurs will adopt the ultra-lean business
                model and work independently and will not need to hire employees or
                other team members.
            </p>

            <div className="grid grid-cols-3 mt-5 gap-5">
                <Image
                src={"../../../images/picture/hero-1.jpg"}
                alt={"hero-1"}
                height={896}
                width={1088}
                className="rounded-[8px] w-full h-[300px] object-cover shadow-xl  shadow-zinc-700"
                >
                </Image>
                <Image
                src={"../../../images/picture/hero-2.jpg"}
                alt={"hero-2"}
                height={375}
                width={500}
                className="rounded-[8px] w-full h-[300px] object-cover shadow-xl  shadow-zinc-700"
                >
                </Image>
                <Image
                src={"../../../images/picture/hero-3.jpg"}
                alt={"hero-3"}
                height={896}
                width={1088}
                className="rounded-[8px] w-full h-[300px] object-cover shadow-xl  shadow-zinc-700"
                >
                </Image>
            </div>
            <div className="leading-28px"></div>
            <div className="text-5xl text-[#044E83] font-extrabold tracking-wide mt-10">
                <h3 className="lg:text-5xl">Core Courses Sequence</h3>
            </div>

            <div className="grid grid-cols-3 mt-8 gap-44">
                <Image
                src={"../../../images/picture/hero-4.jpg"}
                alt={"hero-4"}
                height={300}
                width={450}
                className="rounded-[12px] h-72 w-72 m-5 inset-0 object-cover shadow-xl shadow-zinc-500"
                >
                </Image>
                <Image
                src={"../../../images/picture/hero-5.jpg"}
                alt={"hero-5"}
                height={300}
                width={450}
                className="rounded-[12px] h-72 w-72 m-5 inset-0 object-cover shadow-xl shadow-zinc-500"
                >
                </Image>
                <Image
                src={"../../../images/picture/hero-6.jpg"}
                alt={"hero-6"}
                height={300}
                width={450}
                className="rounded-[12px] h-72 w-72 m-5 inset-0 object-cover shadow-xl shadow-zinc-500"
                >
                </Image>
            </div>
        </div>
    )
}

export default Heroo_2;