import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Service_Contact from "./Pages/Service/Service_Contact";
import Ticket from "./Pages/Ticket/Ticket";
import InfomationCustomer from "./Pages/Ticket/InformationCustomer";
import SupportServices from "./Pages/Ticket/SupportServices";
import Seat from "./Pages/Ticket/Seat";
import Company from "./Pages/Introduce/Company";
import Plane from "./Pages/Introduce/Plane";
import Partner from "./Pages/Introduce/Partner"
import TermsAndCondition from "./Pages/Rule/TermsAndCondition"
import ProtectInf from "./Pages/Rule/ProtectInf";
import Customer_Care from "./Pages/Service/Customer_Care";
import Question from "./Pages/Service/Question";
import Contact from "./Pages/Service/Contact";
import Socialnetwork from "./Pages/Service/Socialnetwork";
import Protect_Customers from "./Pages/Service/Protect_Customers";
import Baggage_Information from "./Pages/Useful_Information/Baggage_Information";
import Purchase_Guide from "./Pages/Useful_Information/Purchase_Guide";
import Taxes_Surcharges from "./Pages/Useful_Information/Taxes_Surcharges";
import InfoTravel from "./Pages/Menu/InfoTravel";
import Service_menu from "./Pages/Menu/Service";
import Introduce from "./Pages/Menu/Introduce";
import Checkin from "./Pages/Menu/Infoplus/Checkin";
import Airport from "./Pages/Menu/Infoplus/Airport";
function App() {
  return (
    <BrowserRouter>
      <Routes> InfoTravel
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="service_contact" element={< Service_Contact />} />
          <Route path="customer_care" element={< Customer_Care />} />
          <Route path="question" element={< Question />} />
          <Route path="ticket" element={< Ticket />} />
          <Route path="contact" element={< Contact/>} />
          <Route path="socialnetwork" element={< Socialnetwork />} />
          <Route path="protectcustomers" element={< Protect_Customers />} />
          <Route path="baggage" element={< Baggage_Information />} />
          <Route path="guide" element={< Purchase_Guide />} />
          <Route path="Taxes_Surcharges" element={< Taxes_Surcharges />} />
          <Route path="/ticket/infcustomer" element={< InfomationCustomer />} />
          <Route path="infotravel" element={< InfoTravel />} />
          <Route path="servicemenu" element={< Service_menu />} />
          <Route path="introduce" element={<Introduce/>}/>
          <Route path="checkin" element={<Checkin/>}/>
          <Route path="airport" element={<Airport/>}/>
          <Route path="/ticket/spServices" element={< SupportServices />} />
          <Route path="/ticket/seat" element={< Seat />} />
          <Route path="company" element={< Company />} />
          <Route path="plane" element={< Plane />} />
          <Route path="partner" element={< Partner />} />
          <Route path="termsandcondition" element={< TermsAndCondition />} />
          <Route path="protectinf" element={< ProtectInf />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
