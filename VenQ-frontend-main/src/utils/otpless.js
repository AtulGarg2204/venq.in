export const loadOTPlessScriptSignIn = () => {
    const script = document.createElement('script')
    script.id = 'otpless-sdk'
    script.type = 'text/javascript'
    script.src = 'https://otpless.com/v2/auth.js'
    // TODO: replace with your APP ID
    script.setAttribute('data-appid', 'ET5YILHTV79V192PLC59')
    document.head.appendChild(script)
}
export const loadOTPlessScriptSignUp = () => {
    const script = document.createElement('script')
    script.id = 'otpless-sdk'
    script.type = 'text/javascript'
    script.src = 'https://otpless.com/v2/auth.js'
    // TODO: replace with your APP ID
    script.setAttribute('data-appid', 'ZSUSUY2QOK5MET8L8ATE')
    document.head.appendChild(script)
}
export const unloadOTPlessScript = () => {
    const script = document.getElementById('otpless-sdk') //Get the script element
    // Remove the script from the DOM if it exists
    if (script) {
        script.remove()
    }
}