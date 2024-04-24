import dynamic from "next/dynamic";
import CanlendarPage from "@/components/calendar"

export const metadata = {
    title: 'Home || Calendar',
    description: 'Calendar Page',
}

const index = () => {
    return(
        <>
            <CanlendarPage />
        </>
    );
};


export default dynamic(() => Promise.resolve(index), {ssr: false});