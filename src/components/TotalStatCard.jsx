import React from 'react'

const TotalStatCard = ({statValue, statTitle, statBg}) => {
  return (
    <div className={`stat--card ${statBg}`}>
        <h3>{statTitle}</h3>
        <p>
            {statValue}
        </p>
    </div>
  )
}

export default TotalStatCard