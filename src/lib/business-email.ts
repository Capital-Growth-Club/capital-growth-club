/**
 * Business-email check for lead forms. Rejects free/consumer mailbox providers
 * (Gmail, Yahoo, iCloud, AOL, Outlook/Hotmail, ISP mailboxes, …) and common
 * throwaway inboxes, so only company-domain addresses get through.
 */

const BLOCKED_DOMAINS = new Set([
  // Google
  "gmail.com", "googlemail.com",
  // Yahoo / Verizon Media
  "ymail.com", "rocketmail.com", "aol.com", "aim.com", "verizon.net",
  // Microsoft
  "msn.com", "passport.com",
  // Apple
  "icloud.com", "me.com", "mac.com",
  // Privacy / other free webmail
  "protonmail.com", "protonmail.ch", "proton.me", "pm.me", "tutanota.com",
  "tutanota.de", "tuta.io", "tuta.com", "hushmail.com", "fastmail.com",
  "fastmail.fm", "hey.com", "duck.com", "mail.com", "email.com", "usa.com",
  "zoho.com", "zohomail.com", "inbox.com", "mailfence.com", "gmx.us",
  "rediffmail.com", "qq.com", "163.com", "126.com", "sina.com", "naver.com",
  "mail.ru", "bk.ru", "list.ru", "inbox.ru", "rambler.ru",
  // US ISP mailboxes
  "att.net", "sbcglobal.net", "bellsouth.net", "pacbell.net", "flash.net",
  "swbell.net", "ameritech.net", "comcast.net", "xfinity.com", "cox.net",
  "charter.net", "spectrum.net", "roadrunner.com", "rr.com", "twc.com",
  "earthlink.net", "optonline.net", "optimum.net", "frontier.com",
  "frontiernet.net", "windstream.net", "centurylink.net", "q.com",
  "embarqmail.com", "juno.com", "netzero.net", "netzero.com", "mindspring.com",
  "suddenlink.net", "mediacombb.net", "wowway.com", "rcn.com", "shaw.ca",
  "rogers.com", "sympatico.ca", "btinternet.com", "sky.com", "talktalk.net",
  "virginmedia.com", "ntlworld.com", "bigpond.com", "optusnet.com.au",
  // Disposable / throwaway
  "mailinator.com", "guerrillamail.com", "guerrillamail.net", "sharklasers.com",
  "10minutemail.com", "temp-mail.org", "tempmail.com", "yopmail.com",
  "trashmail.com", "getnada.com", "maildrop.cc", "dispostable.com",
  "throwawaymail.com", "mailnesia.com", "fakeinbox.com", "emailondeck.com",
]);

/**
 * Providers that run many country domains (yahoo.co.uk, hotmail.fr,
 * outlook.de, gmx.net, yandex.ru, …) are matched on the first label.
 */
const BLOCKED_PROVIDER_PREFIX =
  /^(gmail|yahoo|hotmail|outlook|live|windowslive|gmx|web|yandex|ya|libero|laposte|orange|wanadoo|free|t-online|seznam|wp|o2|interia|onet|terra|uol|bol|ig)\./;

export function emailDomain(email: string): string {
  const at = email.trim().toLowerCase().lastIndexOf("@");
  return at === -1 ? "" : email.trim().toLowerCase().slice(at + 1).replace(/\.+$/, "");
}

export function isPersonalEmailDomain(domain: string): boolean {
  if (!domain) return false;
  return BLOCKED_DOMAINS.has(domain) || BLOCKED_PROVIDER_PREFIX.test(domain);
}

/** Returns an error message for a non-business email, or "" when it's fine. */
export function businessEmailError(email: string): string {
  const domain = emailDomain(email);
  if (!domain || !domain.includes(".")) return "Please enter a valid email address.";
  if (isPersonalEmailDomain(domain)) {
    return `Please use your work email. Personal addresses like @${domain} can't be used. Use your company domain (e.g. you@yourlender.com).`;
  }
  return "";
}
