import { Component } from '@angular/core';
import React, { useState, useEffect } from 'react';
import { ComponentPortal } from '@angular/cdk/portal';
import { NgDhis2ShellWrapper } from '@iapps/ng-dhis2-shell';
import { FlyoutMenu, MenuItem, MenuDivider, IconSave24, IconHome24,IconEdit24,IconList24} from '@dhis2/ui';
@Component({
  selector: 'app-app-sidebar',
  standalone: false,
  templateUrl: './app-sidebar.component.html',
  styleUrl: './app-sidebar.component.scss'
})
export class AppSidebarComponent extends NgDhis2ShellWrapper{
  componentPortal: ComponentPortal<any> = new ComponentPortal(AppSidebarComponent);
 SideBar=()=>{
  return ( <div>
    <FlyoutMenu elevation={0}>
    <MenuItem icon={<IconHome24 />} onclick={'/user-create'} active label="Manage Exception" />
    <MenuItem icon={<IconEdit24 />} label="Create Exceptional" />
    <MenuDivider />
    <MenuItem icon={<IconList24 />}  label="Approved list" />
    </FlyoutMenu>
  </div>);
    
 }
}
