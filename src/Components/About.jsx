import React from 'react'

const About = () => {
    return (
        <div className='grid grid-cols-2 bg-slate-200'>
            <div className="images">
                <Images />
            </div>
            <div className="content">
                <Content />
            </div>
        </div>
    )
}

export default About

const Images = () => {
    return (
        <div className='flex flex-col items-center justify-center py-10 gap-y-3'>
            <div className='flex gap-x-3'>
                <div className='bg-blue-600 w-28 h-24 p-3 rounded-sm flex flex-col items-start justify-center'>
                    <svg width={"20"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ fill: "#FFF" }}><g id="Layer_2" data-name="Layer 2"><g id="layer_1-2" data-name="layer 1"><path class="cls-1" d="M24 12c-2.76 0-5-2.69-5-6s2.24-6 5-6 5 2.69 5 6-2.24 6-5 6zm0-10c-1.65 0-3 1.79-3 4s1.35 4 3 4 3-1.79 3-4-1.35-4-3-4zM17 46h14v2H17z" /><path class="cls-1" d="M18 26h2v21h-2zM23 30h2v17h-2zM28 26h2v21h-2z" /><path class="cls-1" d="M19 29h-2a3 3 0 0 1-3-3V15.58a5 5 0 0 1 4.45-5l5.44-.6.22 2-5.44.61a3 3 0 0 0-2.67 3V26a1 1 0 0 0 1 1h1V16h2v12a1 1 0 0 1-1 1z" /><path class="cls-1" d="M31 29h-2a1 1 0 0 1-1-1V16h2v11h1a1 1 0 0 0 1-1V15.58a3 3 0 0 0-2.67-3L23.89 12l.22-2 5.44.6a5 5 0 0 1 4.45 5V26a3 3 0 0 1-3 3z" /><path class="cls-1" d="M19 25h10v2H19zM10 14c-2.76 0-5-2.69-5-6a4.68 4.68 0 0 1 5-5 4.68 4.68 0 0 1 5 5c0 3.31-2.24 6-5 6zm0-9a2.72 2.72 0 0 0-3 3c0 2.21 1.35 4 3 4s3-1.79 3-4a2.72 2.72 0 0 0-3-3zM3 46h12v2H3z" /><path class="cls-1" d="M4 28h2v19H4zM9 32h2v15H9z" /><path class="cls-1" d="M5 31H3a3 3 0 0 1-3-3V17.58a5 5 0 0 1 4.45-5L9.89 12l.22 2-5.44.61a3 3 0 0 0-2.67 3V28a1 1 0 0 0 1 1h1V18h2v12a1 1 0 0 1-1 1z" /><path class="cls-1" d="M5 27h8v2H5zM38 14c-2.76 0-5-2.69-5-6a4.68 4.68 0 0 1 5-5 4.68 4.68 0 0 1 5 5c0 3.31-2.24 6-5 6zm0-9a2.72 2.72 0 0 0-3 3c0 2.21 1.35 4 3 4s3-1.79 3-4a2.72 2.72 0 0 0-3-3zM33 46h12v2H33z" /><path class="cls-1" d="M42 28h2v19h-2zM37 32h2v15h-2z" /><path class="cls-1" d="M45 31h-2a1 1 0 0 1-1-1V18h2v11h1a1 1 0 0 0 1-1V17.58a3 3 0 0 0-2.67-3L37.89 14l.22-2 5.44.6a5 5 0 0 1 4.45 5V28a3 3 0 0 1-3 3z" /><path class="cls-1" d="M35 27h8v2h-8z" /></g></g></svg>
                    <h1 className='text-white text-2xl font-extrabold'>5k+</h1>
                    <p className='text-[0.6rem] text-white font-semibold'>Trusted Customer</p>
                </div>
                <img className='w-80 rounded-sm' src="https://s7ap1.scene7.com/is/image/tatamotors/Dealership-728x420-02?$TT-728-420-D$&fit=crop&fmt=jpg" alt="" />
            </div>

            <div className='w-[70%] relative'>
                <img className='w-80 rounded-md' src="https://autoleap.com/wp-content/uploads/2021/08/image6-min.jpg" alt="" />
                <div className=' grid grid-cols-2 absolute top-[30%] right-[0%] bg-white px-5 py-3 rounded-md'>
                    <div className='bg-blue-600 w-10 h-10 flex justify-center items-center rounded-full'>
                        <svg width={"25"} fill='#FFF' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M82.962 68.5a26.889 26.889 0 0 0 7.328-13.514 15.7 15.7 0 0 0 .561-31.192v-2.041h1.727a5.8 5.8 0 0 0 4.1-1.7 5.775 5.775 0 0 0 0-8.194 5.8 5.8 0 0 0-4.1-1.706H35.426a5.8 5.8 0 0 0-4.1 1.706 5.775 5.775 0 0 0 0 8.194 5.8 5.8 0 0 0 4.1 1.7h1.727v2.037a15.7 15.7 0 0 0 .561 31.192A27.015 27.015 0 0 0 58.2 75.746v14.441h-7.771a13.311 13.311 0 0 0-13.276 13.276v2.784h-1.727a5.794 5.794 0 0 0-4.1 1.706 5.776 5.776 0 0 0 0 8.194 5.8 5.8 0 0 0 4.1 1.7h57.151a5.8 5.8 0 0 0 4.1-1.7 5.776 5.776 0 0 0 0-8.194 5.794 5.794 0 0 0-4.1-1.706h-1.726v-2.784a13.311 13.311 0 0 0-13.277-13.276h-7.768V75.746A26.9 26.9 0 0 0 82.962 68.5zm13.921-37.28a11.5 11.5 0 0 1-6.033 19.444V28.043a11.473 11.473 0 0 1 6.033 3.177zm-59.73 19.444a11.5 11.5 0 0 1 0-22.621v22.621zm-1.727-33.112a1.6 1.6 0 0 1-1.136-.467l-.008-.008a1.617 1.617 0 0 1 0-2.272l.008-.008a1.6 1.6 0 0 1 1.136-.466h57.151a1.6 1.6 0 0 1 1.136.466l.008.008a1.617 1.617 0 0 1 0 2.272l-.008.008a1.6 1.6 0 0 1-1.136.467H35.426zm53.324 92.9h3.827a1.6 1.6 0 0 1 1.136.467l.008.008a1.617 1.617 0 0 1 0 2.272l-.008.008a1.6 1.6 0 0 1-1.136.466H35.426a1.6 1.6 0 0 1-1.136-.466l-.008-.008a1.617 1.617 0 0 1 0-2.272l.008-.008a1.6 1.6 0 0 1 1.136-.467H88.75zM77.574 94.388a9.106 9.106 0 0 1 9.075 9.075v2.784h-45.3v-2.784a9.106 9.106 0 0 1 9.075-9.075zM65.605 76.336v13.851H62.4V76.336c.344.021 2.859.021 3.205 0zm-1.312-4.154H63.707a22.733 22.733 0 0 1-22.353-22.61V21.753h45.3v27.819a22.733 22.733 0 0 1-22.36 22.61z"/><path d="m76.771 56.925-2.295-7.016 5.979-4.326a4.427 4.427 0 0 0-2.914-8l-7.066.014-2.268-7.017a4.332 4.332 0 0 0-1.843-2.4A4.444 4.444 0 0 0 64 27.522a4.444 4.444 0 0 0-2.361.663 4.332 4.332 0 0 0-1.843 2.4L57.53 37.6l-7.066-.014a4.428 4.428 0 0 0-2.914 8l5.979 4.326-2.299 7.013a1.919 1.919 0 0 0-.058.219 4.413 4.413 0 0 0 6.86 4.715L64 57.506l5.968 4.353a4.413 4.413 0 0 0 6.86-4.715 1.919 1.919 0 0 0-.057-.219zm-5.991-9.517a2.1 2.1 0 0 0-.763 2.346l2.731 8.35.032.111a.25.25 0 0 1 .011.116.22.22 0 0 1-.184.187.238.238 0 0 1-.176-.039l-7.17-5.23A2.088 2.088 0 0 0 64 52.831a2.088 2.088 0 0 0-1.257.417l-7.17 5.23a.238.238 0 0 1-.176.039.22.22 0 0 1-.184-.187.25.25 0 0 1 .011-.116c.012-.037.022-.074.032-.111l2.731-8.35a2.1 2.1 0 0 0-.763-2.346l-7.216-5.221a.231.231 0 0 1-.1-.148.236.236 0 0 1 .044-.174.216.216 0 0 1 .081-.072.265.265 0 0 1 .128-.023 2.063 2.063 0 0 0 .292 0l8.6.017a2.093 2.093 0 0 0 1.993-1.453l2.736-8.475a.206.206 0 0 1 .072-.115.275.275 0 0 1 .145-.04.275.275 0 0 1 .145.04.206.206 0 0 1 .072.115l2.736 8.475a2.093 2.093 0 0 0 1.993 1.453l8.6-.017a2.063 2.063 0 0 0 .292 0 .265.265 0 0 1 .128.023.216.216 0 0 1 .081.072.236.236 0 0 1 .044.174.231.231 0 0 1-.1.148l-7.216 5.221z"/></svg>
                    </div>
                    <h1 className='text-3xl font-extrabold'>10+</h1>
                    <p className='text-[#0057FF] text-xs font-semibold col-span-2'>Years of Experience</p>
                </div>
            </div>
        </div>
    )
}

const Content = () => {
    return (
        <div className='py-10'>
            <div className="title flex items-center gap-x-3">
                <div className='w-8 h-[0.12rem] bg-blue-500'/>
                <h1 className='text-[0.6rem] tracking-wider font-extrabold text-blue-500'>KNOW ABOUT US</h1>
            </div>
            <div>
                <h1>Our Best Advantages</h1>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veritatis tenetur aut corrupti, nemo facilis impedit error asperiores vitae. Minus rerum incidunt omnis nostrum sequi earum mollitia asperiores minima adipisci!</p>
            </div>
            <div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}