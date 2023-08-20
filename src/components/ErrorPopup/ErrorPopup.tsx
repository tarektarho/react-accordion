import React, { MouseEventHandler } from "react"

type ErrorPopupProps = {
  message: string
  onClose: MouseEventHandler<HTMLButtonElement>
}

const ErrorPopup: React.FC<ErrorPopupProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-64">
        <div className="mb-4 text-red-600 font-semibold">Error</div>
        <div className="text-gray-600">{message}</div>
        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default ErrorPopup
