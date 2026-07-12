import Sidebar from "../components/Sidebar";
import Header from "../components/Header";


interface Props {

  children: React.ReactNode;

}


export default function DashboardLayout({
  children
}: Props){


  return (

    <div>

      <Sidebar>


      </Sidebar>


      <main>

        <Header/>


        <section>

          {children}

        </section>


      </main>


    </div>

  )

}