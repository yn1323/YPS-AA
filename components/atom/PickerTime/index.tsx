import moment from '@date-io/moment'
import { CollectionsBookmarkRounded } from '@material-ui/icons'
import {
  KeyboardTimePickerProps,
  MuiPickersUtilsProvider,
  TimePicker,
} from '@material-ui/pickers'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { Moment } from 'moment'
import React, { FC, useState } from 'react'

export interface Props {
  error?: boolean
  margin?: KeyboardTimePickerProps['margin']
  inputVariant?: KeyboardTimePickerProps['inputVariant']
  errorMessage?: string
  defaultTime?: Moment
  id?: string
  label?: string
  setter: (d: Moment) => void
}

const PickerTime: FC<Props> = ({
  error = false,
  margin = 'none',
  id,
  errorMessage,
  label,
  defaultTime = null,
  setter,
  inputVariant = 'standard',
}) => {
  const [initialDate, setInitialDate] = useState<Moment | null>(defaultTime)

  const handleDateChange = (date: MaterialUiPickersDate) => {
    if (date) {
      setInitialDate(date)
      setter(date)
    }
  }

  return (
    <MuiPickersUtilsProvider utils={moment}>
      <TimePicker
        error={error}
        fullWidth
        inputVariant={inputVariant}
        variant="inline"
        margin={margin}
        autoOk
        id={id}
        label={error ? errorMessage || label : label}
        ampm={false}
        value={initialDate}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  )
}

export default PickerTime