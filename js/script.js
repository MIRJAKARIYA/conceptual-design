const wishlistPage = document.getElementById('wishlist-page')
const homePage = document.getElementById('home-page')


const navigateToHomePage = () =>{
    homePage.style.display = "block";
    wishlistPage.style.display = "none"
}

const navigateToWishListPage = () =>{
    wishlistPage.style.display = "block";
    homePage.style.display = "none"
}

