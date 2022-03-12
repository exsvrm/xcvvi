import _fr from "./assets/locales/locales-fr.json";
import _en from "./assets/locales/locales-en.json";

interface Data {
    data: Options;
}

interface Options {
    c: string;
}

export const getTranslation = (c: any) => {
    if (navigator.language.slice(0, 2) == "fr") {
        for (let key of Object.keys(_fr)) {
            console.log(key)
        }
    }

    if (navigator.language.slice(0, 2) == "en") { return _en.map((content) => {
        Object.keys(_en).forEach((content) => {
            return content[c]
        })
    })}
}