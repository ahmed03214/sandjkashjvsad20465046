import React from "react";

import AdsMangement from "./AdsMangement";
import GraphicDesign from "./GraphicDesign";
import SocialMange from "./SocialMange";
import Writing from "./Writing";
import MainService from "./MainService";
import WebDesign from "./WebDesign";
import EcommerceDesign from "./EcommerceDesign";
import SEO from "./SEO";
import DigitalDesign from "./DigitalDesign";
import MobileApp from "./MobileApp";

// special Services Id
const Ids = {
  WebDesign_Id: "1",
  EcommerceDesign_Id: "2",
  SEO_Id: "3",
  DigitalDesign_Id: "4",
  MobileApp_Id: "5",
  Writing_Id: "6",
  SocialMange_Id: "7",
  AdsMangement_Id: "8",
  GraphicDesign_Id: "9",
};

const CurrentService = ({ id, mainData, service }) => {
  return id === Ids.WebDesign_Id ? (
    <WebDesign mainData={mainData} service={service} />
  ) : id === Ids.EcommerceDesign_Id ? (
    <EcommerceDesign mainData={mainData} service={service} />
  ) : id === Ids.SEO_Id ? (
    <SEO mainData={mainData} service={service} />
  ) : id === Ids.DigitalDesign_Id ? (
    <DigitalDesign mainData={mainData} service={service} />
  ) : id === Ids.MobileApp_Id ? (
    <MobileApp mainData={mainData} service={service} />
  ) : id === Ids.AdsMangement_Id ? (
    <AdsMangement mainData={mainData} service={service} />
  ) : id === Ids.GraphicDesign_Id ? (
    <GraphicDesign mainData={mainData} service={service} />
  ) : id === Ids.SocialMange_Id ? (
    <SocialMange mainData={mainData} service={service} />
  ) : id === Ids.Writing_Id ? (
    <Writing mainData={mainData} service={service} />
  ) : (
    <MainService mainData={mainData} service={service} />
  );
};

export default CurrentService;
