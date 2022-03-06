import { InjectionToken } from "@angular/core";

export const BASE_URL: InjectionToken<unknown> = new InjectionToken("BASE_URL");

export const SUPPORTED_LANGUAGES = [
    "en",
    "fr"
];
