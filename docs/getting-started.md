---
sidebar_position: 1
---

# Начало работы

Установите требуемую библиотеку доп. функций

```bash
npm install @devproger/styles
```

## Пример использования

Используйте утилиту classNames в компонентах React

```jsx title="src/app.tsx"
import React from 'react';
import cls from './Main.module.scss'
import { classNames } from '@devproger/styles'

function App() {
  return (
    <div className={classNames(
      cls.Main, { [cls.ModeClass]: true }, [cls.AdditionalClass])
    }>
      Test
    </div>
  )
}
```
