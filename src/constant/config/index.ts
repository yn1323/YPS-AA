import moment, { Moment } from 'moment'

export type UserType = 'general' | 'admin'
export type ShiftTime = Moment
export type ShiftTimeUnit = '5' | '10' | '15' | '20' | '30'
export type ShiftSubmitFrequency = '1w' | '2w' | '1m'
export type TimeCardAuth = boolean
export type UserName = string
export type ShopName = string
export type ShopId = string

type UserConfig = {
  userType: UserType
  startShiftTime: ShiftTime
  endShiftTime: ShiftTime
  shiftTimeUnit: ShiftTimeUnit
  shiftSubmitFrequency: ShiftSubmitFrequency
  timeCardAuth: TimeCardAuth
  userName: UserName
  shopName: ShopName
  shopId: ShopId
}

export const USER_CONFIG: UserConfig = {
  userType: 'admin',
  startShiftTime: moment('2021-10-02 9:00', 'YYYY-MM-DD hh:mm'),
  endShiftTime: moment('2021-10-02 18:00', 'YYYY-MM-DD hh:mm'),
  shiftTimeUnit: '5',
  shiftSubmitFrequency: '1w',
  timeCardAuth: false,
  userName: '',
  shopName: '',
  shopId: '',
}
