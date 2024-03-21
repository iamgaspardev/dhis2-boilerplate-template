import React from "react";

class Services {
  constructor() {
  }
   username = "gaspar-dev";
   password = "Hmis@2024";
   baseUrl ="http://41.59.227.69/tland-upgrade/api"

  getDataRequest = async () => {
    const endpoint = `${this.baseUrl}/dataStore/dhis2-user-support/?fields=.`;
    

    try {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization: `Basic ${btoa(`${this.username}:${this.password}`)}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error:any) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  };
  
  exceptionalHandling = async (ou:any, ds:any, pe:any) => {
    const endpoint = `${this.baseUrl}/40/lockExceptions`;

    try {
      const response = await fetch(endpoint, {
        method: "DELETE",
        headers: {
          Authorization: `Basic ${btoa(`${this.username}:${this.password}`)}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ou: ou,
          ds: ds,
          pe: pe,
        }),
      });

      return response;
    } catch (error) {
      throw error;
    }
  };
}

export default Services;
