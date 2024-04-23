import Wrapper from "@/components/layout/Wrapper";
import HomeMain from './(homes)/page'

export const metadata = {
  title: 'Lapaz Reservation System',
  description:
    'Lapaz Reservation System',
}

export default function Home() {
  return (
    <Wrapper>
      <HomeMain/>
    </Wrapper>
    
  )
}
