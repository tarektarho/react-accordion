import React from "react"
import { IoIosArrowForward } from "react-icons/io"

// Define the props interface for the LoadMoreButton component
interface LoadMoreButtonProps {
  disabled: boolean
  onClick: () => void
  text: string
}

// LoadMoreButton component
const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick, disabled, text }) => {
  // Define button styles based on the disabled state
  const buttonStyles = `
    rounded w-[214px] h-[48px] text-white
    flex items-center justify-center
    ${disabled ? "disabled:opacity-75 bg-[#6b7280] cursor-not-allowed" : "bg-[#82DB39] hover:bg-[#82DB39]/80"}
  `

  // Render the LoadMoreButton component
  return (
    <div>
      <button disabled={disabled} onClick={onClick} className={buttonStyles}>
        <span className="mr-[8px]">{text}</span>
        <IoIosArrowForward data-testid="icon" />
      </button>
    </div>
  )
}

export default LoadMoreButton
