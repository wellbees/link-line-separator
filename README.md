
# Link Line Separator 

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/wellbees/color-picker-input/blob/master/LICENSE)

Custom line or link separator for javascript project

## Installation 

```bash 
  npm install @wellbees/link-line-separator
```
    
## Usage/Examples

```js
import { LinkLineSeparator } from '@wellbees/link-line-separator'

function App() {
  const exampleText = "Lorem Ipsum is simply dummy text of the printing and typesetting\n industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an https://lorem.ipsum  unknown printer took a galley of type and scrambled it scrambled it to make a type tel:888888888 specimen book. https://lorem.ipsum It has survived not only five centuries, but also the leap http://lorem.ipsum into electronic typesetting, remaining mailto:lorem.ipsum essentiallyto make a type specimen book. It has survived http://lorem.ipsum not only five-*-centuries, but also the leap into electronic tel:888888888 typesetting, remaining essentially\n unchanged.-*-It was popularised in the 1960s with the release of Letraset sheets containing https://lorem.ipsum Lorem Ipsum passages, and more recently mailto:lorem.ipsum with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  return (
    <>
      {/* Small Usage */}
      <LinkLineSeparator linkSelf text={exampleText} />

      {/* Medium Usage */}
      <LinkLineSeparator
        linkSelf
        linkRegex={/(mailto:[^\s]+|tel:[^\s]+)/g}
        linkText='Click to Link'
        lineSplitter='-*-'
        text={exampleText}
      />

      {/* Full Usage */}
      <LinkLineSeparator
        className='w-full mb-10'
        style={{ background: 'yellow', padding: 5 }}
        linkSelf
        linkClassName='text-blue hover:text-green'
        linkTarget='_self'
        linkRegex={/(mailto:[^\s]+|tel:[^\s]+)/g}
        linkText='Click to Link'
        lineClassName='leading-5'
        lineSplitter='-*-'
        lineElement='li'
        text={exampleText}
      />
    </>
  )
}
```



  ## Props

| Name | Type | Default | Description | 
| --- | --- | --- | --- |
| className | String | | Wrapper area class |
| style | Object | | Wrapper area style |
| linkSelf | Boolean | `true` | Allows regular url converted |
| linkClassName | String | ` ` | A tag class `<a class=''` |
| linkTarget | `_blank` \| `_self` \| `_parent` \| `_top` | `_blank` | A tag target `<a target=''` |
| linkRegex | RegExp | | Custom link detector regex. Exam: `/(mailto:[^\s]+|tel:[^\s]+)/g` |
| linkText | String | | Used to define class |
| lineClassName | String | ` ` | Line tag class `<div class=''` |
| lineSplitter | String | `\n`| Value to use for row |
| lineElement | String | `div` | Tag for rows. Exams: `<div`, `<li`, `<block` |
| text | String (Required)| | Value |

### Features

- Customize class and style
- Custom Link Regex
- Custom Line Detector 

  
### Min React Version

React: **16.13.1**

### Packages Used

[prop-types](https://www.npmjs.com/package/prop-types)

  
### Feedback

If you have any feedback, please contact us at tech@wellbees.co.
### Authors
- [@azizsenturk](https://github.com/azizsenturk)

  