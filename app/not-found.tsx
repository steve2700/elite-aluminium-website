import { PageHero } from "@/components/page-hero"
import { CallButton, LinkButton } from "@/components/buttons"

export default function NotFound() {
  return (
    <PageHero crumbs={[{ name: "Page not found", href: "/404" }]} title="This page is not here" text="The page you are looking for does not exist. Head back home, browse our photo gallery, or call us.">
      <LinkButton href="/" look="white">Back to home</LinkButton>
      <LinkButton href="/gallery" look="outlineLight">Photo gallery</LinkButton>
      <CallButton />
    </PageHero>
  )
}
