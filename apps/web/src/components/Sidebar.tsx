import {
  LayoutDashboard,
  Users,
  MessageCircle,
  Bot,
  Package,
  Settings
} from "lucide-react";


const menu = [
  {
    name: "Dashboard",
    icon: LayoutDashboard
  },
  {
    name: "Clientes",
    icon: Users
  },
  {
    name: "Conversas",
    icon: MessageCircle
  },
  {
    name: "Inteligência Artificial",
    icon: Bot
  },
  {
    name: "Produtos",
    icon: Package
  },
  {
    name: "Configurações",
    icon: Settings
  }
];


export default function Sidebar(){

  return (

    <aside>

      <h1>
        LopesBot AI
      </h1>


      <nav>

        {
          menu.map((item)=>{

            const Icon = item.icon;

            return (

              <div key={item.name}>

                <Icon size={20}/>

                <span>
                  {item.name}
                </span>

              </div>

            )

          })
        }

      </nav>


    </aside>

  )

}