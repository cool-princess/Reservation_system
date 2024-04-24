import dynamic from "next/dynamic";
import CalendarPage from "@/components/calendar";

export const metadata = {
    title: 'Home || Calendar',
    description: 'Calendar Page',
}

const index = () => {
    return(
        <>
            <CalendarPage />
        </>
    );
};


export default dynamic(() => Promise.resolve(index), {ssr: false});