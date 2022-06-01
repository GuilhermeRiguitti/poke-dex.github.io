
export const goToAboutPage = (navigate, pagina) => {
    navigate(`/about/${pagina}`)
}


export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goBack = (navigate) => {
    navigate(-1)
}