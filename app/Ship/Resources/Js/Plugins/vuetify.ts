import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { defaultLight } from '@ship/Js/Themes/default-light.ts';
import { defaultDark } from '@ship/Js/Themes/default-dark.ts';
import { md2 } from 'vuetify/blueprints';
import '@mdi/font/css/materialdesignicons.css';
import { mdi, aliases } from 'vuetify/iconsets/mdi';

export default createVuetify({
    blueprint: md2,
    theme: {
        defaultTheme: 'defaultDark',
        themes: {
            defaultDark,
            defaultLight,
        },
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
});
