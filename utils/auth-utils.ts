export const CheckIsLogin = () => {
    if (localStorage.getItem('token')) {
        return true
    }
    else {
        return false
    }
}