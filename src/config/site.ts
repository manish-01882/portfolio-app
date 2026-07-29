import env from "./env";
import { profileConfig } from "./profile";

export const siteConfig = {
  title: profileConfig.name,
  description: profileConfig.description,
  url: env.NEXT_PUBLIC_APP_URL,
  twitter: profileConfig.socials.twitter,
  linkedin: profileConfig.socials.linkedin,
  github: profileConfig.socials.github,
  email: profileConfig.socials.email,
  telegram: profileConfig.socials.telegram,
};