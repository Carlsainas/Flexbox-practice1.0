// mobile navbar click menu
function dropdownMenu(){
    var mobileNav = document.getElementById("dropdownClick");
    if(mobileNav.className === "topNav"){
        mobileNav.className += " responsive";
// Change topnav to topnav.responsive (adds responsive to topnav when we have display smaller or same as 680px )
    } 
    else{ 
        mobileNav.className = "topNav";
    }
}
