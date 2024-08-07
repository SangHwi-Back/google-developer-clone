import { Noto_Sans } from "next/font/google";

const _Sans_800 = Noto_Sans({weight: "800", subsets: ['latin']});
const _Sans_700 = Noto_Sans({weight: "700", subsets: ['latin']});
const _Sans_500 = Noto_Sans({weight: "500", subsets: ['latin']});
const _Sans_400 = Noto_Sans({weight: "400", subsets: ['latin']});

type FavoriteFontKey = 'title' | 'subTitle' | 'neatTitle' | 'description' | 'description2' | 'button' | 'buttonBold' | 'footer';
type CommonFontKey = 'title' | 'subTitle' | 'description' | 'description2';

type FontKey = {
    common: { [key in CommonFontKey]: string },
    favorite: { [key in FavoriteFontKey]: string },
}

const CommonFont: FontKey = {
    common: {
        title: _Sans_700 + 'font-size: 32px;',
        subTitle: _Sans_700 + 'font-size: 24px;',
        description: _Sans_700 + 'font-size: 16px; -webkit-font-smoothing: antialiased',
        description2: '',
    },
    favorite: {
        title: _Sans_800 + 'font-size: 32px;',
        subTitle: _Sans_700 + 'font-size: 24px;',
        neatTitle: _Sans_500 + 'font-size: 18px;',
        description: _Sans_700 + 'font-size: 16px; -webkit-font-smoothing: antialiased',
        description2: _Sans_400 + 'font-size: 16px; -webkit-font-smoothing: antialiased',
        button: _Sans_500 + 'font-size: 14px;',
        buttonBold: _Sans_800 + 'font-size: 14px;',
        footer: _Sans_400 + 'font-size: 13px; -webkit-font-smoothing: antialiased'
    }
}

export default CommonFont;
