import React, { useEffect, useRef, useState } from "react";
import { Collapse } from "antd";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Activity,
  ChartScatter,
  EarthLock,
  Settings,
  Webhook,
} from "lucide-react";
import Button from "../components/Button";
import ImageSection from "../components/ImageSection";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

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
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  console.log(isMobile);

  const [activePanel, setActivePanel] = useState(null);

  // Refs for sections
  const imageSectionRef = useRef(null);
  const collapseSectionRef = useRef(null);

  useEffect(() => {
    // not apply in mobile and small pad
    if (!isMobile) {
      // GSAP animations
      gsap.fromTo(
        imageSectionRef.current,
        { x: "-100%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageSectionRef.current,
            // start: "top 80%", // When the top of the section reaches 80% of the viewport
          },
        }
      );

      gsap.fromTo(
        collapseSectionRef.current,
        { x: "100%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          // ease: "power2.out",
          scrollTrigger: {
            trigger: collapseSectionRef.current,
            // start: "top 80%", // When the top of the section reaches 80% of the viewport
          },
        }
      );
    }
  }, []);

  const preventCollapse = (event) => {
    event.stopPropagation();
  };

  const genExtra = (event, key) => {
    event.stopPropagation();
    setActivePanel(activePanel === key ? null : key);
  };

  return (
    <div
      className=" max-w-[85vw] mx-auto grid grid-cols-12 gap-4"
      id="services"
    >
      {/* Image Section On LeftSide */}
      <div
        ref={imageSectionRef}
        className="flex xs:justify-center sm:justify-center col-span-5 xs:col-span-12 sm:col-span-12 md:col-span-6"
      >
        <ImageSection />
      </div>
      {/* Collapse/Accordion On RightSide */}
      <div
        ref={collapseSectionRef}
        className="col-span-7 xs:col-span-12 sm:col-span-12 md:col-span-6 xs:mt-12 sm:mt-10"
      >
        <h2 className="text-5xl xs:text-4xl sm:text-4xl md:text-4xl lg:text-5xl font-medium mb-12 xs:mb-4 sm:mb-5">
          Revealing the secrets{" "}
          <br className="xs:hidden sm:hidden md:hidden lg:hidden" /> of our
          achievements
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
                  <div className="mr-12 xs:mr-2 sm:mr-3 md:mr-4 lg:mr-8">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ededed]">
                      {item.leftIcon}
                    </div>
                  </div>
                  {/* Title label */}
                  <div className="text-md font-medium text-gray-800">
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
                      textColor="text-gray-100"
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
