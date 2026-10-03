// The visitor's language: the device's on the first visit, or their own
// choice from the ES / EN switch, kept in localStorage. No cookie: the site
// sets none (its cookies page), and the server never learns the choice.

import type { Lang } from "@/content/types";

export const LANG_KEY = "offby1-lang";

/**
 * Runs inline in <head>, before the first paint, on the home page only: a
 * visitor arriving at / with English chosen, or with no choice and a device
 * whose first language is not one of Spain's (Spanish, Catalan, Galician,
 * Basque), is sent to /en/ before any Spanish shows. Any other page, and
 * every crawler (which runs no script, or reports no language), stays where
 * it is. It carries the CSP nonce (app/layout.tsx).
 */
export const LANG_INIT = `try{if(location.pathname==="/"){var s=null;try{s=localStorage.getItem("${LANG_KEY}")}catch(e){}var l=s;if(l!=="es"&&l!=="en"){var d=((navigator.languages&&navigator.languages[0])||navigator.language||"").toLowerCase().split("-")[0];l=d&&["es","ca","gl","eu"].indexOf(d)<0?"en":"es"}if(l==="en")location.replace("/en/"+location.search+location.hash)}}catch(e){}`;

/** Remembers the language the visitor picked on the switch. */
export function storeLang(lang: Lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    // Storage blocked: the device's language decides next time.
  }
}
