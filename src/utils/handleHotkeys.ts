import { ref } from "vue";

const inputSelector = 'input.Prompt-input'

const handleHotkeys = (hotkey:string, allowModalToggle:true, displayHint:boolean, displayModal:boolean, hint?: string) => {

  const handleHotkeyPress = (event:KeyboardEvent) => {
    console.log('event key', event.key)

    if (event.key === 'Escape') {
      return false
    }

    switch (hotkey) {
      case 'i':
        if (event.key === 'i') {
          if (allowModalToggle) {
            if (!checkInputFocus()) {
              return !displayModal
            } else {
              return displayModal
            }
          }
        }
        break;
      case 'h':
        if (event.key === 'h') {
          if (hint) {
            if (!checkInputFocus()) {
              return !displayHint
            } else {
              return displayHint
            }
          }
        }
        break;
      case 'l':
      if (event.key === 'l') {
        if (!checkInputFocus()) {
          event.preventDefault()
          const answerInputElement:HTMLInputElement | null = document.querySelector(inputSelector)
          if (answerInputElement) {
            answerInputElement.focus()
          }
        }
      }
      break;
    }
  }

  const checkInputFocus = () => {
    const activeElement = document.activeElement
    const answerInputElement = document.querySelector(inputSelector)
    return activeElement === answerInputElement
  }

  const addKeydownListener = () => {
    const alreadyAddedElement = document.querySelector('[data-added-listener="true"]')
    if (!alreadyAddedElement) {
      window.addEventListener('keydown', (event) => handleHotkeyPress(event))
      const bodyElement = document.querySelector('body')
      if (bodyElement) bodyElement.insertAdjacentHTML('beforeend', '<div data-added-listener="true"></div>')
    }
  }

  addKeydownListener()

}

export default handleHotkeys