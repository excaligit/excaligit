import { useEffect } from 'react'

export const usePressCtrlKey = (key, callback) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.key === key) {
        callback()
        event.preventDefault()
        console.log('çalıştı')
      }
    }

    // Klavye tuşuna basıldığında handleKeyPress fonksiyonunu çağır.
    window.addEventListener('keydown', handleKeyPress)

    // Temizlik: bileşen unmount olduğunda event listener'ı kaldır.
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [key, callback])
}

export const usePressKey = (key, callback) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === key) {
        callback()
        event.preventDefault()
        console.log('çalıştı')
      }
    }

    // Klavye tuşuna basıldığında handleKeyPress fonksiyonunu çağır.
    window.addEventListener('keydown', handleKeyPress)

    // Temizlik: bileşen unmount olduğunda event listener'ı kaldır.
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [key, callback])
}
