import '@popperjs/core'
import 'bootstrap/js/dist/collapse'
import Popover from 'bootstrap/js/dist/popover'

const popoverTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'))
popoverTriggerList.forEach((triggerEl) => {
  const popover = new Popover(triggerEl, {
    html: true,
    content: (el) => {
      const originalContent = el.getAttribute('data-bs-content');
      const linked = document.getElementById(el.getAttribute('data-bs-describedby') ?? '')?.cloneNode(true)
      return linked ?? originalContent
    }
  })
  return popover
})
