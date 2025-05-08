import { useState } from "react";
import "./App.css";
import Sidebar from "./layout/sidebar/sidebar";
import AccordionTransition from "./component/Accordion/Accordion";
import TableauEmbed from "./component/EmbeddedTableau/EmbeddedTableau";

function App() {
  const [activeItem, setActiveItem] = useState("Overview");

  const link = {
    overview: {
      name: "Test_17440654636450/Sheet3",
      static_image:
        "https://public.tableau.com/static/images/Te/Test_17440654636450/Sheet3/1.png",
    },
    grants: {
      name: "Member2_17464727685390/Story2",
      static_image:
        "https://public.tableau.com/static/images/Me/Member2_17464727685390/Story2/1.png",
    },
    diversity: {
      name: "GenderEDA-Himeshi/TopDisciplines",
      staticImage:
        "https://public.tableau.com/static/images/Ge/GenderEDA-Himeshi/TopDisciplines/1.png",
    },
    impacts: {
      name: "Test_17440654636450/Dashboard3",
      staticImage:
        "https://public.tableau.com/static/images/Te/Test_17440654636450/Dashboard3/1.png",
    },
    contributors:{
      name:"Test_17440654636450/Dashboard4",
      staticImage:"https://public.tableau.com/static/images/Te/Test_17440654636450/Dashboard4/1.png"
    
    }
  };

  return (
    <div className="layout">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div>
        <nav>SNSF Automated Dashboard</nav>
        <div className="outlet_container">
          {activeItem === "Data Stories" ? (
            <AccordionTransition />
          ) : (
            <TableauEmbed
              name={link[activeItem.toLowerCase()]?.name}
              staticImage={link[activeItem.toLowerCase()]?.static_image}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
