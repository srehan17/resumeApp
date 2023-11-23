import React from 'react'

const LanguageSelector = () => {
  return (
    <select data-width="fit">
        <option label="Language-EN" data-content='<span class="flag-icon flag-icon-us"></span> English'>English</option>
        <option label="Language-FR" data-content='<span class="flag-icon flag-icon-mx"></span> Español'>Español</option>
    </select>
  )
}

export default LanguageSelector