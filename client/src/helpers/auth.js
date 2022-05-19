
export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem('books')
}

export const getPayload = () => {
  const token = window.localStorage.getItem('books')
  
  if (!token) return

  const payload = token.split('.')[1]
  
  console.log(JSON.parse(atob(payload)))
  return JSON.parse(atob(payload))
}

// ? function that checks that user is authenticated
export const userIsAuthenticated = () => {
 
  const payload = getPayload()

  if (!payload) return false
 
  const currentTime = Math.floor(Date.now() / 1000)


  return currentTime < payload.exp
}

// ? This function will check the user id from the payload matches the review user id