import { useMediaQuery as materialUiUseMediaQuery } from '@material-ui/core'
import { theme } from '@constant/theme'

type Up = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const useMediaQuery = (up: Up) => {
  const matches = materialUiUseMediaQuery(theme.breakpoints.up(up))
  return matches
}
