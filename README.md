# NgxDhis2ShellBoilerplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0-rc.3.

# NG DHIS2 boilerplate

Boilerplate codes to fast track developing DHIS2 applications based on Angular framework

## Prerequisites

1. [NodeJs (16 or higher)](https://nodejs.org)
2. git, can be installed by running `apt install git`

## Setup

Clone repository

```bash
 git clone https://github.com/udsm-dhis2-lab/ng-dhis2-boilerplate.git <your-app-name>
```

Navigate to application root folder

```bash
cd <your-app-name>
```

Install all required dependencies for the app

```bash
npm install --legacy-peer-deps
```

**NOTE**: Since you are using this boilerplate to start your new app, it is recommended that you find and replace every occurance of `ng-dhis2-boilerplate` with the name of your intended app. Also provide better description of your app in `manifest.webapp`

## Development server

To start development server

```bash
npm start
```

Navigate to [http://localhost:4200](http://localhost:4200).

This command will require proxy-config.json file available in the root of your source code, usually this file has this format

```json
{
  "/api": {
    "target": "https://play.dhis2.org/40.2.1",
    "secure": "false",
    "auth": "admin:district",
    "changeOrigin": "true"
  },
  "/dhis-web-commons": {
    "target": "https://play.dhis2.org/40.2.1",
    "secure": "false",
    "auth": "admin:district",
    "changeOrigin": "true"
  },
  "/icons": {
    "target": "https://play.dhis2.org/40.2.1",
    "secure": "false",
    "auth": "admin:district",
    "changeOrigin": "true"
  }
}
```

We have provided `proxy-config.example.json` file as an example, make a copy and rename to `proxy-config.json`

## Build

To build the project run

```bash
npm run build
```

The build artifacts will be stored in the `dist/`, this will include a zip file ready for deploying to any DHIS2 instance..

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Delete exceptionals
quest URL:
http://41.59.227.69/tland-upgrade/api/40/lockExceptions?pe=202201&ds=fEb0XNE3yaf&ou=Q9zuNtFWBGD
Request Method:
DELETE
## Before 
{
            "name": "HMIS_Wagonjwa wa Macho (Eye) (AGA KHAN Other Hospital, January 2021)",
            "period": {
                "displayName": "January 2021",
                "id": "202101"
            },
            "organisationUnit": {
                "id": "ZzavXcQByet",
                "displayName": "AGA KHAN Other Hospital"
            },
            "dataSet": {
                "id": "ExX34Bpv0qN",
                "displayName": "HMIS_Wagonjwa wa Macho (Eye)"
            }
        }

## After


## payload
pe: 202201
ds: fEb0XNE3yaf
ou: Q9zuNtFWBGD

## remove exceptional 
http://41.59.227.69/tland-upgrade/api/40/lockExceptions?page=25&pageSize=20&fields=name,period%5Bid%2CdisplayName%5D,organisationUnit%5Bid%2CdisplayName%5D,dataSet%5Bid%2CdisplayName%5D&order=name%3Aasc

response 
{
    "pager": {
        "page": 25,
        "pageCount": 25,
        "total": 496,
        "pageSize": 20
    },
    "lockExceptions": [
        {
            "name": "HMIS_Idadi ya Watu (Population) (Handeni District Council, 2014)",
            "period": {
                "displayName": "2014",
                "id": "2014"
            },
            "organisationUnit": {
                "id": "DkxlFk8MuM7",
                "displayName": "Handeni District Council"
            },
            "dataSet": {
                "id": "FLR8w9ntW1R",
                "displayName": "HMIS_Idadi ya Watu (Population)"
            }
        },
        {
            "name": "HMIS_Idadi ya Watu (Population) (Kilindi District Council, 2014)",
            "period": {
                "displayName": "2014",
                "id": "2014"
            },
            "organisationUnit": {
                "id": "mKI72g04l0D",
                "displayName": "Kilindi District Council"
            },
            "dataSet": {
                "id": "FLR8w9ntW1R",
                "displayName": "HMIS_Idadi ya Watu (Population)"
            }
        },
        {
            "name": "HMIS_Idadi ya Watu (Population) (Korogwe District Council, 2014)",
            "period": {
                "displayName": "2014",
                "id": "2014"
            },
            "organisationUnit": {
                "id": "QBC1po2JaJW",
                "displayName": "Korogwe District Council"
            },
            "dataSet": {
                "id": "FLR8w9ntW1R",
                "displayName": "HMIS_Idadi ya Watu (Population)"
            }
        },
        {
            "name": "HMIS_Idadi ya Watu (Population) (Korogwe Town Council, 2014)",
            "period": {
                "displayName": "2014",
                "id": "2014"
            },
            "organisationUnit": {
                "id": "qHJkyM0bG8U",
                "displayName": "Korogwe Town Council"
            },
            "dataSet": {
                "id": "FLR8w9ntW1R",
                "displayName": "HMIS_Idadi ya Watu (Population)"
            }
        },
        {
            "name": "HMIS_Idadi ya Watu (Population) (Lushoto District Council, 2014)",
            "period": {
                "displayName": "2014",
                "id": "2014"
            },
            "organisationUnit": {
                "id": "ilY7TEjviqa",
                "displayName": "Lushoto District Council"
            },
            "dataSet": {
                "id": "FLR8w9ntW1R",
                "displayName": "HMIS_Idadi ya Watu (Population)"
            }
        },
        {
            "name": "HMIS_Idadi ya Watu (Population) (Mkinga District Council, 2014)",
            "period": {
                "displayName": "2014",
                "id": "2014"
            },
            "organisationUnit": {
                "id": "B9idcF4fOIW",
                "displayName": "Mkinga District Council"
            },
            "dataSet": {
                "id": "FLR8w9ntW1R",
                "displayName": "HMIS_Idadi ya Watu (Population)"
            }
        },
        {
            "name": "HMIS_Idadi ya Watu (Population) (Muheza District Council, 2014)",
            "period": {
                "displayName": "2014",
                "id": "2014"
            },
            "organisationUnit": {
                "id": "H2LvCkw2bCO",
                "displayName": "Muheza District Council"
            },
            "dataSet": {
                "id": "FLR8w9ntW1R",
                "displayName": "HMIS_Idadi ya Watu (Population)"
            }
        },
        {
            "name": "HMIS_Idadi ya Watu (Population) (Pangani District Council, 2014)",
            "period": {
                "displayName": "2014",
                "id": "2014"
            },
            "organisationUnit": {
                "id": "rQS2cX4JH88",
                "displayName": "Pangani District Council"
            },
            "dataSet": {
                "id": "FLR8w9ntW1R",
                "displayName": "HMIS_Idadi ya Watu (Population)"
            }
        },
        {
            "name": "HMIS_Idadi ya Watu (Population) (Tanga City Council, 2014)",
            "period": {
                "displayName": "2014",
                "id": "2014"
            },
            "organisationUnit": {
                "id": "ySuyuvNNFp8",
                "displayName": "Tanga City Council"
            },
            "dataSet": {
                "id": "FLR8w9ntW1R",
                "displayName": "HMIS_Idadi ya Watu (Population)"
            }
        },
        {
            "name": "HMIS_Idadi ya Watu (Population) (Dar Es Salaam Region, 2012)",
            "period": {
                "displayName": "2012",
                "id": "2012"
            },
            "organisationUnit": {
                "id": "acZHYslyJLt",
                "displayName": "Dar Es Salaam Region"
            },
            "dataSet": {
                "id": "FLR8w9ntW1R",
                "displayName": "HMIS_Idadi ya Watu (Population)"
            }
        },
        {
            "name": "HMIS_Idadi ya Watu (Population) (Dodoma Region, 2012)",
            "period": {
                "displayName": "2012",
                "id": "2012"
            },
            "organisationUnit": {
                "id": "Cpd5l15XxwA",
                "displayName": "Dodoma Region"
            },
            "dataSet": {
                "id": "FLR8w9ntW1R",
                "displayName": "HMIS_Idadi ya Watu (Population)"
            }
        },
        {
            "name": "HMIS_Idadi ya Watu (Population) (Lindi Region, 2012)",
            "period": {
                "displayName": "2012",
                "id": "2012"
            },
            "organisationUnit": {
                "id": "VMgrQWSVIYn",
                "displayName": "Lindi Region"
            },
            "dataSet": {
                "id": "FLR8w9ntW1R",
                "displayName": "HMIS_Idadi ya Watu (Population)"
            }
        },
        {
            "name": "HMIS_Idadi ya Watu (Population) (Mtwara Region, 2012)",
            "period": {
                "displayName": "2012",
                "id": "2012"
            },
            "organisationUnit": {
                "id": "bN5q5k5DgLA",
                "displayName": "Mtwara Region"
            },
            "dataSet": {
                "id": "FLR8w9ntW1R",
                "displayName": "HMIS_Idadi ya Watu (Population)"
            }
        },
        {
            "name": "HMIS_Idadi ya Watu (Population) (Simiyu Region, 2012)",
            "period": {
                "displayName": "2012",
                "id": "2012"
            },
            "organisationUnit": {
                "id": "IgTAEKMqKRe",
                "displayName": "Simiyu Region"
            },
            "dataSet": {
                "id": "FLR8w9ntW1R",
                "displayName": "HMIS_Idadi ya Watu (Population)"
            }
        },
        {
            "name": "HMIS_Idadi ya Watu (Population) (Shinyanga Region, 2012)",
            "period": {
                "displayName": "2012",
                "id": "2012"
            },
            "organisationUnit": {
                "id": "EO3Ps3ny0Nr",
                "displayName": "Shinyanga Region"
            },
            "dataSet": {
                "id": "FLR8w9ntW1R",
                "displayName": "HMIS_Idadi ya Watu (Population)"
            }
        },
        {
            "name": "NACP_HIV Care and Treatment Reporting Form (KINAMPANDA Health Center, April - June 2019)",
            "period": {
                "displayName": "April - June 2019",
                "id": "2019Q2"
            },
            "organisationUnit": {
                "id": "FaicOb9CGuc",
                "displayName": "KINAMPANDA Health Center"
            },
            "dataSet": {
                "id": "NIUGWrDf8JJ",
                "displayName": "NACP_HIV Care and Treatment Reporting Form"
            }
        }
    ]
}
