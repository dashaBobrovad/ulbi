import { lazy } from "react";;

const AboutPageLazy = lazy(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return import('./AboutPage');
});

export default AboutPageLazy;
