import React from "react";

class Services {
  constructor() {
  }

  getDataRequest = async () => {
    const endpoint = "http://41.59.227.69/tland-upgrade/api/dataStore/dhis2-user-support/?fields=.";
    const username = "gaspar-dev";
    const password = "Hmis@2024";

    try {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization: `Basic ${btoa(`${username}:${password}`)}`,
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
  accessManagement=(action:string,)=>{

  }
}

export default Services;
