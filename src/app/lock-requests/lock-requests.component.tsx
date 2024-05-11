import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { NgDhis2ShellWrapper } from '@iapps/ng-dhis2-shell';
import { Button, DataTable, TableHead, DataTableRow, DataTableColumnHeader, TableBody, DataTableCell, Model } from '@dhis2/ui';
import React, { useState, useEffect } from 'react';
import Models from '../components/models';
import Services from 'src/services/servicesapi';

@Component({
  selector: 'app-lock-requests',
  standalone: true,
  imports: [],
templateUrl: './lock-requests.component.html',
  styleUrl: './lock-requests.component.scss'
})
export class LockRequestsComponent extends NgDhis2ShellWrapper {
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
        const requestdata = new Services();
        const apidata = new Services()
        // const apidt = apidata.getDataRequest();
        const apiDataPromise = apidata.getDataRequest();
        const [apidt] = await Promise.all([apiDataPromise]);
        console.log("data from online Api are ---------------------->", apidt.entries);
        setRequests(apidt.entries);
        const initialExpandedRows = Array(apidt.entries.length).fill(false);
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
