import { lazy } from "react";

const AboutPageLazy = lazy(async () => import("./AboutPage"));

export default AboutPageLazy;
