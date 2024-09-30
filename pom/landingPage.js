const landingPage = {
    getNavBarDocs : `.navbar__inner .navbar__items:nth-of-type(1) .navbar__link:nth-child(3)`,
    getNavBarApi : `div#__docusaurus > .navbar.navbar--fixed-top  .navbar__items > a:nth-of-type(3)`,
    getNavBarNode : `div#__docusaurus > .navbar.navbar--fixed-top a[role='button']`,
    getNavBarCommunity : `div#__docusaurus > .navbar.navbar--fixed-top  .navbar__items > a:nth-of-type(4)`,
    javaMenu : `.dropdown__menu li:nth-of-type(3)`,
    docsHeader : `div#__docusaurus_skipToContent_fallback > .docsWrapper_hBAB > .docRoot_UBD9 > .docMainContainer_TBSr article h1`,
    gettingStartedButton : `.getStarted_Sjon`,
    starButton : `.github-stargazers [rel='noopener noreferrer']:nth-of-type(1)`,
    followButton : `div#__docusaurus_skipToContent_fallback > .hero.hero--primary.heroBanner_UJJx .gh-count`,
    codeGenText : `div#__docusaurus > .footer.footer--dark  .footer__links.row > div:nth-of-type(1) > .clean-list.footer__items > li:nth-of-type(1) > .footer__link-item`

}
export default landingPage;