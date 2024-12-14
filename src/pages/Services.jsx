import React, { useState } from "react";
import { Collapse } from "antd";
import {
  AArrowDown,
  Activity,
  ChartScatter,
  EarthLock,
  Settings,
  Webhook,
} from "lucide-react";
import Button from "../components/Button";
import ImageSection from "../components/ImageSection";

const items = [
  {
    key: "1",
    label: "STRATEGIC PLANNING",
    children: <div>Content for Strategic Planning</div>,
    leftIcon: <EarthLock className="text-[#757575]" />,
  },
  {
    key: "2",
    label: "MANAGEMENT OF SOCIAL NETWORKS",
    children: <div>Content for Social Networks</div>,
    leftIcon: <Webhook className="text-[#757575]" />,
  },
  {
    key: "3",
    label: "CONTENT CREATION",
    children: <div>Content for Content Creation</div>,
    leftIcon: <Activity className="text-[#757575]" />,
  },
  {
    key: "4",
    label: "CONSULTATION AND TRAINING",
    children: <div>Content for Consultation and Training</div>,
    leftIcon: <Settings className="text-[#757575]" />,
  },
  {
    key: "5",
    label: "ANALYTICS AND REPORTING",
    children: <div>Content for Analytics and Reporting</div>,
    leftIcon: <ChartScatter className="text-[#757575]" />,
  },
];

const Services = () => {
  // State to track the active panel (which one to show the children for)
  const [activePanel, setActivePanel] = useState(null);

  // Function to prevent collapsing when clicking on the label or icon
  const preventCollapse = (event) => {
    event.stopPropagation();
  };

  // Custom function to handle the "Details" button click and prevent collapse
  const genExtra = (event, key) => {
    event.stopPropagation();
    setActivePanel(activePanel === key ? null : key); // Close if already open, open if not
  };

  return (
    <div className="services-box grid grid-cols-12 gap-4">
      <div className="col-span-5 xs:col-span-12 sm:col-span-12">
        <ImageSection />
      </div>
      <div className="col-span-7 xs:col-span-12 sm:col-span-12">
        <h2 className="text-6xl font-medium mb-12">
          Revealing the secrets <br /> of our achievements
        </h2>
        <div>
          <Collapse
            expandIconPosition="start"
            activeKey={activePanel ? [activePanel] : []} // Collapse is controlled by activePanel
            onChange={(key) => setActivePanel(key[0])} // Collapse event handler
            items={items.map((item) => ({
              key: item.key,
              label: (
                <div
                  className="flex items-center"
                  onClick={preventCollapse} // Prevent collapse when clicking the icon and label
                >
                  {/* Left icon */}
                  <div className="mr-12">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ededed]">
                      {item.leftIcon}
                    </div>
                  </div>
                  {/* Title label */}
                  <div className="text-md font-bold text-gray-600">
                    {item.label}
                  </div>
                  {/* Detail button */}
                  <div
                    className="ml-auto"
                    onClick={(event) => genExtra(event, item.key)}
                  >
                    <Button
                      text="Details"
                      backgroundColor="bg-black"
                      textColor="text-gray-300"
                      borderRadius="50px"
                      padding="px-8"
                    />
                  </div>
                </div>
              ),
              // Only render children if this panel is active
              children: activePanel === item.key ? item.children : null,
            }))}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
