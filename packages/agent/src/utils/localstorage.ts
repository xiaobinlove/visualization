const ZOV_USER_TOKEN = 'zov-user-token'
export const getToken = () => {
  const token = localStorage.getItem(ZOV_USER_TOKEN)
  return token
}
