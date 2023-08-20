import React from "react"
import "./style.css"

const AccordionSkeleton: React.FC = () => {
  return (
    <div className="accordion-skeleton-container h-screen grid place-items-center">
      {/* Skeleton content */}
      <div className="accordion-container skeleton-loader">
        <div className="w-full">
          {/* Horizontal line */}
          <div className="skeleton-line w-[230px]"></div>

          {/* Accordion main content */}
          <div className="accordion-main">
            <div className="skeleton-line h-[146px]"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
          </div>

          {/* Footer */}
          <div className="footer-continer flex items-center justify-between mt-[32px]">
            <div className="skeleton-line w-[214px]"></div>
            <div className="skeleton-line w-[200px]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordionSkeleton
