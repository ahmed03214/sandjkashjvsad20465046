import React from "react";
import { useRouter } from "next/router";

import AdsMangement from "../../../components/services/AdsMangement";
import GraphicDesign from "../../../components/services/GraphicDesign";
import SocialMange from "../../../components/services/SocialMange";
import Writing from "../../../components/services/Writing";
import MainService from "../../../components/services/MainService";
import Head from "next/head";
import axios from "axios";

import getMainData from "../../../utils/getMainData";

// special Services Id
const AdsMangement_Id = "8";
const GraphicDesign_Id = "9";
const SocialMange_Id = "7";
const Writing_Id = "6";

const API = process.env.NEXT_PUBLIC_LOCAL_URL;

const ServiceName = ({ mainData, service }) => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <>
      <Head>
        <title>يمناك - {service.name}</title>
        <meta name="description" content={service.description} />
        <meta name="keywords" content={service.kewords} />
      </Head>

      {id === AdsMangement_Id ? (
        <AdsMangement mainData={mainData} service={service} />
      ) : id === GraphicDesign_Id ? (
        <GraphicDesign mainData={mainData} service={service} />
      ) : id === SocialMange_Id ? (
        <SocialMange mainData={mainData} service={service} />
      ) : id === Writing_Id ? (
        <Writing mainData={mainData} service={service} />
      ) : (
        <MainService mainData={mainData} service={service} />
      )}
    </>
  );
};

export default ServiceName;

export const getServerSideProps = async ({ params }) => {
  const { id, name } = params;

  const { data: service } = await axios(`${API}/api/get/getServiceById/${id}`);

  if (service.code != 200) {
    return {
      redirect: {
        permanent: false,
        destination: `/404`,
      },
    };
  }

  const validTitle = service.name.toString().replaceAll(" ", "+");

  if (name != validTitle) {
    return {
      redirect: {
        permanent: false,
        destination: `/services/${id}/${encodeURI(validTitle)}`,
      },
    };
  }

  const data = await getMainData();

  return {
    props: {
      mainData: data,
      service: service,
    },
  };
};
