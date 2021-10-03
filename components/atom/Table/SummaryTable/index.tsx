import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core'
import React, { FC } from 'react'
import styled from 'styled-components'
import tw from 'tailwind-extended.macro'

interface Props {
  header: string[]
  body: string[][]
  spHideColumnIndex?: number[]
}

const TableCellHidden = styled(TableCell)`
  ${tw`hidden md:table-cell`}
`

const SummaryTable: FC<Props> = ({ header, body, spHideColumnIndex = [] }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {header.map((col, i) =>
            spHideColumnIndex.includes(i) ? (
              <TableCellHidden key={i}>{col}</TableCellHidden>
            ) : (
              <TableCell key={i}>{col}</TableCell>
            )
          )}
        </TableRow>
      </TableHead>
      <TableBody>
        {body.map((row, i) => (
          <TableRow key={i}>
            {row.map((col, j) =>
              spHideColumnIndex.includes(j) ? (
                <TableCellHidden key={j}>{col}</TableCellHidden>
              ) : (
                <TableCell key={j}>{col}</TableCell>
              )
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default SummaryTable
