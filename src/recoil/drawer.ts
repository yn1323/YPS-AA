import { atom } from 'recoil'

type Drawer = boolean

const initialTasks: Drawer = false

export const drawerState = atom<Drawer>({
  key: 'drawer',
  default: initialTasks,
})
