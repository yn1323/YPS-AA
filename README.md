# YPS-AA

## Start Guide

### initialize

`npm i`  
`npx husky-init`  
`cd functions && npm i`

### Structure

![structure](https://user-images.githubusercontent.com/17682207/124924793-c3a29500-e036-11eb-9a13-af7096bf164b.png)

---

## Development Guide

1. Start Next.js
   `npm run dev`

2. Start Storybook
   `npm run storybook`

3. Firebase emulator
   `npm run storybook`

4. [GraphQL Server](http://localhost:3000/api/graphql)

---

## i18n

1. Modify locales/en.ts
2. Use Locale

```tsx
import { useLocale } from '@hooks'
const { t } = useLocale()
const Component = () => <Box>{t('ボタン！')}</Box>
```

### Jest

1. Run all test
   `npm test`
1. Run 1 file
   `npm test -- <filename>`
1. Run watch all
   `npm run watchAll`
1. Run watch 1 file
   `npm run watch <filename>`
1. Update snapshot
   `npm run test:update <Component DirectoryName>`
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
