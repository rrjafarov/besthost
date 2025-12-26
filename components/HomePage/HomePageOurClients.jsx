import Image from "next/image";
import React from "react";

const HomePageOurClients = ({t, client }) => {
  return (
    <div
      id="homePageOurClients"
      className="shareAboutComponents homePageOurClients02"
    >
      <div className="container">
        <div className="homePageOurClientsHeaderText">
          <h2>{t?.aboutPageClientsTitle || "Our Clients"}</h2>
          <p>
            {t?.aboutPageClientsSubTitle || "Our Clients"}
          </p>
        </div>
        <div className="homePageOurClientCards">
          <div className="row">
            {client?.data?.data.map((client) => (
              <div className="xl-2 lg-2 md-3 sm-4" key={client.id}>
                <div className="homePageOurClientCard">
                  <div className="homePageOurClientCardImg">
                    <Image
                      src={`https://admin-besthost.onestudio.az/storage/${client.logo}`}
                      alt="client"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageOurClients;
