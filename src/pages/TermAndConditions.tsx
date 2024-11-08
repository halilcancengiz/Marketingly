import { useEffect } from "react";

const TermAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <section className="pt-[40px] xs:pt-[50px] pb-[60px] md:pt-[60px] md:pb-[79px] lg:pt-[98px] lg:pb-[98px] px-6 relative bg-[#F8F9FF]">
            <div className="max-w-[1173px] w-full mx-auto flex relative">

                <div id="menuItems" className="mt-[63px] mr-10 min-w-[274px] flex flex-col gap-[15px] h-full sticky top-5">
                    <a href="#terms-and-conditions" className="p-[25px] shadow-lg hover-down text-primary bg-white rounded-[10px] xs:text-[18px] text-base tb-bold cursor-pointer hover:shadow-md transition-all duration-300 hover:text-primary">Terms and Conditions</a>
                    <a href="#privacy-policy" className="p-[25px] shadow-lg hover-down text-neutral-800 bg-white rounded-[10px] xs:text-[18px] text-base tb-bold cursor-pointer hover:shadow-md transition-all duration-300 hover:text-primary">Privacy Policy</a>
                    <a href="#user-policy" className="p-[25px] shadow-lg hover-down text-neutral-800 bg-white rounded-[10px] xs:text-[18px] text-base tb-bold cursor-pointer hover:shadow-md transition-all duration-300 hover:text-primary">User Policy</a>
                </div>


                <div className="flex flex-col h-full rounded-[24px] shadow-lg bg-white w-full lg:pt-[80px] lg:px-[91px] lg:pb-[108px] md:pt-[70px] md:px-[76px] md:pb-[90px] xs:pt-[50px] xs:px-[25px] xs:pb-[63px]">
                    <div id="terms-and-conditions" className="flex flex-col">
                        <div className="text-neutral-800 tb-bold lg:text-[38px] xs:text-[32px] text-[26px] md:mb-4 mb-[10px]">Terms and Conditions</div>
                        <div className="text-neutral-600 xs:text-[18px] tb-medium text-base md:mb-8 mb-[26px] leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua massa sed elementum tempus egestas sed sed risus pretium quam amet nulla facilisi morbi tempus iaculis urna <a href="#" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">et malesuada</a> fames ac turpis egestas sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.</div>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px] md:mb-4 mb-[10px]">Use Terms for Marketing X app</div>
                        <div className="text-neutral-600 xs:text-[18px] tb-medium text-base md:mb-8 mb-[26px] leading-[30px]">Velit sed ullamcorper morbi tincidunt ornare massa eget volutpat est velit egestas dui id ornare arcu. Facilisis sed odio morbi quis commodo vitae proin sagittis nisl rhoncus mattis rhoncus <a href="#" className="hover:text-secondary3 underline text-primary tb-medium transition-all duration-300">nunc scelerisque</a> viverra mauris in vitae suscipit tellus mauris a purus in massa tempor nec feugiat nisl pretium fusce id nunc sed velit dignissim sodales bibendum at varius vel pharetra pharetra massa massa ultricies mi ornare aenean euismod elementum nisi quis eleifend ut tortor pretium viverra suspendisse potenti nullam ac tortor volutpat commodo sed egestas egestas fringilla phasellus faucibus.</div>
                    </div>
                    <hr className="lg:my-[84px] md:my-[70px] xs:my-[60px] my-[50px]" />

                    <div id="privacy-policy" className="flex flex-col">
                        <div className="text-neutral-800 tb-bold lg:text-[38px] xs:text-[32px] text-[26px] md:mb-4 mb-[10px]">Privacy Policy</div>
                        <div className="text-neutral-600 xs:text-[18px] tb-medium text-base leading-[30px]">Enim nec dui nunc mattis enim vulputate eu scelerisque felis imperdiet proin fermentum leo vel proin sed libero enim sed faucibus turpis at lectus urna duis convallis convallis at tellus at urna condimentum mattis pellentesque id nibh nibh cras pulvinar mattis nunc sed.</div>
                        <ol className="pl-10 md:my-8 my-[26px]">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">1. Mollis aliquam ut porttitor leo a diam.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">2. Enim nec dui nunc mattis enim.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">3. Vulputate eu scelerisque felis fermentum leo vel.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">4. Quam lacus suspendisse posuere lorem.</li>
                        </ol>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px] md:mb-4 mb-[10px]">Cookies and tracking</div>
                        <div className="text-neutral-600 xs:text-[18px] tb-medium text-base md:mb-8 mb-[26px] leading-[30px]">Consequat mauris nunc congue nisi cursus metus aliquam eleifend mi in null dignissim cras tincidunt lobortis feugiat vivamus blandit aliquam etiam erat velit sapien faucibus et molestie ac ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae id cursus metus aliquam eleifend mi in nulla posuere sollicitudin.</div>
                    </div>
                    <hr className="lg:my-[84px] md:my-[70px] xs:my-[60px] my-[50px]" />

                    <div id="user-policy" className="flex flex-col">
                        <div className="text-neutral-800 tb-bold lg:text-[38px] xs:text-[32px] text-[26px] md:mb-4 mb-[10px]">User Policy</div>
                        <div className="text-neutral-600 xs:text-[18px] tb-medium text-base md:mb-8 mb-[26px] leading-[30px]">Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin amet facilisis magna etiam tempor pellentesque massa placerat duis ultricies lacus sed sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Id interdum velit laoreet id donec ultrices aliquam malesuada bibendum arcu vitae elementum curabitur. Sapien eget mi proin sed libero at erat pellentesque adipiscing commodo at pellentesque elit vivamus at augue eget arcu dictum varius.</div>
                        <div className="text-neutral-800 tb-bold md:text-[24px] xs:text-[22px] text-[20px] md:mb-4 mb-[10px]">User responsibilities</div>
                        <div className="text-neutral-600 xs:text-[18px] tb-medium text-base md:mb-8 mb-[26px] leading-[30px]">eugiat vivamus at augue eget arcu dictum varius curabitur vitae nunc sed velit dignissim felis eget velit aliquet sagittis id consectetur sit amet consectetur adipiscing elit pellentesque habitant morbi mus mauris vitae ultricies leo integer malesuada id aliquet lectus proin nibh nisl condimentum dolor viverra ipsum nunc.</div>
                        <ul className="pl-10 md:my-8 my-[26px] list-disc">
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">Mollis aliquam ut porttitor leo a diam.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">Enim nec dui nunc mattis enim.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">Vulputate eu scelerisque felis fermentum leo vel.</li>
                            <li className="xs:text-[18px] text-base text-neutral-600 tb-medium leading-[30px] mb-2">Quam lacus suspendisse posuere lorem.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default TermAndConditions