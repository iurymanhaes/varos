import React, { useState } from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;
type Props = {
    title: string;
    menuItems: string[];
  }

  const DropdownContents = ({ title, menuItems }: Props) => {
    const handleMenuItemClick = (item: string) => {
      console.log("Menu item clicked:", item);
      // Faça qualquer ação necessária ao clicar em um item do menu
    };
  
    return (
      <Collapse accordion className="max-w-[270px] rounded-[40px] bg-greyC8" expandIconPosition="right" expandIcon={({ isActive }) => (isActive ? <img src="/caret--down.svg"/> : <img src="/caret--right.svg"/>)}>        
        <Panel header={title} key={title}className="bg-transparent">
          <ul className="bg-transparent">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleMenuItemClick(item)}
                className="cursor-pointer p-8 hover:bg-greyC6"
              >
                {item}
              </li>
            ))}
          </ul>
        </Panel>
      </Collapse>
    );
  };
  
  export default DropdownContents;