import React from "react";
import ContactUsNav from "./ContactUsNav";

const ContactUs = () => {
  const gridOrders = [
    {
      Id: 1,
      Image:
        "https://www.nike.com/assets/experience/membership/gethelp/assets/phone.png",
    },
    {
      Id: 2,
      Title: "PRODUCTS AND ORDERS",
    },
    {
      Id: 3,
      Title: "+90 (212) 365 04 90",
    },
    {
      Id: 4,
      Title: "9:00 AM - 6:00 PM",
    },
    {
      Id: 5,
      Title: "Monday - Friday",
    },
  ];
  const gridApps = [
    {
      Id: 1,
      Image:
        "https://www.nike.com/assets/experience/membership/gethelp/assets/phone.png",
    },
    {
      Id: 2,
      Title: "NRC and NTC",
    },
    {
      Id: 3,
      Title: "+31 (0) 20 5820542",
    },
    {
      Id: 4,
      Title: "9:00 AM - 6:00 PM",
    },
    {
      Id: 5,
      Title: "Monday - Friday",
    },
    {
      Id: 6,
      Title: "*English Only",
    },
  ];
  const gridMails = [
    {
      Id: 1,
      Image:
        "https://www.nike.com/assets/experience/membership/gethelp/assets/email.png",
    },
    {
      Id: 2,
      Title: "PRODUCTS AND ORDERS",
    },
    {
      Id: 3,
      Title: "Send us an email",
    },
    {
      Id: 4,
      Title: "We'll respond within",
    },
    {
      Id: 5,
      Title: "one business day",
    },
    {
      Id: 6,
      Title: "*English Only",
    },
  ];
  const gridCorps = [
    {
      Id: 1,
      Image:
        "https://www.nike.com/assets/experience/membership/gethelp/assets/link.png",
    },
    {
      Id: 2,
      Title: "COMPANY INFO AND QUESTIONS",
    },
    {
      Id: 3,
      Title: "Please check out our Corporate Contact options",
    },
  ];
  const gridMarket = [
    {
      Id: 1,
      Image:
        "https://www.nike.com/assets/experience/membership/gethelp/assets/store.png",
    },
    {
      Id: 2,
      Title: "STORE LOCATOR",
    },
    {
      Id: 3,
      Title: "Find nearby Nike retail stores",
    },
  ];

  return (
    <div className="border p-5 mt-4 w-full h-full md:p-16">
      <h2 className="text-3xl text-left">CONTACT US</h2>
      <hr className="my-4" />
      <div className="row row-cols-1 justify-center gap-4 row-cols-md-3 gap-md-6">
        <ContactUsNav
          gridOrders={gridOrders}
          gridApps={gridApps}
          gridMails={gridMails}
          gridCorps={gridCorps}
          gridMarket={gridMarket}
        />
      </div>
    </div>
  );
};

export default ContactUs;
