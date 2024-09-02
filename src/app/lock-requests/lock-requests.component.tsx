import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { NgDhis2ShellWrapper } from '@iapps/ng-dhis2-shell';
import { Button, DataTable, TableHead, DataTableRow, DataTableColumnHeader, TableBody, DataTableCell, CircularLoader } from '@dhis2/ui';
import React, { useState, useEffect } from 'react';
import Models from '../components/models';
import Services from 'src/services/servicesapi';

@Component({
  selector: 'app-lock-requests',
  templateUrl: './lock-requests.component.html',
  styleUrls: ['lock-requests.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LockRequestsComponentContent  extends NgDhis2ShellWrapper  {
  componentPortal: ComponentPortal<any> = new ComponentPortal(LockRequestsComponentContent);

  RequestTable = () => {
    const [expandedRows, setExpandedRows] = useState<any>([]);
    const [requests, setRequests] = useState<any>([]);
    const [isactive, setIsActive] = useState(false);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
      const fetchData = async () => {
          const apidata = new Services();
          try {
              const apiDataPromise = apidata.getDataRequest();
              const [apidt] = await Promise.all([apiDataPromise]);
              console.log("data from online Api are ---------------------->", apidt.entries);
              setRequests(apidt.entries || []);
              const initialExpandedRows = Array((apidt.entries || []).length).fill(false);
              setExpandedRows(initialExpandedRows);
          } catch (error) {
              console.error("Error fetching data:", error);
          } finally {
              setLoading(false); 
          }
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
          {loading ? (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',justifySelf:'center' }}>
                  <CircularLoader /> 
              </div>
          ) : (
              requests.length > 0 ? (
                  <DataTable>
                      <TableHead>
                          <DataTableRow>
                            <DataTableColumnHeader></DataTableColumnHeader>
                              <DataTableColumnHeader className="tableHeader">Requests</DataTableColumnHeader>
                              <DataTableColumnHeader className="tableHeader">Requester name</DataTableColumnHeader>
                          </DataTableRow>
                      </TableHead>
                      <TableBody>
                          {requests.map((item: any, index: any) => (
                              <DataTableRow
                                  key={index}
                                  expandableContent={
                                      <div className="innerContainer">
                                          <p style={{ color: "#3C70BA", fontWeight: "bolder" }}>{item.key}</p>
                                          <p style={{ display: 'flex', maxWidth: "1080px", paddingBottom: 20 }}>{item?.value?.message?.message}</p>
                                          <div style={{ display: 'flex', gap: 20 }}>
                                              <Button
                                                  ariaLabel="Button"
                                                  name="Primary button"
                                                  onClick={handleActive}
                                                  primary
                                                  title="Button"
                                                  value="default"
                                              >
                                                  Grant Access
                                              </Button>
                                              <Button destructive>Reject Request</Button>
                                          </div>
                                      </div>
                                  }
                                  onExpandToggle={() => onExpandToggle(index)}
                                  expanded={expandedRows[index]}
                              >
                                  <DataTableCell className="tableCell">{item.value.action}</DataTableCell>
                                  <DataTableCell>{item?.value?.user?.displayName}</DataTableCell> 
                              </DataTableRow>
                          ))}
                      </TableBody>
                  </DataTable>
              ) : (
                  <div>No data available</div> 
              )
          )}
          {isactive ? <Models /> : null}
      </div>
  );
  
}}
