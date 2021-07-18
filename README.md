# YPS-AA

## Start Guide

### initialize

`npm i`  
`npx husky-init`

### Structure

![structure](https://user-images.githubusercontent.com/17682207/124924793-c3a29500-e036-11eb-9a13-af7096bf164b.png)

## Development Guide

1. Start Next.js
   `npm run dev`

2. Start Storybook
   `npm run storybook`

## i18n

1. Modify locales/en.ts
2. Use Locale

```tsx
import { useLocale } from '@hooks'
const { t } = useLocale()
const Component = () => <Box>{t('ボタン！')}</Box>
```

## Test

### Jest

1. Run test
   `npm run test`
1. Update snapshot
   `npm run test -u <Component DirectoryName>`
1. Coverage
   `npm run test:coverage`

## Build Story book

`npm run build-storybook`

### Use husky in Source Tree

1. Command

   ```sh
   # bash:
   echo 'export PATH="/usr/local/bin/:$PATH"' >> ~/.huskyrc
   echo 'source ~/.bash_profile' >> ~/.huskyrc
   # zsh:
   echo 'export PATH="/usr/local/bin/:$PATH"' >> ~/.huskyrc
   echo 'source ~/.zprofile' >> ~/.huskyrc
   ```

1. open from `stree` command

### Add Husky Command

https://github.com/typicode/husky/issues/866
