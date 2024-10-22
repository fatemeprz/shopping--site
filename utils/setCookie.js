const setCookie=(token)=>{
    document.cookie=`token=${token}; path=/ ; max-age=${24*60*60}`
}

export {setCookie}