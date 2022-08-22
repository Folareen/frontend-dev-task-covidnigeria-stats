import React from 'react'

export const StatesStat = ({stateName, confirmedCases, admittedCases, dishargedCases, deathStat}) => {
  return (
    <tr>
      <td>{stateName}</td>
      <td>{confirmedCases}</td>
      <td>{admittedCases}</td>
      <td>{dishargedCases}</td>
      <td>{deathStat}</td>
    </tr>
  )
}
