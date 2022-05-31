import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Root = {
    template: `
<div>Root!<span/>
    身份證字號: <input id='uid'><br/>
    名稱: <input id='name'><br/>
    密碼: <input id='pxd'><br/>
    <router-link to="/application/apps">登入</router-link>
</div>
`,
};
const Bar = {template: '<div>Bar</div>'};

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/application/gapps/fco08001', component: Root},
        {path: '/application/gapps/fco08001/bar', component: Bar},
    ],
});

const template = document.createElement('template');
template.innerHTML = `
    <style>
        .router-link-exact-active {
            font-weight: bold;
            text-decoration: none;
        }
    </style>
    <div class="container"></div>
`;

customElements.define(
    'web-app-fco08001',
    class extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({mode: 'open'});
            this.shadowRoot.appendChild(document.importNode(template.content, true));
            this.mount = this.shadowRoot.querySelector('.container');

            this.app = new Vue({
                router,
                template: `
                  <div id="fco08001">
                    <p>
                      <router-link to="/application/gapps/fco08001">Root</router-link>
                      <router-link to="/application/gapps/fco08001/bar">Bar</router-link>
                    </p>
                    <router-view></router-view>
                  </div>
            `.trim(),
            });
        }

        connectedCallback() {
            this.app.$mount(this.mount); // Vue REPLACES mount point
        }

        disconnectedCallback() {
            this.app.$destroy();
        }
    },
);
