import React from 'react'
import { useRecoilState } from 'recoil'
import { drawerState } from '@recoil/drawer'
import Drawer from '@template/Drawer'
import ListMenu from '@atom/ListMenu'
import { USER_MENU } from '@constant/layout/menus'

const DrawerMenu: React.FC = () => {
  const [open, setOpen] = useRecoilState(drawerState)

  return (
    <Drawer open={open} setOpen={setOpen}>
      <ListMenu items={USER_MENU} delimeterPosition={[1]} />
    </Drawer>
  )
}

export default DrawerMenu
