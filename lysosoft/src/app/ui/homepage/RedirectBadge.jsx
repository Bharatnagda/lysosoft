import React from 'react'

const RedirectBadge = ({badgeTitle}) => {
  return (
    <div className="bg-white p-2 rounded-lg text-blue-600 font-medium">{badgeTitle} ↗</div>
  )
}

export default RedirectBadge