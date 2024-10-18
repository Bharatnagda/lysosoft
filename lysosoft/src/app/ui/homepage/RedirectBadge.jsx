import React from 'react'

const RedirectBadge = ({badgeTitle}) => {
  return (
    <div className="bg-white p-2 rounded-lg text-blue-600 font-medium text-sm">{badgeTitle} ↗</div>
  )
}

export default RedirectBadge