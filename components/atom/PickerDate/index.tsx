import moment from '@date-io/moment'
import {
  KeyboardTimePickerProps,
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { Moment } from 'moment'
import React, { FC, useState } from 'react'
import 'moment/locale/ja'

export interface Props {
  error?: boolean
  margin?: KeyboardTimePickerProps['margin']
  inputVariant?: KeyboardTimePickerProps['inputVariant']
  errorMessage?: string
  initialDate?: Moment
  id?: string
  label?: string
  setter: (d: Moment) => void
}

const PickerDate: FC<Props> = ({
  error = false,
  margin = 'none',
  id,
  errorMessage,
  label,
  initialDate = null,
  setter,
  inputVariant = 'standard',
}) => {
  const [locale] = useState('ja')
  const [d, setD] = useState<Moment | null>(initialDate)

  const handleDateChange = (date: MaterialUiPickersDate) => {
    if (date) {
      setD(date)
      setter(date)
    }
  }

  return (
    <MuiPickersUtilsProvider utils={moment} locale={locale}>
      <DatePicker
        error={error}
        fullWidth
        inputVariant={inputVariant}
        variant="inline"
        margin={margin}
        autoOk
        format="M/D"
        id={id}
        label={error ? errorMessage || label : label}
        disableToolbar
        value={d}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  )
}

export default PickerDate
