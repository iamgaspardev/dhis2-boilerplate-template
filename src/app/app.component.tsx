import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { NgDhis2ShellWrapper } from '@iapps/ng-dhis2-shell';
import { Button, DataTable, TableHead, DataTableRow, DataTableColumnHeader, TableBody, DataTableCell, Model } from '@dhis2/ui';
import React, { useState, useEffect } from 'react';
import Service from "../services/services";
import Services from 'src/services/servicesapi';
import Models from './components/models';

@Component({
  selector: 'app-root',
  template: '<ng-dhis2-shell (shellHasLoaded)="onReady()"></ng-dhis2-shell>',
})
export class AppComponent extends NgDhis2ShellWrapper {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
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
    const [requests, setRequests] = useState<any>([]);
    const [isactive, setIsActive] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        const requestdata = new Service();
        const apidata = new Services()
        const data = requestdata.Services();
        // const apidt = apidata.getDataRequest();
        const apiDataPromise = apidata.getDataRequest();
        const [apidt] = await Promise.all([apiDataPromise]);
        console.log("data from online Api are ---------------------->", apidt.entries);
        setRequests(apidt.entries);
        const initialExpandedRows = Array(data.entries.length).fill(false);
        setExpandedRows(initialExpandedRows);
      };
      fetchData();
      
    }, []);

    const onExpandToggle = (index: number) => {
      setExpandedRows((prevExpandedRows: any) => {
        const newExpandedRows = [...prevExpandedRows];
        newExpandedRows[index] = !newExpandedRows[index];
        return newExpandedRows;
      });
      console.log('Updated value:', expandedRows[index]);
    };
    console.log("data from api are sample--------------->", requests)

    const handleActive = () => {
      setIsActive(true);
      console.log("Clicked now ------")
    }

    return (
      <div>
        <DataTable>
          <TableHead>
            <DataTableRow>
              <DataTableColumnHeader />
              <DataTableColumnHeader>Requests</DataTableColumnHeader>
              <DataTableColumnHeader>From</DataTableColumnHeader>
              <DataTableColumnHeader>Issued date</DataTableColumnHeader>
              <DataTableColumnHeader>Action</DataTableColumnHeader>
            </DataTableRow>
          </TableHead>
          <TableBody >
            {requests.lenght !== 0 && requests.map((item: any, index: any) => {
              return <DataTableRow
                key={index}
                expandableContent={
                  <div className="innerContainer">
                    <p style={{ color: "#3C70BA ", fontWeight: "bolder" }}>{item.key}</p>
                    <p style={{ display: 'flex', maxWidth: "1080px", paddingBottom: 20 }}>{item?.value?.message?.message}</p>
                    <div style={{ display: 'flex', gap: 20, }}>
                      <Button ariaLabel="Button"
                        name="Primary button"
                        onClick={handleActive}
                        primary
                        title="Button"
                        value="default" >
                          Grant Access
                        </Button>
                      <Button destructive >Reject Request</Button>
                    </div>
                  </div>
                }
                onExpandToggle={() => onExpandToggle(index)}
                expanded={expandedRows[index]}
              >
                <DataTableCell>{item.value.action}</DataTableCell>
                <DataTableCell>{item.value.date}</DataTableCell>
                <DataTableCell>{item.value.date}</DataTableCell>
                <DataTableCell>{item.type}</DataTableCell>
              </DataTableRow>
            })}
          </TableBody>
        </DataTable>
        {isactive ? <Models /> : null}
      </div>

    );
  };
}
