import { ComponentPortal } from '@angular/cdk/portal';
import {  ChangeDetectionStrategy, ChangeDetectorRef,Component, NgZone} from '@angular/core';
import { NgDhis2ShellWrapper } from '@iapps/ng-dhis2-shell';
import { Button, DataTable, TableHead, DataTableRow, DataTableColumnHeader, TableBody, DataTableCell } from '@dhis2/ui';
import React ,{useState,useEffect} from 'react';
import Service from "../services/services";
@Component({
  selector: 'app-root',
  template: '<ng-dhis2-shell (shellHasLoaded)="onReady()"></ng-dhis2-shell>',
})
export class AppComponent extends NgDhis2ShellWrapper {
  override componentPortal: ComponentPortal<any> = new ComponentPortal(
    AppComponentContent
  );
}

@Component({
  selector: 'app-root-content',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponentContent {
  
  RequestTable = () => {
    const [expandedRows, setExpandedRows] = useState<any>([]);

    useEffect(() => {
      const requestdata =  Service()
      console.log("data from api are --------------->",)
      const initialExpandedRows = Array(serviceItem.length).fill(false);
      setExpandedRows(initialExpandedRows);
    }, [this.serviceItem]);
  
    const onExpandToggle = (index: number) => {
      setExpandedRows((prevExpandedRows: any) => {
        const newExpandedRows = [...prevExpandedRows];
        newExpandedRows[index] = !newExpandedRows[index];
        return newExpandedRows;
      });
      console.log('Updated value:', expandedRows[index]);
    };
  
    const serviceItem = [
      { firstName: 'Request to Unlock form of February 13', lastName: 'Kariuki', incidentDate: '02/06/2007', lastUpdated: '05/25/1972' },
      { firstName: 'Lock District Form ', lastName: 'Okafor', incidentDate: '08/11/2010', lastUpdated: '02/26/1991' },
      { firstName: 'Request for unlocking the form facilities', lastName: 'Abiodun', incidentDate: '07/21/1981', lastUpdated: '02/06/2007' },
      { firstName: 'Lock District Form ', lastName: 'Okafor', incidentDate: '08/11/2010', lastUpdated: '02/26/1991' },
    ];
  
    return (
      <DataTable>
        <TableHead>
          <DataTableRow>
            <DataTableColumnHeader />
            <DataTableColumnHeader>Requests</DataTableColumnHeader>
            <DataTableColumnHeader>From</DataTableColumnHeader>
            <DataTableColumnHeader>Issued date</DataTableColumnHeader>
            <DataTableColumnHeader>Action date</DataTableColumnHeader>
          </DataTableRow>
        </TableHead>
        <TableBody>
          {serviceItem.map((service, index) => (
            <DataTableRow
              key={index}
              expandableContent={
                <div className = "innerContainer">
                <p>{service.firstName} - {service.lastName}</p>

                <div style={{ display: 'flex', gap:20,}}>
                  <Button primary>Grant Access</Button>
                  <Button destructive >Reject Request</Button>
                </div>
              </div>
                }
              onExpandToggle={() => onExpandToggle(index)}
              expanded={expandedRows[index]}
            >
              <DataTableCell>{service.firstName}</DataTableCell>
              <DataTableCell>{service.lastName}</DataTableCell>
              <DataTableCell>{service.incidentDate}</DataTableCell>
              <DataTableCell>{service.lastUpdated}</DataTableCell>
            </DataTableRow>
          ))}
        </TableBody>
      </DataTable>
    );
};
  Button = () => (<Button primary> Grant Access</Button>);
  serviceItem = [
    { firstName: 'Request to Unlock form of February 13', lastName: 'Kariuki', incidentDate: '02/06/2007', lastUpdated: '05/25/1972' },
    { firstName: 'Lock District Form ', lastName: 'Okafor', incidentDate: '08/11/2010', lastUpdated: '02/26/1991' },
    { firstName: 'Request for unlocking the form facilities', lastName: 'Abiodun', incidentDate: '07/21/1981', lastUpdated: '02/06/2007' },
    { firstName: 'Lock District Form from Manyara Districts', lastName: 'Okafor', incidentDate: '08/11/2010', lastUpdated: '02/26/1991' },
  ];
}
