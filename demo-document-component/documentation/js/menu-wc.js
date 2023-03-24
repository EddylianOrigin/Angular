'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">demo-document-component documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-e16fe50d32dcc5a4f8b379f7d4d77ee74ff42988400307e2c42d9bc4b3df1748a6d9d0d90b965b0df99bdeaadc95c28beeff557b5ec71404a91a61be376aa9a5"' : 'data-target="#xs-components-links-module-AppModule-e16fe50d32dcc5a4f8b379f7d4d77ee74ff42988400307e2c42d9bc4b3df1748a6d9d0d90b965b0df99bdeaadc95c28beeff557b5ec71404a91a61be376aa9a5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e16fe50d32dcc5a4f8b379f7d4d77ee74ff42988400307e2c42d9bc4b3df1748a6d9d0d90b965b0df99bdeaadc95c28beeff557b5ec71404a91a61be376aa9a5"' :
                                            'id="xs-components-links-module-AppModule-e16fe50d32dcc5a4f8b379f7d4d77ee74ff42988400307e2c42d9bc4b3df1748a6d9d0d90b965b0df99bdeaadc95c28beeff557b5ec71404a91a61be376aa9a5"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HorizontalTreeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HorizontalTreeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RenamePopupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RenamePopupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-e16fe50d32dcc5a4f8b379f7d4d77ee74ff42988400307e2c42d9bc4b3df1748a6d9d0d90b965b0df99bdeaadc95c28beeff557b5ec71404a91a61be376aa9a5"' : 'data-target="#xs-injectables-links-module-AppModule-e16fe50d32dcc5a4f8b379f7d4d77ee74ff42988400307e2c42d9bc4b3df1748a6d9d0d90b965b0df99bdeaadc95c28beeff557b5ec71404a91a61be376aa9a5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-e16fe50d32dcc5a4f8b379f7d4d77ee74ff42988400307e2c42d9bc4b3df1748a6d9d0d90b965b0df99bdeaadc95c28beeff557b5ec71404a91a61be376aa9a5"' :
                                        'id="xs-injectables-links-module-AppModule-e16fe50d32dcc5a4f8b379f7d4d77ee74ff42988400307e2c42d9bc4b3df1748a6d9d0d90b965b0df99bdeaadc95c28beeff557b5ec71404a91a61be376aa9a5"' }>
                                        <li class="link">
                                            <a href="injectables/NodeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NodeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/NodeService.html" data-type="entity-link" >NodeService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});