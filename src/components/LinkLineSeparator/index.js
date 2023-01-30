import { createElement } from 'react'
import PropTypes from 'prop-types'

const LinkLineSeparator = ({
  className,
  style,
  linkSelf,
  linkClassName,
  linkTarget,
  linkRegex,
  linkText,
  lineClassName,
  lineSplitter,
  lineElement,
  text
}) => {
  let parentElement = 'div'

  const distinct = (value, index, self) => {
    return self.indexOf(value) === index
  }

  const handleLinkSplitter = (defaultText) => {
    if (defaultText && linkSelf) {
      let urlRegex =
        /(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,5}(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)[^\s]+)/g
      let splitForSelfLinkArray = defaultText?.match(urlRegex)?.filter(distinct)
      if (splitForSelfLinkArray) {
        splitForSelfLinkArray?.forEach((url) => {
          defaultText = defaultText?.replaceAll(
            url,
            `<a rel='noopener noreferrer' class='${linkClassName}' target='${linkTarget}' role='button' href='${url}'>${url}</a>`
          )
        })
      }
    }

    if (defaultText && linkRegex) {
      let splitForRegLinkArray = defaultText?.match(linkRegex)?.filter(distinct)
      if (splitForRegLinkArray) {
        splitForRegLinkArray?.forEach((url) => {
          defaultText = defaultText?.replaceAll(
            url,
            `<a rel='noopener noreferrer' class='${linkClassName}' target='${linkTarget}' role='button' href='${url}'>${
              linkText || url
            }</a>`
          )
        })
      }
    }
    return defaultText
  }

  const handleLineSplitter = (defaultText) => {
    let splitForRegexLineText = defaultText
    if (defaultText && lineSplitter) {
      let splitForRegexLineArray = defaultText?.split(lineSplitter)
      if (splitForRegexLineArray?.length > 0) {
        splitForRegexLineText = ''
        splitForRegexLineArray?.forEach((line) => {
          splitForRegexLineText += `<${lineElement} class='${lineClassName}'>${line}</${lineElement}>`
        })
      }
    }
    return splitForRegexLineText
  }

  if (['li', 'ol'].includes(lineElement)) {
    parentElement = 'ul'
  }

  return createElement(parentElement, {
    className,
    style,
    dangerouslySetInnerHTML: {
      __html: handleLineSplitter(handleLinkSplitter(text))
    }
  })
}

LinkLineSeparator.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  linkSelf: PropTypes.bool,
  linkClassName: PropTypes.string,
  linkTarget: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
  linkRegex: PropTypes.instanceOf(RegExp),
  linkText: PropTypes.string,
  lineClassName: PropTypes.string,
  lineSplitter: PropTypes.string,
  lineElement: PropTypes.string,
  text: PropTypes.string.isRequired
}

LinkLineSeparator.defaultProps = {
  linkSelf: true,
  linkTarget: '_blank',
  linkClassName: '',
  lineClassName: '',
  lineSplitter: '\n',
  lineElement: 'div'
}

export default LinkLineSeparator
