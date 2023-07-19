import React from "react";
import GridHelpNav from "./GridHelpNav";
import HelpContainerHeader from "./HelpContainerHeader";

const HelpContainer = () => {
  const gridCargo = [
    {
      Id: 1,
      Title: "SHIPPING AND DELIVERY",
    },
    {
      Id: 2,
      Title: "How can I benefit from free shipping on Nike orders?",
    },
    {
      Id: 3,
      Title: "What are Nike's delivery options?",
    },
    {
      Id: 4,
      Title: "Can I get international shipping for my Nike order?",
    },
  ];
  const gridRefunds = [
    {
      Id: 1,
      Title: "RETURNS",
    },
    {
      Id: 2,
      Title: "How do I return my Nike order?",
    },
    {
      Id: 3,
      Title: "What is Nike's return policy?",
    },
    {
      Id: 4,
      Title: "Where is my refund?",
    },
  ];
  const gridAccounts = [
    {
      Id: 1,
      Title: "NIKE MEMBERSHIP",
    },
    {
      Id: 2,
      Title: "What is Nike Membership?",
    },
    {
      Id: 3,
      Title: "How can I create a Nike Member Profile?",
    },
    {
      Id: 4,
      Title: "How can I make the most of NRC and NTC apps?",
    },
  ];
  const gridOrders = [
    {
      Id: 1,
      Title: "ORDERS",
    },
    {
      Id: 2,
      Title: "How can I track my Nike order?",
    },
    {
      Id: 3,
      Title: "Can I cancel or modify my Nike order?",
    },
    {
      Id: 4,
      Title: "What payment options can I use for Nike orders?",
    },
  ];
  const gridProducts = [
    {
      Id: 1,
      Title: "PRODUCT INFORMATION",
    },
    {
      Id: 2,
      Title: "How can I get the latest Nike sports shoes?",
    },
    {
      Id: 3,
      Title: "How can I find the right size and fit?",
    },
    {
      Id: 4,
      Title: "What is Nike By You's customization policy?",
    },
    {
      Id: 5,
      Title: "Do Nike shoes come with a warranty?",
    },
  ];
  const gridCorporation = [
    {
      Id: 1,
      Title: "CORPORATE",
    },
    {
      Id: 2,
      Title: "Where can I find more information about Nike, Inc.?",
    },
    {
      Id: 3,
      Title: "Where is the nearest Nike store to me?",
    },
  ];

  return (
    <div className="border p-5 mt-4 w-full h-full">
      <HelpContainerHeader />
      <div className="row row-cols-1 row-cols-3 gap-6">
        <GridHelpNav
          gridCargo={gridCargo}
          gridRefunds={gridRefunds}
          gridAccounts={gridAccounts}
          gridOrders={gridOrders}
          gridProducts={gridProducts}
          gridCorporation={gridCorporation}
        />
      </div>
    </div>
  );
};

export default HelpContainer;
