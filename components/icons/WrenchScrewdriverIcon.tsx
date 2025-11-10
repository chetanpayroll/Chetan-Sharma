
// Fix: Provide full implementation for the WrenchScrewdriverIcon component.
import React from 'react';

const WrenchScrewdriverIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.73-.664 1.193-.816a2.712 2.712 0 0 1 2.712 2.712 2.712 2.712 0 0 1-.816 1.193l-3.03 2.496m-2.496-3.03-3.03 2.496a2.712 2.712 0 0 1-3.536 0l-1.898-1.898a2.712 2.712 0 0 1 0-3.536l2.496-3.03m-2.496-3.03.01-.01L3 6a2.652 2.652 0 0 1 0-3.749 2.652 2.652 0 0 1 3.749 0L9.828 5.171"
    />
  </svg>
);

export default WrenchScrewdriverIcon;
