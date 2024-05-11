---
sidebar_position: 2
---

# classNames

Функция позволяющая в упрощенной форме привязывать классы модульных и обычных стилей к компоненту React

```jsx title="Пример"
import React from 'react';
import cls from './Main.module.scss'
import { classNames } from '@devproger/styles'

function App() {
  const mods = {
    [cls.ModeClass]: true,
    [cls.ModeClassDisable]: false,
  }
  
  return (
    <div className={classNames(
      cls.Main, mods, [cls.AdditionalClass])
    }>
      Test
    </div>
  )
}
```

:::caution
Все 3 входных параметра функции обязательны <br />
Можете использовать следующий формат для функции: <br />
```classNames(cls.Main, {}, [])``` <br />
```classNames(', { [cls.Mode]: true }, [])``` <br />
```classNames('', {}, [cls.Additional])``` <br />
:::
