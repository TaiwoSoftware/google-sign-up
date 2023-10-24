const sign = document.querySelector('#sign');

sign.addEventListener('click', () => {
    let addendpoint = "https://accounts.google.com/o/oauth2/v2/auth"

    let form = document.createElement('form')
    form.setAttribute('method', 'GET')
    form.setAttribute('action', addendpoint)


    let params = {
        'client_id': '',
        "redirect_url": '',
        'response_type':'token',
        'scope': 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.readonly',
        'include_granted_scopes': 'true',
        'state': 'pass-through-value'
    }
})