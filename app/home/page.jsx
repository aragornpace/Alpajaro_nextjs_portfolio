/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"

const HomePage = ()=>{
    return <div className= "bg-white h-[100vh] w-full flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-[25px]">
            <Image
            src="/profile.jpg"
            width={500}
            height={500}
            alt="profile"
            />
            <h2 className="text-black text-[60px] font-bold">Marco Alpajaro</h2>
            <p className="max-w-[500px] w-full text-black text-center">Study? well well well i dont know men. Workout? definitely, Im addicted to it bruh.</p>
        </div>
    </div>
}
export default HomePage;