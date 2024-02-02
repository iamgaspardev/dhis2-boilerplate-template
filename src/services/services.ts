import React from "react";

class Services {
  constructor(){
    
  }
  Services =()=>{
    const data = {
      pager: {
        page: 1,
        pageSize: 50
      },
      entries: [
        {
          key: "DS1703157017431_Dr80ve0pgWe",
          type:"Lock",
          value: {
            id: "DS1703157017431_Dr80ve0pgWe",
            url: "organisationUnits/Dr80ve0pgWe/dataSets.json?cache=1703157017431",
            user: {
              id: "ELelSS7HfqW",
              email: "josephatjulius24@gmail.com",
              jobTitle: "System Developer.",
              userName: "josephatjulius",
              displayName: "Josephat Julius",
              phoneNumber: "0766460759",
              organisationUnits: [
                {
                  id: "m0frOspS7JY",
                  name: "MOH - Tanzania",
                  level: 1
                }
              ]
            },
            date:"01 Jan 2024",
            action: "Assign 1 datasets/programs to Magamba Oakland Dispensary - Lushoto District Council, Tanga Region",
            method: "POST",
            message: {
              message: "Please add the following dataset/program on the org unit: Magamba Oakland Dispensary - Lushoto District Council, Tanga Region \n1. PROGRAM: ANC: Malaria Service and Data Quality Improvement (MSDQI)\n\n",
              subject: "DS1703157017431 - FORM REQUEST"
            },
            payload: {
              additions: [],
              deletions: []
            },
            programUrl: "organisationUnits/Dr80ve0pgWe/programs.json?cache=1703157017431",
            replyMessage: "Assigned 1 datasets/programs to Magamba Oakland Dispensary - Lushoto District Council, Tanga Region",
            ticketNumber: "DS1703157017431",
            programsPayload: {
              additions: [
                {
                  id: "pgH4jPT4RoF",
                  name: "ANC: Malaria Service and Data Quality Improvement (MSDQI)"
                }
              ],
              deletions: []
            }
          }
        },
        {
          key: "DS1703161464732_van5LQXzVBR",
          type:"Unlock",
          value: {
            id: "DS1703161464732_van5LQXzVBR",
            url: "organisationUnits/van5LQXzVBR/dataSets.json?cache=1703161464732",
            user: {
              id: "ELelSS7HfqW",
              email: "josephatjulius24@gmail.com",
              jobTitle: "System Developer.",
              userName: "josephatjulius",
              displayName: "Josephat Julius",
              phoneNumber: "0766460759",
              organisationUnits: [
                {
                  id: "m0frOspS7JY",
                  name: "MOH - Tanzania",
                  level: 1
                }
              ]
            },
            date:"02 Feb 2024",
            action: "Remove 1 datasets/programs from Momella Health Center - Meru District Council, Arusha Region and Assign 4 datasets/programs to Momella Health Center - Meru District Council, Arusha Region",
            method: "POST",
            message: {
              message: "Please add the following dataset/program on the org unit: Momella Health Center - Meru District Council, Arusha Region \n1. DATASET: Blood Safety - Quarterly data collection at council,\n2. DATASET: Blood Safety - Quarterly data collection at Zonal level,\n3. DATASET: CCHP Supervision Checklist,\n4. PROGRAM: BRN Hospital Assessment\n\nNaomba kuondolewa fomu zifuatazo kwenye kituo: Momella Health Center - Meru District Council, Arusha Region \n1. DATASET: Blood Safety - Monthly data collection at facility",
              subject: "DS1703161464732 - FORM REQUEST"
            },
            payload: {
              additions: [
                {
                  id: "PkkDo3Mof4a",
                  name: "Blood Safety - Quarterly data collection at council"
                },
                {
                  id: "S3WsQtzLE7T",
                  name: "Blood Safety - Quarterly data collection at Zonal level"
                },
                {
                  id: "lYspXa5wSDz",
                  name: "CCHP Supervision Checklist"
                }
              ],
              deletions: [
                {
                  id: "OyI2SRJMTF7",
                  name: "Blood Safety - Monthly data collection at facility"
                }
              ]
            },
            programUrl: "organisationUnits/van5LQXzVBR/programs.json?cache=1703161464732",
            replyMessage: "Removed 1 datasets/programs from Momella Health Center - Meru District Council, Arusha RegionAssigned 4 datasets/programs to Momella Health Center - Meru District Council, Arusha Region",
            ticketNumber: "DS1703161464732",
            programsPayload: {
              additions: [
                {
                  id: "ZziUevWkhwT",
                  name: "BRN Hospital Assessment"
                }
              ],
              deletions: []
            }
          }
        },
        {
          key: "DS1703157017431_Dr80ve0pgWe",
          type:"Lock",
          value: {
            id: "DS1703157017431_Dr80ve0pgWe",
            url: "organisationUnits/Dr80ve0pgWe/dataSets.json?cache=1703157017431",
            user: {
              id: "ELelSS7HfqW",
              email: "josephatjulius24@gmail.com",
              jobTitle: "System Developer.",
              userName: "josephatjulius",
              displayName: "Josephat Julius",
              phoneNumber: "0766460759",
              organisationUnits: [
                {
                  id: "m0frOspS7JY",
                  name: "MOH - Tanzania",
                  level: 1
                }
              ]
            },
            date:"02 Feb 2024",
            action: "Assign 1 datasets/programs to Magamba Oakland Dispensary - Lushoto District Council, Tanga Region",
            method: "POST",
            message: {
              message: "Please add the following dataset/program on the org unit: Magamba Oakland Dispensary - Lushoto District Council, Tanga Region \n1. PROGRAM: ANC: Malaria Service and Data Quality Improvement (MSDQI)\n\n",
              subject: "DS1703157017431 - FORM REQUEST"
            },
            payload: {
              additions: [],
              deletions: []
            },
            programUrl: "organisationUnits/Dr80ve0pgWe/programs.json?cache=1703157017431",
            replyMessage: "Assigned 1 datasets/programs to Magamba Oakland Dispensary - Lushoto District Council, Tanga Region",
            ticketNumber: "DS1703157017431",
            programsPayload: {
              additions: [
                {
                  id: "pgH4jPT4RoF",
                  name: "ANC: Malaria Service and Data Quality Improvement (MSDQI)"
                }
              ],
              deletions: []
            }
          }
        },
      ]
    }
    return data;
  }
}
export default Services;



// {serviceItem.map((service, index) => (
//   <DataTableRow
//     key={index}
//     expandableContent={
//       <div className = "innerContainer">
//       <p>{service.firstName} - {service.lastName}</p>

//       <div style={{ display: 'flex', gap:20,}}>
//         <Button primary>Grant Access</Button>
//         <Button destructive >Reject Request</Button>
//       </div>
//     </div>
//       }
//     onExpandToggle={() => onExpandToggle(index)}
//     expanded={expandedRows[index]}
//   >
//     <DataTableCell>{service.firstName}</DataTableCell>
//     <DataTableCell>{service.lastName}</DataTableCell>
//     <DataTableCell>{service.incidentDate}</DataTableCell>
//     <DataTableCell>{service.lastUpdated}</DataTableCell>
//   </DataTableRow>
// ))}