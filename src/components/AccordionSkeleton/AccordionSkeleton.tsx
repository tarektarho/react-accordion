import React from "react"
import "./style.css"

const AccordionSkeleton: React.FC = () => {
  return (
    <div className="accordion-skeleton-container h-screen grid place-items-center">
      {/* Skeleton content */}
      <div data-testid="skeleton" className="accordion-container skeleton-loader">
        <div className="w-full">
          {/* Horizontal line */}
          <div data-testid="horizontal-line" className="skeleton-line w-[230px]"></div>

          {/* Accordion main content */}
          <div data-testid="accordion-main" className="accordion-main">
            <div className="skeleton-line h-[122px]"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
          </div>

          {/* Footer */}
          <div data-testid="footer-container" className="footer-continer flex items-center justify-between mt-[32px]">
            <div className="skeleton-line w-[214px]"></div>
            <div className="skeleton-line w-[200px]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordionSkeleton
